import { get, set } from 'lodash';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { GraphQLModule } from '@nestjs/graphql';

import { CompanyModule } from '../company/company.module';
import { ProductModule } from '../product/product.module';
import { UserModule } from '../user/user.module';
import { decode } from '../utils/jwt.utils';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/nestjs-graphql'),
    GraphQLModule.forRoot({
      autoSchemaFile: './apps/api/schema.gql',
      context: ({ req, res }) => {
        const token = get(req, 'cookies.token');
        console.log({ token });

        const user = token ? decode(get(req, 'cookies.token')) : null;
        console.log(user);

        if (user) {
          set(req, 'user', user);
        }

        return { req, res };
      },
      cors: {
        origin: 'http://localhost:4200',
        credentials: true,
        allowedHeaders: ['Content-Type', 'Authorization'],
      },
    }),

    CompanyModule,
    ProductModule,
    UserModule,
  ],
})
export class AppModule {}
