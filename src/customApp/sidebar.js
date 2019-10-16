import React from 'react';
import { Link } from 'react-router-dom';
import Menu from '../components/uielements/menu';
import IntlMessages from '../components/utility/intlMessages';

export default function(url, submenuColor) {
  const sidebars = [];
  sidebars.push(
    <Menu.Item key="githubSearch">
      <Link to={`${url}/export`}>
        <span className="isoMenuHolder" style={submenuColor}>
          <i className="ion-android-download" />
          <span className="nav-text">
            <IntlMessages id="sidebar.githubSearch" />
          </span>
        </span>
      </Link>
    </Menu.Item>
  );
  sidebars.push(
    <Menu.Item key="googleChart">
      <Link to={`${url}/googleChart`}>
        <span className="isoMenuHolder" style={submenuColor}>
          <i className="ion-arrow-graph-up-right" />
          <span className="nav-text">
            <IntlMessages id="sidebar.googleCharts" />
          </span>
        </span>
      </Link>
    </Menu.Item>
  );
  return sidebars;
}
