import React from 'react'
import Header from './header'
import Footer from './footer'

import './index.css'
import * as styles from './index.module.css'

const Layout = ({ children }) => {
  return (
    <div className={styles.pageContainer}>
      <Header></Header>
      <div className={styles.container}>{children}</div>
      <Footer></Footer>
    </div>
  )
}

export default Layout
