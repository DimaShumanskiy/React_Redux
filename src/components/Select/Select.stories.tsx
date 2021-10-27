import React, {ChangeEvent, useRef, useState} from 'react';
import {action} from "@storybook/addon-actions";
import {Story} from "@storybook/react";
import {Simulate} from "react-dom/test-utils";


export default {
    title: 'Select',
    // component: input,
};

//event
export const Select = () => {
    const [parentValue, setParentValue] = useState<string | undefined>("2")
    const onChange = (e: ChangeEvent<HTMLSelectElement>) => {
        setParentValue(e.currentTarget.value)
    }
    return <select value={parentValue} onChange={onChange}>
        <option>none</option>
        <option value={'1'}>Minsk</option>
        <option value={'2'}>Moscow</option>
        <option value={'3'}>Kiev</option>
    </select>
}


