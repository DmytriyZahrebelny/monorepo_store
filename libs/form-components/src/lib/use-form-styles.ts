import { createUseStyles } from 'react-jss';

export const useFormStyles = createUseStyles({
  label: {
    color: '#273b61 !important',
  },
  textField: {
    '& .ant-form-item': {
      marginBottom: 0,
    },
  },
});
