import DndCards from "./DndCards";

function DndList({data}) {

    // console.log(data);

    const dndArry = data.map((item) => {
        return <DndCards key={item.index} classes={item} />
    })

    return (
        <div>
            <h1>Items</h1>
            {dndArry}
        </div>
    )
}

export default DndList;