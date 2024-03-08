import React from "react";
import { getFullYear, getFooterCopy } from '../utils/utils';
import './Footer.css';
import { connect } from "react-redux";
import PropTypes from "prop-types";

export function Footer({ user }) {
    return (
        <div className="App-footer">
            <p>Copyright {getFullYear()} - {getFooterCopy()}</p>
            { user && <a href="/contact">Contact us</a> }
        </div>
    );
}

Footer.defaultProps = {
    user: null,
};

Footer.propTypes = {
    user: PropTypes.object,
};

const mapStateToProps = (state) => {
    return {
        user: state.get("user"),
    };
};

export default connect(mapStateToProps, null)(Footer);