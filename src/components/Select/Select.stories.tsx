import React, {useState} from 'react';
import {action} from "@storybook/addon-actions";
import {Story} from "@storybook/react";
import {Select, SelectPropsType} from "./Select";


export default {
    title: 'components/Select',
    component: Select,
};

const Template: Story<SelectPropsType> = (args) => {
    const [value, setValue] = useState('1')
    return <><Select {...args} value={value} onChange={setValue}/></>
}

export const WithMode = Template.bind({})
WithMode.args = {
    items: [
        {value: '1', title: 'Minsk'},
        {value: '2', title: 'Moscow'},
        {value: '3', title: 'Kiev'},
        {value: '4', title: 'v'},
            ]
}

export const WithoutValue: Story<SelectPropsType> = (args) => {
    const [value, setValue] = useState(null)
    return <><Select {...args} value={value} onChange={setValue}/></>
}
WithoutValue.args = {
    onChange: action('Value changed'),
    items: [
        {value: '1', title: 'Minsk'},
        {value: '2', title: 'Moscow'},
        {value: '3', title: 'Kiev'},
    ]
}



