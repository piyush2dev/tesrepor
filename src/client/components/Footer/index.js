import React from 'react';
import './styles.css';
import { FacebookIcon, TwitterIcon, YoutubeIcon, InstagramIcon } from '../Icons';

export default function Footer({ logo, socialLinks, links }) {
  const iconMap = {
    facebook: FacebookIcon,
    twitter: TwitterIcon,
    youtube: YoutubeIcon,
    instagram: InstagramIcon,
  };

  return (
    <div className="footer-container">
      <div className="footer-logo">
        <img src={logo} alt="" srcSet="" />
      </div>
      <div className="footer-social-media-container">
        {socialLinks &&
          socialLinks.map((socialLink) => (
            <a href={socialLink.link}>
              {iconMap[socialLink.platform] && React.createElement(iconMap[socialLink.platform])}
            </a>
          ))}
      </div>
      <ul className="footer-links-list">
        {links &&
          links.map((link) => (
            <li>
              <a href={link.anchorLink}>{link.anchorText}</a>
            </li>
          ))}
      </ul>
    </div>
  );
}
