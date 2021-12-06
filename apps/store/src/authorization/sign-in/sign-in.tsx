import { Button } from 'antd';

import { Form, Field } from '@monorepo-store/form-components';
import { useSignIn } from './use-sign-in';
import { useAuthorizationStyles } from '../use-authorization-styles';

export const SignIn = () => {
  const { onSubmit, validationScheme } = useSignIn();
  const classes = useAuthorizationStyles();

  return (
    <Form className={classes.formContainer} onSubmit={onSubmit} formConfig={{ resolver: validationScheme }}>
      <Field type="text" name="email" label="Email" required />
      <Field type="password" name="password" label="Password" required />
      <Button htmlType="submit" type="primary">
        Log in
      </Button>
    </Form>
  );
};
