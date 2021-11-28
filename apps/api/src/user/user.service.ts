import { omit } from 'lodash';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { nanoid } from 'nanoid';
import { UserInputError } from 'apollo-server-express';

import Ctx from '../types/context.type';
import { User, UserDocument, CreateUserInput, ConfirmUserInput, LoginInput } from './user.schema';
import { signJwt } from '../utils/jwt.utils';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async createUser(input: CreateUserInput) {
    const confirmToken = nanoid(32);
    const user = await this.userModel.create({ ...input, confirmToken });
    user.active = true;
    user.save();

    return user;
  }

  async confirmUser({ email, confirmToken }: ConfirmUserInput) {
    const user = await this.userModel.findOne({ email });

    if (!user || confirmToken !== user.confirmToken) {
      return new UserInputError('Email or confirm token are incorrect');
    }

    user.active = true;
    await user.save();

    return user;
  }

  async login({ email, password }: LoginInput, context: Ctx) {
    const user = await this.userModel.findOne({ email }).select('-__v -confirmToken');

    if (!user || !(await user.comparePassword(password))) {
      throw new Error('Invalid email or password');
    }

    if (!user.active) {
      throw new Error('Please confirm your email address');
    }

    const jwt = signJwt(omit(user.toJSON(), ['password', 'active']));

    const cookie = `token=${jwt}; HttpOnly; Path=/; Max-Age=${1000 * 60 * 60 * 24 * 7}`;
    context.res.setHeader('Set-Cookie', cookie);

    return user;
  }

  async logout(context) {
    const cookie = 'token="; HttpOnly; Path=/; Max-Age=0';

    context.res.setHeader('Set-Cookie', cookie);
    return null;
  }
}
