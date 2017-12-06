import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import Typography from 'typography'
import 'font-awesome/css/font-awesome.min.css'

import './index.css'

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
  <li style={{
    display: 'inline-block',
    marginRight: '6pt',
    marginBottom: '0pt'
  }}>
    <a href={props.to}
      style={{
        color: 'inherit',
        fontSize: '22pt',
        textDecoration: 'none',
      }}
    >
      {props.children}
    </a>
  </li>

const InternalListLink = props =>
  <li style={{
    bodyFontFamily: typography.headerFontFamily,
    display: 'inline-block',
    margin: '0.5rem 1.0875rem',
    padding: '0.5rem 0rem',
    verticalAlign: 'middle'
   }}>
    <Link to={props.to}
      style={{
        color: 'inherit',
        fontSize: '16pt',
        verticalAlign : 'middle',
        textDecoration: 'none',
        float: 'left'
      }}
    >
      {props.children}
    </Link>
  </li>

const Header = () => (
  <div
    style={{
      marginBottom: '1.45rem',
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        paddingLeft: '1.0875rem',
        paddingTop: '1.45rem',
        paddingBotton: '0.5rem'
      }}
    >
      <h1 style={{ margin: 0, display: 'inline' }}>
        <Link
          to="/"
          style={{
            color: 'inherit',
            textDecoration: 'none',
          }}
        >
          Caius Brindescu
        </Link>
      </h1>
      <ul style={{
        // margin: '0 auto',
        // padding: '0 auto',
        verticalAlign: 'middle',
        display: 'inline-block',
        float: 'right'
      }}>
        <InternalListLink to="research.html">Research</InternalListLink>
        <InternalListLink to="projects.html">Projects</InternalListLink>
        <InternalListLink to="cycling.html">Cycling</InternalListLink>
        <InternalListLink to="blog.html">Blog</InternalListLink>
      </ul>
    </div>
    <div style={{maxWidth: '960px', marginLeft: 'auto', marginRight: 'auto'}}>
      <ul style={{
        listStyle: 'none',
        align: 'center'
      }}>
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
    </div>
    <div style={{
      maxWidth: '960px',
      verticalAlign: 'middle',
      margin: '0 auto'
    }}>
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
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '0px 1.0875rem 1.45rem',
        paddingTop: 0,
      }}
    >
      {children()}
    </div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
