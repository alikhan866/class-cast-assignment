import React from 'react'
import { Image } from 'antd';
import classes from './Sign_Up.module.css'
import dog from '../../Images/CuteDog.png'
import { Button } from 'antd';

const Sign_up = () => {
    return (

        <div className={classes.signUpBackground}>
            <div className={classes.signUpContainer}>
                <div className={classes.rowItems}>
                    <Image preview={false} width={115} src={dog} />
                    <p className={classes.description}>Sign up for a personal trainer to improve your results</p>
                </div>
                <Button type="primary" className={classes.signUpButton}>Sign up</Button>
            </div>
            
        </div>
    )
}

export default Sign_up;