import React from "react";

export default () => {
  return (
    <footer className="footer">
      <div className="divider-fullwidth" />
      <div className="_12-col-flex corners">
        <img src="./img/_small-logo.svg" alt="" className="image-7" />
        <p className="footer-note">
          Copyright &copy; {new Date().getFullYear()} Iterate.ai. All Rights
          Reserved.
        </p>
      </div>
    </footer>
  );
};
