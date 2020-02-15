import React, { useEffect } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { routes } from 'routes';
import { Provider } from 'react-redux';
import store from 'store';
import MainTemplate from 'templates/MainTemplate';
import Notes from 'views/Notes';
import Twitters from 'views/Twitters';
import Articles from 'views/Articles';
import { auth } from '../firebase';
import DetailsPage from './DetailsPage';
import AuthPage from './AuthPage';

const Root = () => {
  useEffect(() => {
    auth.signInWithEmailAndPassword('test1@gmail.com', '123456');
  }, []);

  return (
    <Provider store={store}>
      <BrowserRouter>
        <MainTemplate>
          <Switch>
            <Route exact path={routes.home} render={() => <Redirect to={routes.twitter} />} />
            <Route exact path={routes.notes} component={Notes} />
            <Route path={routes.note} component={DetailsPage} />
            <Route exact path={routes.twitters} component={Twitters} />
            <Route path={routes.twitter} component={DetailsPage} />
            <Route exact path={routes.articles} component={Articles} />
            <Route path={routes.article} component={DetailsPage} />
            <Route path={routes.login} component={AuthPage} />
            <Route path={routes.register} component={AuthPage} />
            <Route render={() => <Redirect to="/notes" />} />
          </Switch>
        </MainTemplate>
      </BrowserRouter>
    </Provider>
  );
};

export default Root;
