import logo from '../assets/Holberton-logo.jpg';
import React, { useContext } from 'react';
import { StyleSheet, css } from 'aphrodite';
import { AppContext } from '../App/AppContext';
import { connect } from 'react-redux';
import { logout } from '../actions/uiActionCreators';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
    "App-header": {
        display: 'flex',
        alignItems: 'center',
        fontSize: '20px',
        color: '#e01d3f',
        borderBottom: '3px solid #e01d3f',
    },

    img: {
        width: '200px',
    },

    welcomeMessage: {
        marginTop: '10px',
    },
});

export function Header() {
    const { user, logout } = useContext(AppContext);

    return (
        <>
            <div className={css(styles['App-header'])}>
                <img src={logo} alt="logo" className={css(styles.img)} />
                <h1>School dashboard</h1>
            </div>
            {user.isLoggedIn && (
                <section className={css(styles.welcomeMessage)} id='logoutSection'>
                    Welcome<strong> {user.email} </strong>
                    <a href='' onClick={logout}>
                        <em>
                            (logout)
                        </em>
                    </a>
                </section>
            )}
        </>
    );
}

Header.defaultProps = {
    user: null,
    logout: () => { },
};

Header.propTypes = {
    user: PropTypes.object,
    logout: PropTypes.func,
};

const mapStateToProps = (state) => {
    return {
        user: state.get("user"),
    };
};

const mapDispatchToProps = {
    logout,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);