import { Col, Row } from 'antd';

import { Gadgets } from '../gadgets';
import { Header } from '../header';
import { useGadgetStoreStyles } from './use-gadget-store-styles';

export const GadgetStore = () => {
  const classes = useGadgetStoreStyles();
  return (
    <>
      <Header />
      <Row className={classes.container}>
        <Col span={5} style={{ background: 'red' }} />
        <Col span={19}>
          <Gadgets />
        </Col>
      </Row>
    </>
  );
};
