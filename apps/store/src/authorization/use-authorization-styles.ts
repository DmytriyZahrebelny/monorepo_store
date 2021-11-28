import { createUseStyles } from 'react-jss';

export const useAuthorizationStyles = createUseStyles({
  container: {
    display: 'block',
    width: 700,
    backgroundColor: '#fff',
    boxShadow: '0 8px 32px rgb(39 59 97 / 8%)',

    '& .ant-form-item': {
      marginBottom: 0,
    },
  },
  header: {
    position: 'fixed',
    padding: '10px 20px',
  },
  authorization: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100%',
  },
  formContainer: {
    padding: '20px 50px 50px !important',
  },
});
