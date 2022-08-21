import { useState } from "react"
import { GroceryInput } from "./GroceryInput"
import { GroceryList } from "./GroceryList"
import {v4 as uuid} from "uuid"
export const Grocery = () => {
    const [data,setdata] = useState([])
    const [inputdata,setinputdata] = useState("")
    
    const handleChange = (e) =>{
        setinputdata(e.target.value)
    }
    // console.log(inputdata)
    const handleSubmit = () =>{
        if(inputdata.length===0){
            alert("Enter Your item ")
        }
        else{const temp = {
            title: inputdata,
            id: uuid()
        }
        setdata([...data,temp])

        }
        
    }
    const handleDelete = (id) =>{
        const updatedata = data.filter((item) =>
        item.id !== id
        )
        setdata(updatedata)
     }
    // console.log(data)

    return<>
    <h1>Grocery App</h1>
    <GroceryInput handleChange={handleChange} handleSubmit={handleSubmit} />
    <GroceryList data={data} handleDelete={handleDelete} />
    </>
}