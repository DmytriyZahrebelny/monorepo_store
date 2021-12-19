import { ThemaType } from '@monorepo-store/thema';
import { createUseStyles } from 'react-jss';

export const useGadgetCardStyles = createUseStyles((thema: ThemaType) => ({
  card: {
    display: 'block',
    width: 240,
    margin: '0 auto 24px',
    padding: 10,
    backgroundColor: '#fff',
    boxShadow: thema.gradients.dark,
  },
  image: {
    display: 'block',
    margin: '0 auto',
    width: 220,
    height: 300,
    objectFit: 'contain',
    objectPosition: 'center',
  },
}));
