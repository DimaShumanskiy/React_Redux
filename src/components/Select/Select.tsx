import React, {useState} from 'react';
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

        const selectedItem = props.items.find(f => f.value === props.value)
        const toggleItem = () => setActive(!active)
        // const itemClicked = (value: any) => onC
        const onItemClick = (value: any) => {
            props.onChange(value);
            toggleItem()
        }


        return (
            <>
                <div className={s.content}>   {/* +" "+ (active ? s.active : " ")*/}
                    <h3 onClick={toggleItem}>{selectedItem && selectedItem.title}</h3>
                    {
                        active &&
                        <div className={s.item}>
                            {props.items.map(m => <div
                                key={m.value}
                                onClick={()=> {onItemClick(m.value)}}
                            >{m.title}</div>)}
                        </div>
                    }
                </div>
            </>
        );
    }
;

