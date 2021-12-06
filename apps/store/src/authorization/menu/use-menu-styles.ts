import { createUseStyles } from 'react-jss';

export const useMenuStyles = createUseStyles({
  menu: {
    display: 'flex',
    boxShadow: '0 8px 32px rgb(39 59 97 / 8%)',

    '& a': {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '50%',
      padding: '15px 0',
      fontSize: 'large',
      fontWeight: 'bold',
      color: '#273b61',
    },
  },
  aciveLink: {
    backgroundColor: '#d5edfe',
  },
});
