
export  const GroceryList = ({data ,handleDelete}) => {
 

    return <>
    {
        data.map((item,index) => (
            <div key={item.id} className="groceydata">
            <h1>{item.title}</h1>
            <button onClick={()=>handleDelete(item.id)}> Delete</button>
          </div>

            
        ))
    }
    </>
}