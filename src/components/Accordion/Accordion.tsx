import React from "react";

export type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
    /**
     * onChange
     */ // коммент для сторибук
    onChange: () => void
    /**
     * Color oh header text
     */
    color?: string
}

export function Accordion(props: AccordionPropsType) {
    console.log("Accordion rendering")
    return (
        <>
            <AccordionTitle
                title={props.titleValue}
                onChange={props.onChange}
                color={props.color}

            />
            {!props.collapsed && <AccordionBody/>}
        </>
    )
}

//props.collapsed === false если не свернут ( не collapsed)

type AccordionTitlePropsType = {
    title: string
    onChange: () => void
    color?:string
}

function AccordionTitle(props: AccordionTitlePropsType) {
    console.log("AccordionTitle rendering")
    return (
        <h3 onClick={(e) => props.onChange()}
            style={{color: props.color ? props.color : 'black'}} // добавляем возможность менять цвет в сторибук
        >---{props.title}---</h3>  // event добавляем исходя из сторибук
    )
}

function AccordionBody() {
    console.log("AccordionBody rendering")
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}

