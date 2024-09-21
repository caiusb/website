import React from 'react'
import Header from './header'

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
