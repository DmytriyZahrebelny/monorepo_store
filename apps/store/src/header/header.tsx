import { Col, Row } from 'antd';
import { Link } from 'react-router-dom';

import { Icon } from '@monorepo-store/icon';
import { useHeaderStyles } from './use-header-styles';
import { HeaderSearch } from './header-search';
import { HeaderLogin } from './header-login';

export const Header = () => {
  const classes = useHeaderStyles();

  return (
    <div className={classes.header}>
      <Row className={classes.headerContainer} align="middle">
        <Col span={5}>
          <Link to="/">
            <Icon name="logo" />
          </Link>
        </Col>
        <Col span={14}>
          <HeaderSearch />
        </Col>
        <Col span={2}>
          <HeaderLogin />
        </Col>
        <Col span={2}>sign-in</Col>
      </Row>
    </div>
  );
};
