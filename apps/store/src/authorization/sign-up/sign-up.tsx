import { Button } from 'antd';

import { Form, Field } from '@monorepo-store/form-components';
import { useSignUp } from './use-sign-up';
import { useAuthorizationStyles } from '../use-authorization-styles';

export const SignUp = () => {
  const { onSubmit, validationScheme } = useSignUp();
  const classes = useAuthorizationStyles();

  return (
    <Form className={classes.formContainer} onSubmit={onSubmit} formConfig={{ resolver: validationScheme }}>
      <Field type="text" name="name" label="Name" required />
      <Field type="text" name="email" label="Email" required />
      <Field type="password" name="password" label="Password" required />
      <Button htmlType="submit" type="primary">
        Create an account
      </Button>
    </Form>
  );
};
