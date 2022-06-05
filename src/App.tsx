import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Layout } from './components/Layout/Layout';
import { HomePage } from './pages/Home/Home';
import { RouteConstants } from './utilities/RouteConstants';

export const App = () => {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route component={HomePage} exact path={RouteConstants.HOME} />
        </Switch>
      </Layout>
    </Router>
  );
};
