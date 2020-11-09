import React, { useEffect } from 'react';
import './styles.css';
import { PlusIcon, FacebookLogoIcon, GoogleLogoIcon } from '../Icons';

export default function Login({ openLogin = false, onLoginClosed }) {
  useEffect(() => {
    if (openLogin) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
  }, [openLogin]);

  const handleLoginClose = () => {
    onLoginClosed(!openLogin);
    document.body.classList.remove('no-scroll');
  };

  return (
    <div className={`login-container ${openLogin ? 'show' : ''}`}>
      <div className="login-wrapper">
        <div className="login-parent">
          <div className="login-inner-parent">
            <div
              className="login-close-icon-container"
              onClick={handleLoginClose}
              role="button"
              tabIndex="0"
              aria-hidden="true"
            >
              <PlusIcon />
            </div>
            <div className="login-heading">Login</div>
            <div className="login-social-account-container">
              <button className="login-social-button login-social-facebook" type="button">
                <FacebookLogoIcon />
                Login with Facebook
              </button>
              <button className="login-social-button login-social-google" type="button">
                <GoogleLogoIcon />
                Login with Google
              </button>
            </div>
            <div className="login-or-text">or login with your</div>
            <div className="login-form-container">
              <form action="/" className="login-form">
                <div className="login-form-item">
                  <label htmlFor="login-mob-email" className="login-label">
                    Mobile Number or Email ID
                  </label>
                  <input
                    type="text"
                    id="login-mob-email"
                    name="mob-email"
                    className="login-form-input"
                  />
                </div>

                <div className="login-form-item">
                  <label htmlFor="login-password" className="login-label">
                    Password
                  </label>
                  <input
                    type="text"
                    id="login-password"
                    name="password"
                    className="login-form-input"
                  />
                </div>
                <div className="login-form-item">
                  <button type="submit" className="login-submit-buttom login-block-button">
                    Continue
                  </button>
                </div>
              </form>
            </div>

            <div className="login-subscribe-container">
              <div className="login-subscribe-text">Don&apos;t have an Account?</div>
              <button className="login-subscribe-button login-block-button" type="button">
                Subscribe Now
              </button>
            </div>
          </div>
        </div>
        <div
          className="login-overlay"
          onClick={handleLoginClose}
          role="button"
          aria-label="login overlay"
          aria-hidden="true"
        />
      </div>
    </div>
  );
}
