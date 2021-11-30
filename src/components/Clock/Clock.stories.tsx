import {Clock} from "./Clock";
import {Story} from "@storybook/react";
import React from "react";


export default {
    title: 'components/Clock',
    component: Clock,

};

const Template: Story<any> = (args) => <Clock {...args} />;  // берем типизацию из компоненты

// ситаксис сторибук 6 версии
export const ClockMode = Template.bind({})
ClockMode.args = {

}