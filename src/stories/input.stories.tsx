import React, {ChangeEvent, useRef, useState} from 'react';
import {action} from "@storybook/addon-actions";
import {Story} from "@storybook/react";


export default {
    title: 'Input',
    // component: input,
};

//event
export const UncontrolledInput = () => <input/>;
export const TrackValueOfUncontrolledInput = () => {
    const [value, setValue] = useState('')

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        const actualValue = e.currentTarget.value;
        setValue(actualValue)
    }
    return <><input value={value} onChange={onChange}/> - {value} </>;
}

//ref
export const GetValueOfUncontrolledInputByButtonPress = () => {
    const [value, setValue] = useState('');
    const inputRef = useRef<HTMLInputElement>(null);
    const save = () => {
        const el = inputRef.current as HTMLInputElement;
        setValue(el.value)
    }
    return <><input ref={inputRef}/>
        <button onClick={save}> save</button>
        - actual value: {value} </>;
}

//controlled
export const ControlledInput = () =>{
    const [parentValue,setParentValue] = useState('')
    return <input value={parentValue} />
}
export const ControlledCheckbox = () =>{

}
export const ControlledSelect = () =>{

}

//controlled
export const ControlledInputWithFixedValue = () => <input value={'it-incubator.by'}/>;

