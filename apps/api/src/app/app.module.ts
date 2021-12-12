import { get, set } from 'lodash';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { GraphQLModule } from '@nestjs/graphql';
import { GraphQLError, GraphQLFormattedError } from 'graphql';

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

        const user = token ? decode(get(req, 'cookies.token')) : null;

        if (user) {
          set(req, 'user', user);
        }

        return { req, res };
      },
      cors: {
        origin: ['http://localhost:4200', 'http://localhost:4201'],
        credentials: true,
        allowedHeaders: ['Content-Type', 'Authorization'],
      },
      formatError: (err: GraphQLError) => {
        const graphQLFormattedError: GraphQLFormattedError = {
          message: err.message,
        };

        return graphQLFormattedError;
      },
    }),

    CompanyModule,
    ProductModule,
    UserModule,
  ],
})
export class AppModule {}
