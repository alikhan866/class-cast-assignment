import React from 'react'
import classes from './CarouselItem.module.css'
const CarouselItem = ({time,activityOne,activityTwo,activityOneTime,activityTwoTime,place,color,boxShadow,border}) => {
    return (
        <div className={classes.Background} style={{backgroundColor:color,border:border,boxShadow:boxShadow}}>
            <div className={classes.Schedule}>
                <div className={classes.ColumnLeft} style={{ width: "110px" }}>
                    <p className={classes.Paragraph} style={{ fontSize: 20, paddingBottom: 0 }}>Box</p>
                    <p className={classes.Paragraph} style={{ paddingTop: 0 }}>{place}</p>
                    <p className={classes.Time}>{time}</p>
                </div>
                <div className={classes.Column}>
                    <p className={classes.removePad} style={{ fontSize: 35 }}>{activityOneTime}</p>
                    <p className={classes.removePad} style={{ fontSize: 11 }}>mins</p>
                    <p className={classes.removePad}>{activityOne}</p>
                </div>
                <div className={classes.Column}>
                    <p className={classes.removePad} style={{ fontSize: 35 }}>{activityTwoTime}</p>
                    <p className={classes.removePad} style={{ fontSize: 11 }}>mins</p>
                    <p className={classes.removePad}>{activityTwo}</p>
                </div>
            </div>
        </div>
    )
}

export default CarouselItem