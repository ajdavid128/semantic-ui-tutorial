import DndCards from "./DndCards";

function DndList({data, dynamicClick, classNameVar}) {

    console.log(data);

    const dndArry = data.map((item) => {
        return <DndCards 
            key={item.index} 
            classes={item} 
            dynamicClick={dynamicClick}
            classNameVar={classNameVar} 
            />
    })

    const dropdownOptions = data.map((item) => {
        return <option value={item.name} >{item.name}</option>
    }) 

    return (
        <div>
            <h1>Items</h1>
            <label>Dropdown Menu</label>
            <select name='classes' id='classNames'>
                <option value="">--Please choose an option--</option>
                {dropdownOptions}
            </select>
            {dndArry}

        </div>
    )
}

export default DndList;