import { Row, Col } from 'antd';

import { useGadgetsList } from './use-gadgets-list';
import { GadgetCard } from '../gadget-card';
import { useGadgetsListStyles } from './use-gadgets-list-styles';

export const GadgetsList = () => {
  const { gadgets } = useGadgetsList();
  const classes = useGadgetsListStyles();

  return (
    <Row className={classes.gadgetsContainer}>
      {gadgets.map(({ images, modelName, price, _id: id }) => (
        <Col span={6} key={id}>
          <GadgetCard images={images} modelName={modelName} price={price} id={id} />
        </Col>
      ))}
    </Row>
  );
};
