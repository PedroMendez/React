import React from 'react';
import { Switch, Route } from 'react-router-dom';
import asyncComponent from '../../helpers/AsyncFunc';
import getDevRouters from '../../customApp/router';

class AppRouter extends React.Component {
  render() {
    const { url } = this.props;
    return (
      <Switch>
        <Route
          exact
          path={`${url}/`}
          component={asyncComponent(() => import('../Widgets/index.js'))}
        />
        <Route
          exact
          path={`${url}/inbox`}
          component={asyncComponent(() => import('../Mail'))}
        />
        <Route
          exact
          path={`${url}/mailbox`}
          component={asyncComponent(() => import('../Mail'))}
        />
        <Route
          exact
          path={`${url}/calendar`}
          component={asyncComponent(() => import('../Calendar/Calendar'))}
        />
        <Route
          exact
          path={`${url}/googlemap`}
          component={asyncComponent(() => import('../Map/GoogleMap/googleMap'))}
        />
        <Route
          exact
          path={`${url}/notes`}
          component={asyncComponent(() => import('../Notes'))}
        />
        <Route
          exact
          path={`${url}/todo`}
          component={asyncComponent(() => import('../Todo'))}
        />
        <Route
          exact
          path={`${url}/clients`}
          component={asyncComponent(() => import('../Contacts'))}
        />
        <Route
          exact
          path={`${url}/caregivers`}
          component={asyncComponent(() => import('../Caregivers'))}
        />         
        <Route
          exact
          path={`${url}/offices`}
          component={asyncComponent(() => import('../Offices'))}
        />
        <Route
          exact
          path={`${url}/googleChart`}
          component={asyncComponent(() => import('../Charts/googleChart'))}
        />
        <Route
          exact
          path={`${url}/import`}
          component={asyncComponent(() => import('../AdvancedUI/uppy'))}
        />
        <Route
          exact
          path={`${url}/dropzone`}
          component={asyncComponent(() => import('../AdvancedUI/dropzone'))}
        />
        {getDevRouters(url)}
      </Switch>
    );
  }
}

export default AppRouter;
