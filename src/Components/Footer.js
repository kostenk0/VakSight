import React from 'react'

const footerStyle = {
    backgroundColor: "#31373e",
    fontSize: "20px",
    color: "white",
    borderTop: "1px solid #E7E7E7",
    textAlign: "center",
    padding: "20px",
    position: "fixed",
    left: "0",
    bottom: "0",
    height: "60px",
    width: "100%"
  };
  const phantomStyle = {
    display: "block",
    padding: "20px",
    height: "60px",
    width: "100%"
  };
  function Footer1({ children }) {
    return (
      <div>
        <div style={phantomStyle} />
        <div style={footerStyle}>{children}</div>
      </div>
    );
  }

const Footer = () => {
    return (
        <div>
        <Footer1>
          <span>Допоможіть: 5168 7573 3228 5974</span>
        </Footer1>
      </div>
    );
};
export default Footer;