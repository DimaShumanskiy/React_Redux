import React, {useState, KeyboardEvent, useEffect} from 'react';
import s from './select.module.css'

export type ItemType = {
    title: string
    value: any
}

export type SelectPropsType = {
    value?: any
    onChange: (value: any) => void
    items: ItemType[]
}
export const Select = (props: SelectPropsType) => {

        const [active, setActive] = useState<boolean>(false)
        const [hoveredElementValue, setHoveredElementValue] = useState<boolean>(props.value)


        const selectedItem = props.items.find(f => f.value === props.value)
        const hoveredItem = props.items.find(f => f.value === hoveredElementValue)

        useEffect(() => {
            setHoveredElementValue(props.value);
        }, [props.value])

        const toggleItem = () => setActive(!active)
        const onItemClick = (value: any) => {
            props.onChange(value);
            toggleItem()
        }
        const onKeyUp = (e: KeyboardEvent<HTMLDivElement>) => {
            if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
                for (let i = 0; i < props.items.length; i++) {
                    if (props.items[i].value === hoveredElementValue) {
                        const pretendentElement = e.key === 'ArrowDown'
                            ? props.items[i + 1]
                            : props.items[i - 1];

                        if (pretendentElement) {
                            props.onChange(pretendentElement.value)
                            return;
                        }
                    }
                }
                if (!selectedItem) {
                    props.onChange(props.items[0].value)
                }
            }
            if (e.key === 'Enter' || e.key === 'Escape') {
                setActive(false)
            }
        }


        return (
            <>
                <div className={s.content}
                     onKeyUp={onKeyUp}
                     tabIndex={0}>
                    <h3 onClick={toggleItem}>{selectedItem && selectedItem.title}</h3>
                    {
                        active &&
                        <div className={s.items}>
                            {props.items.map(m => <div
                                onMouseEnter={() => {
                                    setHoveredElementValue(m.value)
                                }}
                                className={s.item + " " + (hoveredItem === m ? s.selected : " ")}
                                key={m.value}
                                onClick={() => {
                                    onItemClick(m.value)
                                }}
                            >{m.title}</div>)}
                        </div>
                    }
                </div>
            </>
        );
    }
;

