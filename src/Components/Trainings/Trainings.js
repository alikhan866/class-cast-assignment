import React from 'react'
import classes from './Trainings.module.css'
import { Carousel } from 'antd';
import CarouselItem from './CarouselItem/CarouselItem'

const contentStyle = {
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
};

const Trainings = () => {
    return (
        <>
        <h3 className={classes.letterSpace}>Your Trainings</h3>
            <Carousel>
                <div>
                    <div style={{ width: "100" }} >
                        <div className={classes.CarouselContainer}>
                            <CarouselItem
                                activityOne={"Warm-Up"}
                                activityOneTime={40}
                                activityTwo={"Stretch"}
                                activityTwoTime={20}
                                color={"#16DB65"}
                                place={"Sports Club"}
                                time={"10:00"}
                                boxShadow={"0px 7px #16db65a2"}
                                border={"2px solid #16DB65"}
                            />
                        </div>
                    </div>
                </div>
                <div>
                    <div className={classes.CarouselContainer}>
                        <CarouselItem
                            activityOne={"Squats"}
                            activityOneTime={10}
                            activityTwo={"Jogging"}
                            activityTwoTime={10}
                            color={"#FF17C9"}
                            place={"Sports Club"}
                            time={"11:40"}
                            boxShadow={"0px 7px #ff17c9a2"}
                            border={"2px solid #FF17C9"}
                        />
                    </div>
                </div>
                <div>
                    <div className={classes.CarouselContainer}>
                        <CarouselItem
                            activityOne={"Crunches"}
                            activityOneTime={20}
                            activityTwo={"Cool-Down"}
                            activityTwoTime={5}
                            color={"#530066"}
                            place={"Sports Club"}
                            time={"12:00"}
                            boxShadow={"0px 7px #530066a2"}
                            border={"2px solid #530066"}
                        />
                    </div>
                </div>
                <div>
                    <div className={classes.CarouselContainer}>
                        <CarouselItem
                            activityOne={"Push-Up"}
                            activityOneTime={10}
                            activityTwo={"Pull-Ups"}
                            activityTwoTime={15}
                            color={"#016FB9"}
                            place={"Sports Club"}
                            time={"11:10"}
                            boxShadow={"0px 7px #016fb9a9"}
                            border={"2px solid #016FB9"}
                        />
                    </div>
                </div>
            </Carousel>


        </>
    )

}

export default Trainings;