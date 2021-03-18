import React from 'react'
import { Avatar } from 'antd';
import image from '../../Images/pigg.png'
import classes from './Header.module.css'
import {
    BellOutlined,
    MenuOutlined
} from '@ant-design/icons';

const Header = () => {
    return (
        <>
                <div className={classes.CenterItems}>
                    <Avatar size={49} src={image} />
                    <div className={classes.NameContainer}>
                        <p className={classes.Name}>Floyd Mines</p>
                        <p className={classes.Account}>Free Account</p>
                    </div>
                    <BellOutlined className={classes.BellIcon} />
                    <p className={classes.BellNumber}>1</p>
                    <MenuOutlined className={classes.MenuOutline} />
                </div>
        </>
    )

}

export default Header;
