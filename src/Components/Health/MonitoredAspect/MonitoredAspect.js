import React from 'react'
import classes from './MonitoredAspect.module.css'
import { Avatar,Progress } from 'antd';

const MonitoredAspect = ({aspectValue,aspectName,aspectPercent,aspectImage,aspectColor}) => {
    return (
        <div style={{ width: 99, borderRight: "1px solid #ccc", marginRight: 5, marginLeft: 5 }}>
            <div>
                <p className={classes.Time}>{aspectValue}</p>
            </div>
            <div className={classes.Hours}>
            <Avatar size={30} src={aspectImage} />
            <div>
                <p className={classes.Name}>{aspectName}</p>
            </div>
            </div>
            <Progress percent={aspectPercent} size="small" strokeColor={aspectColor} />
        </div>
    )
}

export default MonitoredAspect