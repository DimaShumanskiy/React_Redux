import React, {useState} from 'react';
import {Accordion, AccordionPropsType} from "./Accordion";
import {action} from "@storybook/addon-actions";
import {Story} from "@storybook/react";


export default {
    title: 'components/Accordion',
    component: Accordion,
    argTypes: {
        color: {
            control: 'color'  // возможность добавлять управление ползунком в сторибук
        }
    }
};

const callback = action('Accordion mode change event fired')

const Template: Story<AccordionPropsType> = (args) => <Accordion {...args} />;  // берем типизацию из компоненты

// ситаксис сторибук 6 версии
export const MenuCollapsedMode = Template.bind({})
MenuCollapsedMode.args = {
    titleValue: 'Menu',
    collapsed: true,
    onChange: callback,
}

export const UsersUnCollapsedMode = Template.bind({})
UsersUnCollapsedMode.args = {
    titleValue: 'Menu',
    collapsed: false,
    onChange: callback,
}

// 5 версия
// export const MenuCollapsedMode = () => <Accordion titleValue={'Menu'} collapsed={true} onChange={callback} />
// export const UsersUnCollapsedMode = () => <Accordion  titleValue={'Users'} collapsed={false} onChange={callback}/>

// 6
export const ModeChanging: Story<AccordionPropsType> = (args) => {
    const [value, setValue] = useState<boolean>(true);
    return <Accordion {...args} collapsed={value} onChange={() => setValue(!value)}/>
}
// collapsed = {value} onChange = {() => setValue(!value) -- поведение которое мы не можем вынести и оно остаеться по дэфолту
ModeChanging.args = {
    titleValue: 'Users',
}

//5
// export const ModeChanging = () => {
//     const [value, setValue] = useState<boolean>(true);
//     return <Accordion titleValue={'Users'} collapsed={value} onChange={() => setValue(!value)}/>
// }

