import { Button } from "semantic-ui-react";
import { useState, useEffect } from "react";

import ItemList from "./ItemList";

function Checklist() {

    const [checklistItem, setChecklistItem] = useState([])

    useEffect(() => {
        fetch("") // use JSON server to fetch to db.json file
        .then(res => res.json())
        .then(data => setChecklistItem(data))
    }, []);

    return (
        <div className="avoid-nav">
            
            <h1>Checklist</h1>
            <Button>Create New Item</Button>
            <ItemList checklistItem={checklistItem}/>

        </div>
    )
};

export default Checklist;