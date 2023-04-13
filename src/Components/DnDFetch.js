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

    // useEffect(() => {
    //     fetch(`https://www.dnd5eapi.co/api/classes/${className}`)
    //     .then(res => res.json())
    //     .then(data => console.log(data))
    // },[])

    const handleDynamicClassName = () => {
        console.log('hi')
    }

    // console.log(dndData)

    return (
        <div className="avoid-nav">
            <h1> DND FOREVER</h1>
            <DndList 
                data={dndData}
                dynamicClick={handleDynamicClassName}
                />
        </div>
    )
}

export default DnDFetch;