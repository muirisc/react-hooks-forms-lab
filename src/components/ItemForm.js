import React, { useState} from "react";
import { v4 as uuid } from "uuid";

function ItemForm( {onItemFormSubmit} ) {
  const [formSubmitted, setFormSubmitted] = useState({
    name: '',
    category: 'Produce' 
  })

function handleFormChange(event){
const name = event.target.name;

  setFormSubmitted({
    ...formSubmitted, [name]: event.target.value
  })
}


  return (
    <form className="NewItem" onSubmit={() => onItemFormSubmit( {...formSubmitted, id: uuid()})}>
      <label>
        Name:
        <input type="text" name="name" onChange={handleFormChange} value={formSubmitted.name} />
       </label>

       <label>
        Category:
        <select name="category" onChange={handleFormChange} value={formSubmitted.category}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
