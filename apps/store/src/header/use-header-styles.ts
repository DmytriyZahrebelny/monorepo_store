import { ThemaType } from '@monorepo-store/thema';
import { createUseStyles } from 'react-jss';

export const useHeaderStyles = createUseStyles((thema: ThemaType) => ({
  header: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: 24,
    backgroundColor: thema.palette.background.secondary,
  },
  headerContainer: {
    width: 1366,
  },
}));
