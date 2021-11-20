import React, {useEffect, useMemo, useState} from "react";

export default {
    title: 'useEffect',
}

export const Ex1 = () => {
    const [counter, setCounter] = useState(0)

    console.log('simpleExample')
    useEffect(() => {
        console.log('useEffect')
        document.title = counter.toString()
        // что можно сделать в callbake useEffect
        //api.getUsers().then('')запросы на сервер
        //setInterval // асинхронный
        //indexedDB даза данных
        // document.getElementById() обращение к дом
         // document.title = 'user'

    })
    useEffect(() => {
        console.log('useEffect only first render (componentDidMount)')
        document.title = counter.toString()
    }, [])

    useEffect(() => {
        console.log('useEffect first render and every counter change')
        document.title = counter.toString()
    }, [counter])
    return <>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        {counter}
    </>
}
