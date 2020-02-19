import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { routes } from 'routes';
import { Provider } from 'react-redux';
import store from 'store';
import PrivateRoute from 'utils/routing/PrivateRoute';
import MainTemplate from 'templates/MainTemplate';
import Notes from 'views/Notes';
import Twitters from 'views/Twitters';
import Articles from 'views/Articles';
import DetailsPage from './DetailsPage';
import LoginPage from './LoginPage';
import RegisterPage from './RegisterPage';

const Root = () => {
  // useEffect(() => {
  //   auth.signInWithEmailAndPassword('test1@gmail.com', '123456');
  // }, []);

  return (
    <Provider store={store}>
      <BrowserRouter>
        <MainTemplate>
          <Switch>
            <Route exact path={routes.home} render={() => <Redirect to={routes.notes} />} />
            <PrivateRoute exact path={routes.notes} component={Notes} />
            <PrivateRoute path={routes.note} component={DetailsPage} />
            <PrivateRoute exact path={routes.twitters} component={Twitters} />
            <PrivateRoute path={routes.twitter} component={DetailsPage} />
            <PrivateRoute exact path={routes.articles} component={Articles} />
            <PrivateRoute path={routes.article} component={DetailsPage} />
            <Route path={routes.login} component={LoginPage} />
            <Route path={routes.register} component={RegisterPage} />
            <Route render={() => <Redirect to="/notes" />} />
          </Switch>
        </MainTemplate>
      </BrowserRouter>
    </Provider>
  );
};

export default Root;
