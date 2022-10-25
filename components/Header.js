import React from "react";
import headerStyles from "../styles/Header.module.css";

const Header = () => {
  return (
    <div>
      <h1 className={headerStyles.title}>
        <span>Welcome to my </span>News Page
      </h1>
      {/* <style jsx>
        {`
          .title {
            color: red;
          }
        `}
      </style> */}
      <p className={headerStyles.description}>
        Keep yourself up to date with Andy News
      </p>
    </div>
  );
};

export default Header;
