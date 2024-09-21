import React from 'react'
import { Link } from 'gatsby'
import * as styles from './index.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

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
          {/* <InternalListLink to="/radio">Radio</InternalListLink> */}
          <InternalListLink to="/blog">Blog</InternalListLink>
        </ul>
      </div>
      <div className={styles.socialIconsList}>
        <ul className={styles.externalListLink}>
          <ExternalListLink to="https://www.github.com/caiusb">
            <FontAwesomeIcon icon={["fa-brands", "fa-square-github"]} />
          </ExternalListLink>
          <ExternalListLink to="https://www.threads.net/@caiusbrindescu">
           <FontAwesomeIcon icon={['fa-brands', 'fa-square-threads']} />
          </ExternalListLink>
          <ExternalListLink to="https://www.linkedin.com/in/caius-brindescu/">
            <FontAwesomeIcon icon={['fa-brands', 'fa-linkedin']}/>
          </ExternalListLink>
          <ExternalListLink to="mailto:caius@brindescu.com">
            <FontAwesomeIcon icon={["fa-solid", "fa-square-envelope"]}/>
          </ExternalListLink>
        </ul> 
        <hr className={styles.divider} />
      </div>
    </div>
  )

export default Header