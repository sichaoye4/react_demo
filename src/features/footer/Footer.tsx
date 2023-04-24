// a simple footer using antd Layout.Footer with a text on the middle
import { Layout } from 'antd';
import React from 'react';
import styles from './Footer.module.css'

export const Footer = () => {
    return (
        <Layout.Footer>
            <label className={styles.footer}>Created By Ted Ye for Copilot Demo</label>
        </Layout.Footer>
    )
}
