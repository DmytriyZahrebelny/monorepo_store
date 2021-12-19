import { createUseStyles } from 'react-jss';
import { ThemaType } from '@monorepo-store/thema';

export const useMenuStyles = createUseStyles((thema: ThemaType) => ({
  menu: {
    display: 'flex',
    boxShadow: thema.gradients.light,

    '& a': {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '50%',
      padding: '15px 0',
      fontSize: 'large',
      fontWeight: 'bold',
      color: thema.palette.text.primary,
    },
  },
  aciveLink: {
    backgroundColor: '#d5edfe',
  },
}));
