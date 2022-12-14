import { Link } from 'react-router-dom'
import Logo from '../common/Logo'
import styles from './Footer.module.scss'

const Footer = () => {
  return (
    <div className={styles.Footer}>
      <div className={styles.FooterContainer}>
        <div className={styles.FooterLogo}>
          <Logo />
        </div>
        <div className={styles.FooterLinks}>
          <Link className={`${styles.FooterLink}`} to='/terms-of-service'>Terms of Service</Link>
          <Link className={`${styles.FooterLink}`} to='/privacy-policy'>Privacy Policy</Link>
        </div>
        <span>{`© ${new Date().getFullYear()} Music Box`}</span>
      </div>
    </div>
  )
}

export default Footer