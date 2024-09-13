import { useTheme } from '../../common/ThemeContext';
import styles from './ContactStyles.module.css';

import linkedinLight from '../../assets/linkedin-light.svg';
import linkedinDark from '../../assets/linkedin-dark.svg';
import emailDark from '../../assets/email-dark.svg';
import emailLight from '../../assets/email-light.svg'; // Ensure the correct path

function Contact() {
  const { theme } = useTheme() || { theme: 'light' }; // Fallback to 'light' if useTheme is undefined

  // Determine the correct icon based on theme
  const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;
  const emailIcon = theme === 'light' ? emailLight : emailDark;

  return (
    <section id="contact" className={styles.contactSection}>
      <p className={styles.sectionText}>Get in Touch</p>
      <h1 className={styles.title}>Contact Me</h1>
      <div className={styles.contactInfoUpperContainer}>
        <div className={styles.contactInfoContainer}>
          <img
            src={emailIcon} // Used emailIcon directly here
            alt="Email icon"
            className={`${styles.icon} ${styles.contactIcon} ${styles.emailIcon}`}
          />
          <p>
            <a href="mailto:pushpikaliyanagama@gmail.com">
              pushpikaliyanagama@gmail.com
            </a>
          </p>
        </div>
        <div className={styles.contactInfoContainer}>
          <img
            src={linkedinIcon} // Dynamically loaded based on theme
            alt="LinkedIn icon"
            className={`${styles.icon} ${styles.contactIcon}`}
          />
          <p>
            <a href="https://www.linkedin.com/in/pushpika-sandaruwan-liyanagama-04b827279?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank">
              LinkedIn
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}

export default Contact;
