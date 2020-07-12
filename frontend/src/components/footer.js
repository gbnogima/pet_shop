import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer>
      <div class="container-footer">
        <p class="p-footer">São Carlos - SP</p>
        <p class="p-footer">(XX)XXXXX-XXXX</p>
        <div class="footer-social">
          <ul class="footer-ul">
            <li class="footer-li">
              <a class="footer-li-a" href="https://www.facebook.com/">
                <i class="fa fa-facebook"></i> <br/>Facebook
              </a>
            </li>
            <li class="footer-li">
              <a class="footer-li-a" href="https://www.instagram.com/">
                <i class="fa fa-instagram"></i> <br/>Instagram
              </a>
            </li>
            <li class="footer-li">
              <a class="footer-li-a" href="https://twitter.com/">
                <i class="fa fa-twitter"></i> <br/>Twitter
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>

  )
}

export default Footer;
