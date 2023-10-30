import React from 'react'
import { Link } from 'gatsby'
import * as styles from './index.module.css'

const ExternalListLink = props =>
  <li className={styles.socialIcons}>
    <a href={props.to}>
      {props.children}
    </a>
  </li>

const InternalListLink = props =>
  <li className={styles.internalHeaderLink}>
    <Link to={props.to}>
      {props.children}
    </Link>
  </li>

const Header = () => (
    <div style={{marginBottom: '1.45rem'}}>
      <div className={styles.header}>
        <h1>
          <Link to="/">Caius Brindescu</Link>
        </h1>
        <ul className={styles.internalListLink}>
          <InternalListLink to="/research">Research</InternalListLink>
          <InternalListLink to="/projects">Projects</InternalListLink>
          {/* <InternalListLink to="cycling">Cycling</InternalListLink> */}
          <InternalListLink to="/radio">Radio</InternalListLink>
          <InternalListLink to="/blog">Blog</InternalListLink>
        </ul>
      </div>
      <div className={styles.socialIconsList}>
        <ul className={styles.externalListLink}>
          <ExternalListLink to="https://www.github.com/caiusb">
            <i className="fa fa-github-square"></i>
          </ExternalListLink>
          <ExternalListLink to="https://www.twitter.com/caiusbrindescu">
            <i className="fa fa-twitter-square"></i>
          </ExternalListLink>
          <ExternalListLink to="https://www.linkedin.com/in/caius-brindescu-b9060b153/">
            <i className="fa fa-linkedin-square"></i>
          </ExternalListLink>
          <ExternalListLink to="mailto:caius@brindescu.com">
            <i className="fa fa-envelope-square"></i>
          </ExternalListLink>
        </ul> 
        <hr className={styles.divider} />
      </div>
    </div>
  )

export default Header