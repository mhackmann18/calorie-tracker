import './FoodItem.css';
import { useState } from 'react';

// PROPS - 3
// data - An object with a "name" property thart holds a string, a "servingSize" property that holds a string, a "quantity" property
//        that holds an integer number, and a "calories" property that holds the number of calories
// onServingsChange - A function that takes the new food object with the updated quantity as an argument
// onDelete - 

function FoodItem(props){
  const { name, servingSize, quantity, calories } = props.data;
  const [servingsShown, setServingsShown] = useState(quantity);
  const [editing, setEditing] = useState(false);

  function handleInputChange(e){
    setServingsShown(e.target.value);
  }

  function handleDeleteClick(){
    props.onDelete();
  }

  function handleSaveClick(){
    props.onServingsChange({name, servingSize, quantity: parseInt(servingsShown), calories});
    setEditing(false);
  }

  function handleEditClick(){
    setEditing(true);
  }

  function handleCancelClick(){
    setServingsShown(quantity);
    setEditing(false);
  }

  return (
    <div className="food-item">
      <div className="food-item-main">
        <div className="food-item-text">
          <h4>{name}</h4>
          <p>Serving Size: {servingSize} | Servings: {servingsShown} | Calories: {calories * servingsShown}</p>
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
      {/* {editing &&  */}
        <div className="food-item-dropdown" style={editing ? {"maxHeight": "200px"}: {"maxHeight": "0px"}}>
          <div className="food-item-dropdown-nutrition">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus laborum necessitatibus ad repellat quis dolorum quae, reprehenderit ipsa suscipit dignissimos commodi iure ipsam totam amet quod, sint, adipisci autem. Dolorum iusto omnis explicabo nemo iste, aliquam molestiae provident deleniti in dignissimos neque quidem quia laboriosam, voluptatibus perferendis assumenda tenetur culpa?</div>
          <div className="food-item-dropdown-controls">
            <label htmlFor="servings-input">Servings:</label>
            <input id="servings-input" type="number" max="100" min="0" value={servingsShown} onChange={handleInputChange}/>
          </div>
        </div>
      {/* } */}
    </div>
  );
}

export default FoodItem;
