import React, { useState } from "react";
import { StyleSheet, css } from 'aphrodite';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
    "App-body": {
        margin: '25px',
    },

    inputWrapper: {
        marginBottom: '10px',
    },

    button: {
        marginLeft: '10px',
    },
});

function Login({ logIn }) {
    const [loginState, setLoginState] = useState({
        email: '',
        password: '',
        enableSubmit: false,
    });

    const handleLogginSubmit = (event) => {
        event.preventDefault();
        logIn(loginState.email, loginState.password);
    };

    const handleChangeEmail = (event) => {
        const newEmail = event.target.value;
        setLoginState(pervState => ({ ...pervState, email: newEmail}));
    };

    const handleChangePassword = (event) => {
        const newPassword = event.target.value;
        setLoginState(pervState => ({ ...pervState, password: newPassword}));
    };

    return (
        <div className={css(styles["App-body"])}>
            <p>Login to access the full dashboard</p>
            <form onSubmit={handleLogginSubmit}>
                <div className={css(styles.inputWrapper)}>
                    <label htmlFor="email" style={{ marginLeft: '10px' }}>Email:</label>
                    <input type="email" id="email" style={{ marginLeft: '40px' }} value={loginState.email} onChange={handleChangeEmail} />
                </div>
                <div className={css(styles.inputWrapper)}>
                    <label htmlFor="password" style={{ marginLeft: '10px' }}>Password:</label>
                    <input type="password" id="password" style={{ marginLeft: '10px' }} value={loginState.password} onChange={handleChangePassword} />
                </div>
                <div>
                    <input type="submit" value='OK' className={css(styles.button)} disabled={!loginState.enableSubmit && !(loginState.email && loginState.password)} />
                </div>
            </form>
        </div>
    )
}

Login.propTypes = {
    logIn: PropTypes.func,
};

export default Login;