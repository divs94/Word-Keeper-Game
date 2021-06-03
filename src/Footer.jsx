import React from "react";






const Footer = () => {

    const year = new Date().getFullYear();

    return (
        <>
            <footer className="footer">
                <p>copyright © Tech Spot {year}</p>
          </footer>
        </>
    );
};
export default Footer;