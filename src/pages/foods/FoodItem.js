import './FoodItem.css';

function FoodItem(){
  return (
    <div className="food-item">
      <div className="food-item-text">
        <h5>Food 1</h5>
        <p>Serving Size: 1 cup | Calories: 150</p>
      </div>
      <div className="food-item-btns">
        <i class="fas fa-plus"></i>
      </div>
    </div>
  );
}

export default FoodItem;
