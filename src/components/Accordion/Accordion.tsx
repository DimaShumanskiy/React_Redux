import React from "react";


type ItemType = {
    title: string
    value: any
}
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
    items: ItemType[]
    onClick: (value:any) => void
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
            {!props.collapsed && <AccordionBody items={props.items} onClick={props.onClick}/>}
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

type AccordionBodyPropsType = {
    items: ItemType[]
    onClick: (value:any) => void
}

function AccordionBody(props: AccordionBodyPropsType) {
    console.log("AccordionBody rendering")
    return (
        <ul>
            {props.items.map((i, index) => <li onClick={() => {props.onClick(i.value)}} key={index}>{i.title}</li>)}
        </ul>
    )
}

