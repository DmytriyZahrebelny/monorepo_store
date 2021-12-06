import { Typography } from 'antd';
import { Link } from 'react-router-dom';

import { GadgetCardProps } from './gadget-card.type';
import { useGadgetCardStyles } from './use-gadget-card-styles';

export const GadgetCard = ({ images, modelName, id, price }: GadgetCardProps) => {
  const classes = useGadgetCardStyles();

  return (
    <Link className={classes.card} to={`/${id}`}>
      <img className={classes.image} src={images} alt="" />
      <Typography.Title level={5}>{modelName}</Typography.Title>
      <Typography.Text>{price}</Typography.Text>
    </Link>
  );
};
