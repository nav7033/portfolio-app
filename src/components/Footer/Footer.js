
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import {Bio}from'../../Data/userData'
import './Footer.css'


function Footer() {
  return (
    <div className='FooterContainer'>
      <footer className='FooterWrapper'>
        <h1 className='Logo'>Naveen Kumar</h1>
        <div SocialMediaIconclassName='SocialMediaIcons'>
          <a className='SocialMediaIcon' href={Bio.facebook} target="display"><FacebookIcon /></a>
          <a className='SocialMediaIcon' href={Bio.twitter} target="display"><TwitterIcon /></a>
          <a className='SocialMediaIcon' href={Bio.linkedin} target="display"><LinkedInIcon /></a>
          <a className='SocialMediaIcon' href={Bio.insta} target="display"><InstagramIcon /></a>
        </div>
        <p className='Copyright'>
         &copy; 2024 Naveen Kumar. All rights reserved.
        </p>

      </footer>
    </div>
  );
}

export default Footer;