import React from 'react'
import * as styles from './index.module.css'

const Footer = () => (
    <div className={styles.footer}>
        &copy; {new Date().getFullYear()} Caius Brindescu
    </div>
)

export default Footer