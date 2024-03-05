import React, { useContext } from "react";
import { getFullYear, getFooterCopy } from '../utils/utils';
import './Footer.css';
import { AppContext } from "../App/AppContext";


function Footer() {
    const { user } = useContext(AppContext);
    return (
        <div className="App-footer">
            <p>Copyright {getFullYear()} - {getFooterCopy()}</p>
            { user.isLoggedIn && (
                <p>
                    <a href="/contact">Contact us</a>
                </p>
            )}
        </div>
    );
}

export default Footer;