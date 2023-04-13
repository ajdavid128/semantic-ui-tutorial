import { useEffect, useState } from "react";

function DnDFetch() {

    useEffect(() => {
        fetch("https://www.dnd5eapi.co/api/classes")
        .then(res => res.json())
        .then(data => console.log(data))
    },[])

    return (
        <div className="avoid-nav">
            <h1> DND FOREVER</h1>
        </div>
    )
}

export default DnDFetch;