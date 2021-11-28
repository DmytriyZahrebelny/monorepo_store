import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useMutation, ApolloError } from '@apollo/client';
import { useHistory } from 'react-router-dom';
import { notification } from 'antd';

import LoginMutation from '../../graphql/Login.mutation.gql';
import QueryMe from '../../graphql/Me.query.gql';
import { LoginMutationType, LoginMutationVariables, LoginInput } from '../../types';

export const useSignIn = () => {
  const history = useHistory();
  const [login, { loading }] = useMutation<LoginMutationType, LoginMutationVariables>(LoginMutation, {
    refetchQueries: [{ query: QueryMe }],
    onError: ({ message }: ApolloError) => {
      notification.error({ message });
    },
    onCompleted: () => {
      history.push('/');
    },
  });

  const onSubmit = (data: LoginInput) => {
    const { email, password } = data;
    login({ variables: { input: { email, password } } });
  };

  const schema = yup.object().shape({
    email: yup.string().email(),
    password: yup.string().required(),
  });

  return {
    onSubmit,
    loading,
    validationScheme: yupResolver(schema),
  };
};
