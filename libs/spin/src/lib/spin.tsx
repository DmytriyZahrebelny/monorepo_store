import { createUseStyles } from 'react-jss';
import { Spin as AntdSpin } from 'antd';
import 'antd/dist/antd.css';

export const useSpinStyles = createUseStyles({
  spin: {
    position: 'absolute',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)',
    height: '100%',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export const Spin = () => {
  const classes = useSpinStyles();

  return <AntdSpin className={classes.spin} size="large" />;
};
