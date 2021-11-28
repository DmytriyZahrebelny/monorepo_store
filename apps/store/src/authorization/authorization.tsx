import { Layout } from 'antd';
import { Link, Route, Switch } from 'react-router-dom';

import { Icon } from '@monorepo-store/icon';
import { Menu } from './menu';
import { SignUp } from './sign-up';
import { SignIn } from './sign-in';
import { useAuthorizationStyles } from './use-authorization-styles';
import { ROUTES } from '../app.constants';

export const Authorization = () => {
  const classes = useAuthorizationStyles();
  return (
    <Layout>
      <header className={classes.header}>
        <Link to={ROUTES.gadgets}>
          <Icon name="logo" />
        </Link>
      </header>
      <div className={classes.authorization}>
        <div className={classes.container}>
          <Menu />
          <Switch>
            <Route path={ROUTES.singIn} component={SignIn} />
            <Route path={ROUTES.signUp} component={SignUp} />
          </Switch>
        </div>
      </div>
    </Layout>
  );
};
