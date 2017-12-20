import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import Typography from 'typography'
import 'font-awesome/css/font-awesome.min.css'

import './index.css'
import styles from './index.module.css'

const typography = new Typography({
  baseFontSize: "18px",
  baseLineHeight: 1.45,
  headerFontFamily: [
    "Avenir Next",
    "Helvetica Neue",
    "Segoe UI",
    "Helvetica",
    "Arial",
    "sans-serif",
  ],
  bodyFontFamily: ["Georgia", "serif"],
});

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
        <InternalListLink to="research.html">Research</InternalListLink>
        <InternalListLink to="projects.html">Projects</InternalListLink>
        <InternalListLink to="cycling.html">Cycling</InternalListLink>
        <InternalListLink to="blog.html">Blog</InternalListLink>
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

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Caius Brindescu"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'caius, brindescu, oregon, state, university, computer, science, software, engineering' },
      ]}
    />
    <Header />
    <div className={styles.container}>
      {children()}
    </div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
