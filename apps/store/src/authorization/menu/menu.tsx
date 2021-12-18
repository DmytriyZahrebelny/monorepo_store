import { Link, useLocation } from 'react-router-dom';
import c from 'classnames';

import { ROUTES } from '../../app.constants';
import { useMenuStyles } from './use-menu-styles';

export const Menu = () => {
  const { pathname } = useLocation();
  const classes = useMenuStyles();

  return (
    <div className={classes.menu}>
      <Link className={c({ [classes.aciveLink]: pathname.includes(ROUTES.singIn) })} to={ROUTES.singIn}>
        Log in
      </Link>
      <Link className={c({ [classes.aciveLink]: pathname.includes(ROUTES.signUp) })} to={ROUTES.signUp}>
        Create an account
      </Link>
    </div>
  );
};
