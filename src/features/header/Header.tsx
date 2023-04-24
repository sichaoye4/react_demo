// A simple Header using antd Layout.Header with logo and title on the left, Navigation Menu on the middle and a greeting on the right. 
import { Menu, Layout, Avatar } from 'antd';
import { UserOutlined} from '@ant-design/icons';
import logo from '../../logo.svg';
import styles from "./Header.module.css";
import React, { Component } from 'react';

export const Header = () => {
    return (
        <Layout.Header>
            <div>
                <img src={logo} className={styles.logo} alt="logo" />
            </div>
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
                <Menu.Item key="1">Client Summary DashBoard</Menu.Item>
                <Menu.Item key="2">Client Transaction Details</Menu.Item>
            </Menu>
            {/* <div className={styles.greeting}>
                <label>Welcome Guest</label>
                <Avatar className="avatar" icon={<UserOutlined />} />
            </div> */}
        </Layout.Header>
    )
}

