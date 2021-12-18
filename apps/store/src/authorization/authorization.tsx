import { Layout } from 'antd';
import { Link, Outlet } from 'react-router-dom';

import { Icon } from '@monorepo-store/icon';
import { Menu } from './menu';
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
          <Outlet />
        </div>
      </div>
    </Layout>
  );
};
