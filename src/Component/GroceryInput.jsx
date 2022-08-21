export const GroceryInput = ({handleChange,handleSubmit}) =>{

    return<>
    <input type="text" placeholder="Enter Item" onChange={(e) => handleChange(e)} />
    <button onClick={handleSubmit} >Add Item</button>
    </>
}