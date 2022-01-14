import './FoodItem.css';
import { useState } from 'react';

function FoodItem(props){
  const { name, servingSize, quantity, calories } = props.data;
  const [editing, setEditing] = useState(false);

  function handleDeleteClick(){
    console.log("Delete food");
  }

  function handleSaveClick(){
    console.log("Save changes");
    setEditing(false);
  }

  function handleEditClick(){
    console.log("Edit servings");
    setEditing(true);
  }

  function handleCancelClick(){
    console.log("Cancel edit");
    setEditing(false);
  }

  return (
    <div className="food-item">
      <div className="food-item-main">
        <div className="food-item-text">
          <h4>{name}</h4>
          <p>Serving Size: {servingSize} | Servings: {quantity} | Calories: {calories}</p>
        </div>
        <div className="food-item-btns">
          <i 
          onClick={editing ? handleCancelClick : handleEditClick} 
          className={editing ? "fas fa-times btn" : "far fa-edit btn"} 
          title={editing ? "Cancel" : "Edit Servings"}></i>
          <i 
          onClick={editing ? handleSaveClick : handleDeleteClick} 
          className={editing ? "fas fa-check btn" : "far fa-trash-alt btn"} 
          title={editing ? "Save Changes" : "Remove"}></i>
        </div>
      </div>
      {editing && 
        <div className="food-item-dropdown">
          <div className="food-item-dropdown-nutrition">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta ducimus a possimus, ut et tempora, natus saepe, obcaecati reiciendis assumenda placeat. Pariatur ipsam debitis minima voluptas animi eveniet veritatis, aliquam nemo aspernatur? Ipsa error eius necessitatibus nulla nisi aperiam, asperiores provident molestias quas cumque rem officiis minima sapiente doloremque atque?
          </div>
          <div className="food-item-dropdown-controls">
            <label htmlFor="servings-input">Servings:</label>
            <input id="servings-input" type="number" />
          </div>
        </div>
      }
    </div>
  );
}

export default FoodItem;
