import { createUseStyles } from 'react-jss';
import { ThemaType } from '@monorepo-store/thema';

export const useAuthorizationStyles = createUseStyles((thema: ThemaType) => ({
  container: {
    display: 'block',
    width: 700,
    backgroundColor: '#fff',
    boxShadow: thema.gradients.light,
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
}));
