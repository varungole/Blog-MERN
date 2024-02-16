import instagramLogo from './insta-logo.jpeg'; // Replace with the actual path
import twitterLogo from './twitter.png'; // Replace with the actual path
import linkedinLogo from './linkedin.png'; // Replace with the actual path
import githubLogo from './github.png'; // Replace with the actual path

function Contact() {

  const handleSocialMedia = (url) => {
    window.open(url, '_blank').focus();
  };
  
  return (
    <div className='contact'>
      <div className='contact-options'>
        <img src={instagramLogo} alt='Instagram' className='contact-logo' onClick={() => handleSocialMedia('https://www.instagram.com/varun.gole29/')} />
        <img src={twitterLogo} alt='Twitter' className='contact-logo' onClick={() => handleSocialMedia('https://twitter.com/VroonCodes')} />
        <img src={linkedinLogo} alt='LinkedIn' className='contact-logo' onClick={() => handleSocialMedia('https://www.linkedin.com/in/varungole/')} />
        <img src={githubLogo} alt='GitHub' className='contact-logo' onClick={() => handleSocialMedia('https://github.com/varungole')} />
      </div>
    </div>
  );
}

export default Contact;