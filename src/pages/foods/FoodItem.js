import './FoodItem.css';

function FoodItem(props){
  const { name, servingSize, quantity, calories } = props.data;

  function handleDeleteClick(){
    console.log("Delete food");
  }

  function handleEditClick(){
    console.log("Edit servings");
  }

  return (
    <div className="food-item">
      <div className="food-item-main">
        <div className="food-item-text">
          <h4>{name}</h4>
          <p>Serving Size: {servingSize} | Servings: {quantity} | Calories: {calories}</p>
        </div>
        <div className="food-item-btns">
          <i onClick={handleEditClick} className="far fa-edit btn" title="Edit servings"></i>
          <i onClick={handleDeleteClick} className="far fa-trash-alt btn" title="Remove"></i>
        </div>
      </div>
      <div className="food-item-dropdown">
        
      </div>
    </div>
  );
}

export default FoodItem;
