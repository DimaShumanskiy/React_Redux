import React from "react";

export type ClockViewPropsType = {
    date: Date

}
export const DigitalClockView: React.FC<ClockViewPropsType> = ({date}) => {

    const get2digitsString = (num: number) => num < 10 ? '0' + num : num
    return <>
        <span>{get2digitsString(date.getHours())}</span>
        :
        <span>{get2digitsString(date.getMinutes())}</span>
        :
        <span>{get2digitsString(date.getSeconds())}</span>
    </>
}