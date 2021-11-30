import React, {useEffect, useState} from 'react';

type ClockType = {}

export const Clock = (props: ClockType) => {
    const [date, setDate] = useState(new Date())

    useEffect(() => {
      const intervalID =  setInterval(() => {
            setDate(new Date())
        }, 1000)

        return () => { // реакт ждет закрытие страницы и вызов произойдет когда компонента умрет
            clearInterval(intervalID)// функция зачистки
        }
    }, [])

    const get2digitsString = (num: number) => num < 10 ? '0' + num : num

    const secondsString = get2digitsString(date.getSeconds())
    const minutesString =get2digitsString(date.getMinutes())
    const hoursString = get2digitsString(date.getHours())

    return (
        <div>
            <span>{hoursString}</span>
            :
            <span>{minutesString}</span>
            :
            <span>{secondsString}</span>
        </div>
    );
};
