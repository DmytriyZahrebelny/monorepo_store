import { Route, Routes } from 'react-router-dom';
import { Layout } from 'antd';

import { Authorization } from '../authorization';
import { GadgetStore } from '../gadget-store';
import { ROUTES } from '../app.constants';
import { useAppStyles } from './use-app-styles';
import { SignUp } from '../authorization/sign-up';
import { SignIn } from '../authorization/sign-in';

const App = () => {
  const classes = useAppStyles();

  return (
    <Layout className={classes.layout}>
      <Routes>
        <Route index element={<GadgetStore />} />
        <Route path={ROUTES.gadgets} element={<GadgetStore />} />
        <Route element={<Authorization />}>
          <Route path={ROUTES.singIn} element={<SignIn />} />
          <Route path={ROUTES.signUp} element={<SignUp />} />
        </Route>
      </Routes>
    </Layout>
  );
};

export default App;
