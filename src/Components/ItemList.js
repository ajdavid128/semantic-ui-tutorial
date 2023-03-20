import ItemDetail from "./ItemDetail";

function ItemList({checklistItem}) {

    const mappedChecklist = checklistItem.map((eachItem) => {
        return <ItemDetail key={eachItem.id} />
    })

    return (
        <div>
            <h1>here I am</h1>
            {mappedChecklist}
        </div>
    )
};

export default ItemList;