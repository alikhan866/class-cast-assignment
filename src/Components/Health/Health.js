import React from 'react'
import classes from './Health.module.css';
import MonitoredAspect from './MonitoredAspect/MonitoredAspect'
import image from '../../Images/Time.png'
import heart from '../../Images/Heart.png'
import kcal from '../../Images/Kcal.png'

const Health = () => {
    return (
        <>
            <h3 className={classes.letterSpace}>Health</h3>
            <div className={classes.ProgressBars}>
                <MonitoredAspect
                    aspectValue={'6:25'}
                    aspectName={'Hours'}
                    aspectPercent={60}
                    aspectImage = {image}
                    aspectColor = {"#188be9c9"}
                />
                <MonitoredAspect
                    aspectValue={'120'}
                    aspectName={'Bpm'}
                    aspectPercent={90}
                    aspectImage = {heart}
                    aspectColor = {"red "}
                />
                <MonitoredAspect
                    aspectValue={'1.84'}
                    aspectName={'Kcal'}
                    aspectPercent={20}
                    aspectImage = {kcal}
                    aspectColor = {"#83ca17"}
                />
            </div>
        </>
    )
}

export default Health;