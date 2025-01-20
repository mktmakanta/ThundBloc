import React from "react";

const Footer = () => {
  return (
    <main>
      <div className="details">
        <div className="subscription">
          <h1>Sign up for updates from the ThundBloc team</h1>
          <div>
            <input type="email" placeholder="Enter your email" />
            <button>SUBMIT</button>
          </div>
        </div>
        <div className="links">
          <div>
            <ul>
              <h1>PRODUCTS</h1>
              <li>Node</li>
              <li>Network Map</li>
              <li>Explorer</li>
              <li>Wallet</li>
              <li>Chat</li>
            </ul>
            <ul>
              <h1>DEVELOPERS</h1>
              <li>Docs</li>
              <li>Use Cases</li>
              <li>Ecosystem</li>
              <li>Install Node</li>
            </ul>
            <ul>
              <h1>COMMUNITY</h1>
              <li>Blog</li>
              <li>Events</li>
              <li>FAQs</li>
            </ul>
            <ul>
              <h1>SOCIAL</h1>
              <li>X</li>
              <li>Discord</li>
              <li>Telegram</li>
              <li>GitHub</li>
              <li>Reddit</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="copyright">
        <div>2025 ThundBloc</div>
        <div className="logo"></div>
      </div>
    </main>
  );
};

export default Footer;
