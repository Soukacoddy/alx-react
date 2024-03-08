import React, { PureComponent } from 'react';
import closeIcon from './close-icon.png';
import NotificationItem from './NotificationItem';
import PropTypes from 'prop-types';
// import NotificationItemShape from './NotificationItemShape';
import { StyleSheet, css } from 'aphrodite';
import { fetchNotifications } from '../actions/notificationActionCreators';
import { connect } from 'react-redux';

const fadeIn = {
    '0%': {
        opacity: 0.5,
    },
    '100%': {
        opacity: 1,
    },
};

const bounce = {
    '0%, 20%, 50%, 80%, 100%': {
        transform: 'translateY(0)',
    },
    '40%': {
        transform: 'translateY(-5px)',
    },
    '60%': {
        transform: 'translateY(5px)',
    },
};

const styles = StyleSheet.create({
    Notifications: {
        border: '3px dotted #e01d3f',
        padding: '10px',
        position: 'absolute',
        width: '30%',
        right: '3px',
        "@media (max-width: 375px)": {
            height: '100vh',
            width: '100vw',
            border: 'none',
            fontSize: '20px',
            backgroundColor: 'white',
            left: '0px',
            padding: '0',
        },
    },
    menuItem: {
        textAlign: 'right',
        paddingRight: '5px',
        "@media (max-width: 375px)": {
            display: 'none',
        },
        ":hover": {
            opacity: 1,
            backgroundColor: '#fff8f8',
            cursor: 'pointer',
            animationName: [fadeIn, bounce],
            animationDuration: "1s, 0.5s",
            animationIterationCount: '3, 3',
        },
    },
    ulNoPadding: {
        "@media (max-width: 375px)": {
            padding: '0px',
        },
    },
});


export class Notifications extends PureComponent {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchNotifications();
    }

    ButtonClick = () => {
        console.log('Close button has been clicked');
        this.props.handleHideDrawer();
    };

    // markAsRead = (id) => {
    //     console.log(`Notification ${id} has been marked as read`);
    // };

    // shouldComponentUpdate(nextProps) {
    //     return nextProps.length > this.props.listNotifications.length;
    // }

    render() {
        const { displayDrawer, listNotifications, handleDisplayDrawer, markNotificationAsRead } = this.props;
        return (
            <>
                <div className={css(styles.menuItem)} id='menuItem' onClick={handleDisplayDrawer}>
                    <p>Your notifications</p>
                </div>
                {displayDrawer && (
                    <div id='Notifications' style={{ position: 'relative' }}>
                        <>
                            {listNotifications && listNotifications.length !== 0 ? (
                                <div className={css(styles.Notifications)} id='Notifications'>
                                    <p>Here is the list of notifications</p>
                                    <ul className={css(styles.ulNoPadding)}>
                                        {listNotifications && Object.values(listNotifications).map(({ id, html, type, value }) => (
                                            <NotificationItem
                                                key={id}
                                                type={type}
                                                value={value}
                                                html={html}
                                                markAsRead={() => markNotificationAsRead(id)}
                                            />
                                        ))}
                                    </ul>
                                </div>
                            ) : (
                                <NotificationItem type='noNotifications' value='No new notification for now' />
                            )}
                        </>
                        <button style={{
                            position: 'absolute',
                            top: '3px',
                            right: '3px',
                            backgroundColor: 'transparent',
                            border: 'none'
                        }}
                            aria-label='Close'
                            onClick={this.ButtonClick}>
                            <img src={closeIcon} alt='close'
                                style={{
                                    width: '15px',
                                    height: '15px'
                                }} />
                        </button>
                    </div>
                )}
            </>
        )
    }
}

Notifications.propTypes = {
    displayDrawer: PropTypes.bool,
    listNotifications: PropTypes.object,
    handleDisplayDrawer: PropTypes.func,
    handleHideDrawer: PropTypes.func,
    markNotificationAsRead: PropTypes.func,
};
Notifications.defaultProps = {
    displayDrawer: false,
    listNotifications: null,
    handleDisplayDrawer: () => { },
    handleHideDrawer: () => { },
    markNotificationAsRead: () => { },
    fetchNotifications: () => { }
};

const mapStateToProps = (state) => {
    return {
        listNotifications: state.notifications.get('messages'),
    };
};

const mapDispatchToProps = { fetchNotifications, };

export default connect(mapStateToProps, mapDispatchToProps)(Notifications);
