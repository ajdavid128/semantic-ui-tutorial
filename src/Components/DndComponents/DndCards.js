

function DndCards({classes, dynamicClick}) {

    // console.log(classes);

    return (
        <div>
            <h1 onClick={dynamicClick}>{classes.name}</h1>
        </div>
    )
}

export default DndCards;