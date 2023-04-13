import { getValue } from "@testing-library/user-event/dist/utils";
import { useEffect, useState } from "react";
import DndList from "./DndComponents/DndList";

function DnDFetch() {

    const [dndData, setDndData] = useState([])
    const [dynamicData, setDynamicData] = useState([])

    useEffect(() => {
        fetch("https://www.dnd5eapi.co/api/classes")
        .then(res => res.json())
        .then(data => setDndData(data.results))
    },[])

    useEffect(() => {
        fetch(`https://www.dnd5eapi.co/api/classes/${className}`)
        .then(res => res.json())
        .then(data => console.log(data))
    },[])

    let className = ''
    console.log(className)

    const handleDynamicClassName = () => {
        console.log()
        // className = 

    }

    // console.log(dndData)

    return (
        <div className="avoid-nav">
            <h1> DND FOREVER</h1>
            <DndList 
                data={dndData}
                dynamicClick={handleDynamicClassName}
                classNameVar={className}
                />
        </div>
    )
}

export default DnDFetch;