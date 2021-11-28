import { Route, Switch } from 'react-router-dom';
import { Layout } from 'antd';

import { Authorization } from '../authorization';
import { GadgetStore } from '../gadget-store';
import { ROUTES } from '../app.constants';
import { useAppStyles } from './use-app-styles';

const App = () => {
  const classes = useAppStyles();

  return (
    <Layout className={classes.layout}>
      <Switch>
        <Route exact path={['/', ROUTES.gadgets]} component={GadgetStore} />
        <Route path={[ROUTES.singIn, ROUTES.signUp]} component={Authorization} />
      </Switch>
    </Layout>
  );
};

export default App;
