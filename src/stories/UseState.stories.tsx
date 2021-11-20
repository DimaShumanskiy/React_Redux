import React, {useMemo, useState} from "react";

export default {
    title: 'UseState',
}
function generateData() {
    console.log('generateData')
    return 21231321313
}

export const Ex1 = () => {
    const initValue = useMemo(generateData, [])

    const [counter, setCounter] = useState(
        // () => {return 21231321313}
        generateData
    );// useState фиксирует начальное значение без последующей перерисовки
    return <>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        {counter}
    </>
}
