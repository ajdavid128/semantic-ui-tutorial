import { Button } from "semantic-ui-react";
import { useState } from "react";

import ItemList from "./ItemList";

function Checklist() {

    const [checklistItem, setChecklistItem] = useState([])

    return (
        <div className="avoid-nav">
            
            <h1>Checklist</h1>
            <Button>Create New Item</Button>
            <ItemList checklistItem={checklistItem}/>

        </div>
    )
};

export default Checklist;