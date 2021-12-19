import { ThemaType } from '@monorepo-store/thema';
import { createUseStyles } from 'react-jss';

export const useFormStyles = createUseStyles((thema: ThemaType) => ({
  label: {
    color: `${thema.palette.text.primary} !important`,
  },
  textField: {
    '& .ant-form-item': {
      marginBottom: 0,
    },
  },
}));
