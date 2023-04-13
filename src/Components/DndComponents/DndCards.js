

function DndCards({classes, dynamicClick, classNameVar}) {

    // console.log(classes);
    classNameVar = classes.name

    return (
        <div>
            <h1 onClick={dynamicClick}>{classes.name}</h1>
        </div>
    )
}

export default DndCards;