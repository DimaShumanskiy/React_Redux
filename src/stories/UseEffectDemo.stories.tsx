import React, {useEffect, useMemo, useState} from "react";

export default {
    title: 'useEffect demo',
}

export const SimpleExample = () => {
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

export const SetTimeoutExample = () => {
    const [fake, setFake] = useState(1)
    const [counter, setCounter] = useState(0)

    console.log('simpleExample')
    useEffect(() => {
        // setTimeout(() => {
        //     console.log('setTimeout')
        //     document.title = counter.toString()
        // },1000)

        setInterval(() => {
            console.log('tick: ' + counter)
            setCounter((state) => state + 1 )
        },1000)
    }, [counter])



    return <>
        hello, counter: {counter} - fake:{fake}
        {/*<button onClick={() => setFake(fake + 1)}>fake</button>*/}
        {/*<button onClick={() => setCounter(counter + 1)}>counter+</button>*/}

        {counter}
    </>
}

