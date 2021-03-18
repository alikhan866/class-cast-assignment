import React from 'react'
import classes from './Trainer.module.css'
import { Avatar, Divider } from 'antd';
import human from '../../Images/human.png'
import human2 from '../../Images/human2.png'
import {
    MessageOutlined
} from '@ant-design/icons';

const Trainer = () => {
    return (
        <>
            <h3 className={classes.letterSpace}>Your Trainers</h3>
            <div className={classes.Avatar}>
                <div className={classes.Paragraph}>
                    <Avatar size={40} src={human} />
                    <div className={classes.ItemsContainer}>
                        <div className={classes.ParagraphContainer}>
                            <p className={classes.P}>John Kavranha</p>
                            <p className={classes.Pa}>MMA Trainer</p>
                        </div>
                        <div className={classes.messageIcon}>
                            <MessageOutlined />
                        </div>

                    </div>
                </div>
            </div>
            <Divider style={{margin:0,marginBottom:"20px"}}/>
            <div className={classes.Avatar}>
                <div className={classes.Paragraph}>
                    <Avatar size={40} src={human2} />
                    <div className={classes.ItemsContainer}>
                        <div className={classes.ParagraphContainer}>
                            <p className={classes.P}>Jacob Jones</p>
                            <p className={classes.Pa}>Boxing Coach</p>
                        </div>
                        <div className={classes.messageIcon2}>
                            <MessageOutlined />
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}


export default Trainer;