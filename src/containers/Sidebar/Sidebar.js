import React, { Component } from 'react';
import { connect } from 'react-redux';
import clone from 'clone';
import { Link } from 'react-router-dom';
import { Layout } from 'antd';
import { Scrollbars } from 'react-custom-scrollbars';
import Menu from '../../components/uielements/menu';
import IntlMessages from '../../components/utility/intlMessages';
import getDevSidebar from '../../customApp/sidebar';

import {
  toggleOpenDrawer,
  changeOpenKeys,
  changeCurrent,
  toggleCollapsed
} from '../../redux/app/reducer';
import Logo from '../../components/utility/logo';

const { Sider } = Layout;

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.onOpenChange = this.onOpenChange.bind(this);
  }
  handleClick(e) {
    this.props.changeCurrent(e.key);
    if (this.props.app.view === 'MobileView') {
      this.props.toggleCollapsed();
      this.props.toggleOpenDrawer();
    }
  }
  onOpenChange(newOpenKeys) {
    const { app, changeOpenKeys } = this.props;
    const latestOpenKey = newOpenKeys.find(
      key => !(app.openKeys.indexOf(key) > -1)
    );
    const latestCloseKey = app.openKeys.find(
      key => !(newOpenKeys.indexOf(key) > -1)
    );
    let nextOpenKeys = [];
    if (latestOpenKey) {
      nextOpenKeys = this.getAncestorKeys(latestOpenKey).concat(latestOpenKey);
    }
    if (latestCloseKey) {
      nextOpenKeys = this.getAncestorKeys(latestCloseKey);
    }
    changeOpenKeys(nextOpenKeys);
  }
  getAncestorKeys = key => {
    const map = {
      sub3: ['sub2']
    };
    return map[key] || [];
  };

  render() {
    // const { url, app, toggleOpenDrawer, bgcolor } = this.props;
    const { url, app, toggleOpenDrawer } = this.props;
    const collapsed = clone(app.collapsed) && !clone(app.openDrawer);
    const { openDrawer } = app;
    const mode = collapsed === true ? 'vertical' : 'inline';
    const onMouseEnter = event => {
      if (openDrawer === false) {
        toggleOpenDrawer();
      }
      return;
    };
    const onMouseLeave = () => {
      if (openDrawer === true) {
        toggleOpenDrawer();
      }
      return;
    };
    const scrollheight = app.height;
    const styling = {
      backgroundColor: "#00897b"
    };
    const submenuColor = {
      color: "#ebebeb"
    };
    return (
      <Sider
        trigger={null}
        collapsible={true}
        collapsed={collapsed}
        width="240"
        className="isomorphicSidebar"
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        style={styling}
      >
        <Logo collapsed={collapsed} />
        <Scrollbars style={{ height: scrollheight - 70 }}>
          <Menu
            onClick={this.handleClick}
            theme="dark"
            mode={mode}
            openKeys={app.openKeys}
            selectedKeys={[app.current]}
            onOpenChange={this.onOpenChange}
            className="isoDashboardMenu"
          >

            <Menu.Item key="offices">
              <Link to={`${url}/offices`}>
                <span className="isoMenuHolder" style={submenuColor}>
                  <i className="ion-grid" />
                  <span className="nav-text">
                    <IntlMessages id="sidebar.offices" />
                  </span>
                </span>
              </Link>
            </Menu.Item> 

            <Menu.Item key="caregivers">
              <Link to={`${url}/caregivers`}>
                <span className="isoMenuHolder" style={submenuColor}>
                  <i className="ion-android-contacts" />
                  <span className="nav-text">
                    <IntlMessages id="sidebar.caregivers" />
                  </span>
                </span>
              </Link>
            </Menu.Item>

            <Menu.Item key="clients">
              <Link to={`${url}/clients`}>
                <span className="isoMenuHolder" style={submenuColor}>
                  <i className="ion-android-person-add" />
                  <span className="nav-text">
                    <IntlMessages id="sidebar.clients" />
                  </span>
                </span>
              </Link>
            </Menu.Item>                        

            <Menu.Item key="calendar">
              <Link to={`${url}/calendar`}>
                <span className="isoMenuHolder" style={submenuColor}>
                  <i className="ion-calendar" />
                  <span className="nav-text">
                    <IntlMessages id="sidebar.calendar" />
                  </span>
                    <i 
                      className="ion-android-warning"
                      style={{marginLeft: 60}}
                    />   
                </span>
              </Link>
            </Menu.Item>

            <Menu.Item key="notes">
              <Link to={`${url}/notes`}>
                <span className="isoMenuHolder" style={submenuColor}>
                  <i className="ion-clipboard" />
                  <span className="nav-text">
                    <IntlMessages id="sidebar.notes" />
                  </span>
                </span>
              </Link>
            </Menu.Item>

            <Menu.Item key="todo">
              <Link to={`${url}/todo`}>
                <span className="isoMenuHolder" style={submenuColor}>
                  <i className="ion-android-list" />
                  <span className="nav-text">
                    <IntlMessages id="sidebar.todos" />
                  </span>
                </span>
              </Link>
            </Menu.Item>

            <Menu.Item key="email">
              <Link to={`${url}/mailbox`}>
                <span className="isoMenuHolder" style={submenuColor}>
                  <i className="ion-android-mail" />
                  <span className="nav-text">
                    <IntlMessages id="sidebar.email" />
                  </span>
                </span>
              </Link>
            </Menu.Item>

            <Menu.Item key="map">
              <Link to={`${url}/googlemap`}>
                <span className="isoMenuHolder" style={submenuColor}>
                  <i className="ion-map" />
                  <span className="nav-text">
                    <IntlMessages id="sidebar.maps" />
                  </span>
                </span>
              </Link>
            </Menu.Item>

            <Menu.Item key="uppy">
              <Link to={`${url}/import`}>
                <span className="isoMenuHolder" style={submenuColor}>
                  <i className="ion-android-upload" />
                  <span className="nav-text">
                    <IntlMessages id="sidebar.uppy" />
                  </span>
                </span>
              </Link>
            </Menu.Item>
            {getDevSidebar(url, submenuColor)}
          </Menu>
        </Scrollbars>
      </Sider>
    );
  }
}

export default connect(
  state => ({
    app: state.App.toJS()
  }),
  { toggleOpenDrawer, changeOpenKeys, changeCurrent, toggleCollapsed }
)(Sidebar);
