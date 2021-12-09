import React, {useEffect, useState} from 'react';
import {DigitalClockView} from "./DigitalClockView";
import {AnalogClockView} from "./AnalogClockView";

type ClockType = {
    mode?: 'digital' | 'analog'
}

export const Clock = (props: ClockType) => {
    const [date, setDate] = useState(new Date())

    useEffect(() => {
        const intervalID = setInterval(() => {
            setDate(new Date())
        }, 1000)

        return () => { // реакт ждет закрытие страницы и вызов произойдет когда компонента умрет
            clearInterval(intervalID)// функция зачистки
        }
    }, [])

    // const secondsString = get2digitsString(date.getSeconds())
    // const minutesString = get2digitsString(date.getMinutes())
    // const hoursString = get2digitsString(date.getHours())

    let view;
    switch (props.mode) {
        case 'analog':
            view = <AnalogClockView date={date}/>
            break;
        case 'digital':
        default:
            view = <DigitalClockView date={date}/>
    }

    return (
        <div>
            {view}
        </div>
    );
};

