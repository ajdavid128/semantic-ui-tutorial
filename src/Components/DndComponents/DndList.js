import { useEffect, useState } from "react";

import DndCards from "./DndCards";

function DndList({data, dynamicClick, classNameVar}) {

    const [className, setClassName] = useState('')
    const [classData, setClassData] = useState([])

    console.log(classData);

    // const dndArry = data.map((item) => {
    //     return <DndCards 
    //         key={item.index} 
    //         classes={item} 
    //         dynamicClick={dynamicClick}
    //         classNameVar={classNameVar} 
    //         />
    // })

    useEffect(() => {
        fetch(`https://www.dnd5eapi.co/api/classes/${className}`)
        .then(res => res.json())
        .then(data => setClassData(data))
    }, [className])

    // let className
    // console.log(className)

    const handleDynamicClassName = (e) => {
        // console.log('hi')
        const {value} = e.target
        // console.log(value)
        setClassName(value.toLowerCase())

    }



    const dropdownOptions = data.map((item) => {
        return <option value={item.name} >{item.name}</option>
    }) 

    return (
        <div>
            <h1>Items</h1>
            <label>Dropdown Menu</label>
            <select onChange={handleDynamicClassName} name='classes' id='classNames'>
                <option value="">--Please choose an option--</option>
                {dropdownOptions}
            </select>
            {/* {dndArry} */}

        </div>
    )
}

export default DndList;