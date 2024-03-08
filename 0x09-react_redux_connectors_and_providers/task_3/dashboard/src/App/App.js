import { StyleSheet, css } from 'aphrodite';
import React, { Component } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';
import Notifications from '../Notifications/Notifications';
import PropTypes from 'prop-types';
import CourseList from '../CourseList/CourseList';
import { getLatestNotification } from '../utils/utils';
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom';
import BodySection from '../BodySection/BodySection';
import { AppContext, user } from './AppContext';
import { connect } from 'react-redux';
import { displayNotificationDrawer, hideNotificationDrawer, loginRequest, logout } from '../actions/uiActionCreators';

const styles = StyleSheet.create({
  body: {
    fontFamily: 'Arial, Helvetica, sans-serif',
  },

  "App-footer": {
    display: 'flex',
    justifyContent: 'center',
    borderTop: '3px solid #e01d3f',
    fontStyle: 'italic',
    width: '100vw',
    position: 'fixed',
    bottom: 0,
  },
});

export const listNotifications = [
  { id: 1, type: 'default', value: 'New course available' },
  { id: 2, type: 'urgent', value: 'New resume available' },
  { id: 3, type: 'urgent', html: getLatestNotification() },
];

export class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: user,
      listNotifications: listNotifications,
    };

    this.markNotificationAsRead = this.markNotificationAsRead.bind(this);

    this.listCourses = [
      { id: 1, name: 'ES6', credit: 60 },
      { id: 2, name: 'Webpack', credit: 20 },
      { id: 3, name: 'React', credit: 40 },
    ];
  }

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = (event) => {
    const { logout } = this.props;
    if (event.ctrlKey && event.key === 'h') {
      alert("Logging you out");
      logout();
    }
  };

  // logIn = (email, password) => {
  //   this.setState({
  //     user: {
  //       email,
  //       password,
  //       isLoggedIn: true,
  //     },
  //   });
  // };

  // logOut = () => {
  //   this.setState({
  //     user: {
  //       email: '',
  //       password: '',
  //       isLoggedIn: false,
  //     },
  //   });
  // };

  markNotificationAsRead = (id) => {
    const newList = this.state.listNotifications.filter((notification) => notification.id !== id);
    this.setState({ listNotifications: newList });
  };

  render() {
    const { isLoggedIn, displayDrawer, displayNotificationDrawer, hideNotificationDrawer, login, logout } = this.props;

    return (
      <AppContext.Provider
        value={{
          user: this.state.user,
          logout: logout,
        }}
      >
        <div className={css(styles.body)}>
          <Notifications
            listNotifications={this.state.listNotifications}
            displayDrawer={displayDrawer}
            handleDisplayDrawer={displayNotificationDrawer}
            handleHideDrawer={hideNotificationDrawer}
            markNotificationAsRead={this.markNotificationAsRead}
          />
          <div>
            <Header />
          </div>
          <div>
            {isLoggedIn ? (
              <BodySectionWithMarginBottom title=''>
                <CourseList listCourses={this.listCourses} />
              </BodySectionWithMarginBottom>
            ) : (
              <BodySectionWithMarginBottom title=''>
                <Login logIn={login} />
              </BodySectionWithMarginBottom>
            )}
            <BodySection title='News from the School'>
              <p>Some Random text</p>
            </BodySection>
          </div>
          <div className={css(styles['App-footer'])}>
            <Footer />
          </div>
        </div>
      </AppContext.Provider>
    );
  }
}

App.defaultProps = {
  isLoggedIn: false,
  displayDrawer: false,
  displayNotificationDrawer: () => {},
  hideNotificationDrawer: () => {},
  loginRequest: () => {},
  logout: () => {},
};

App.propTypes = {
  isLoggedIn: PropTypes.bool,
  displayDrawer: PropTypes.bool,
  displayNotificationDrawer: PropTypes.func,
  hideNotificationDrawer: PropTypes.func,
  loginRequest: PropTypes.func,
  logout: PropTypes.func,
};

export const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.get("isUserLoggedIn"),
    displayDrawer: state.get("isNotificationDrawerVisible"),
  };
};

export const mapDispatchToProps = {
  displayNotificationDrawer,
  hideNotificationDrawer,
  login: loginRequest,
  logout,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);