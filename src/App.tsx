import React, {useState} from 'react';
import './App.css';
import {Rating, RatingValueType} from "./components/Rating/Rating";
import {UncontrolledRating} from "./components/UncontrolledRating/UncontrolledRating";
import {Accordion} from "./components/Accordion/Accordion";
import {UncontrolledOnOff} from "./components/UncontrolledOnOff/UncontrolledOnOff";
import {OnOff} from "./components/OnOff/OnOff";
import {UncontrolledAccordion} from "./components/UncontrolledAccordion/UncontrolledAccordion";


function App(props: any) {
    console.log("Star rendered")

    let [ratingValue, setRatingValue] = useState<RatingValueType>(0)
    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)
    let [switchOn, setSwitchOn] = useState<boolean>(false)
    return (
        <div className={"App"}>
            <Rating value={ratingValue} onClick={setRatingValue}/>

            {/*<UncontrolledOnOff/>*/}

            <UncontrolledAccordion titleValue={"Menu"}/>

            <Accordion
                titleValue={"Menu"}
                collapsed={accordionCollapsed}
                onChange={() => {
                    setAccordionCollapsed(!accordionCollapsed)
                }}
            />
            <UncontrolledRating/>
            {/*<OnOff on={switchOn} onChange={(on) =>{setSwitchOn(on)} }/>*/}

            <UncontrolledOnOff onChange={setSwitchOn} />{switchOn.toString()}

        </div>
    );
}

type PageTitlePropsType = {
    title: string
}

function PageTitle(props: PageTitlePropsType) {
    console.log("Star rendered")
    return (
        <h1>{props.title}</h1>
    )
}


export default App;
