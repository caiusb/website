import React from 'react'
import { Link } from 'gatsby'
import Header from './header'
import 'font-awesome/css/font-awesome.min.css'

import './index.css'
import * as styles from './index.module.css'

const Layout = ({ children }) => {
  return (
    <div>
      <Header></Header>
      <div className={styles.container}>{children}</div>
    </div>
  )
}

export default Layout
