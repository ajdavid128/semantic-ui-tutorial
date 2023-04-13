import { useEffect, useState } from "react";
import DndList from "./DndComponents/DndList";

function DnDFetch() {

    const [dndData, setDndData] = useState([])

    useEffect(() => {
        fetch("https://www.dnd5eapi.co/api/classes")
        .then(res => res.json())
        .then(data => setDndData(data.results))
    },[])

    console.log(dndData)

    return (
        <div className="avoid-nav">
            <h1> DND FOREVER</h1>
            <DndList />
        </div>
    )
}

export default DnDFetch;