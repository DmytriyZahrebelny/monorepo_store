import { createUseStyles } from 'react-jss';

export const useGadgetCardStyles = createUseStyles({
  card: {
    display: 'block',
    width: 240,
    margin: '0 auto 24px',
    padding: 10,
    backgroundColor: '#fff',
    boxShadow: '0px 2px 2px rgba(0, 8, 29, 0.05), 0px 0px 2px rgba(0, 8, 29, 0.06), 0px 1px 3px rgba(0, 8, 29, 0.08)',
  },
  image: {
    display: 'block',
    margin: '0 auto',
    width: 220,
    height: 300,
    objectFit: 'contain',
    objectPosition: 'center',
  },
});
