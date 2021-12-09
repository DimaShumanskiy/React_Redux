import {Clock} from "./Clock";
import {Story} from "@storybook/react";
import React from "react";


export default {
    title: 'components/Clock',
    component: Clock,

};

const TemplateAnalog: Story<any> = (args) => <Clock {...args} />;  // берем типизацию из компоненты

// ситаксис сторибук 6 версии
export const BaseAnalogExample = TemplateAnalog.bind({})
BaseAnalogExample.args = {
    mode: 'analog'
}
const TemplateDigital: Story<any> = (args) => <Clock {...args} />;  // берем типизацию из компоненты

// ситаксис сторибук 6 версии
export const BaseDigitalExample = TemplateDigital.bind({})
BaseDigitalExample.args = {
    mode: 'digital'
}