import instagramLogo from './insta-logo.jpeg'; // Replace with the actual path
import twitterLogo from './twitter.png'; // Replace with the actual path
import linkedinLogo from './linkedin.png'; // Replace with the actual path
import githubLogo from './github.png'; // Replace with the actual path

function Contact() {

    const handleLinkedin = () => {
        window.open('https://www.linkedin.com/in/varungole/', '_blank').focus();
    }

    const handleInsta = () => {
        window.open('https://www.instagram.com/varun.gole29/', '_blank').focus();
    }

    const handleTwitter = () => {
        window.open('https://twitter.com/VroonCodes', '_blank').focus();
    }

    const handleGithub = () => {
        window.open('https://github.com/varungole', '_blank').focus();
    }

  return (
    <div className='contact'>
      <div className='contact-options'>
        <img src={instagramLogo} alt='Instagram' className='contact-logo'onClick={handleInsta} />
        <img src={twitterLogo} alt='Twitter' className='contact-logo' onClick={handleTwitter} />
        <img src={linkedinLogo} alt='LinkedIn' className='contact-logo' onClick={handleLinkedin}/>
        <img src={githubLogo} alt='GitHub' className='contact-logo' onClick={handleGithub} />
      </div>
    </div>
  );
}

export default Contact;