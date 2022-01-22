import './TrackedFoods.css';
import FoodItem from './FoodItem';

function TrackedFoods(props){

  const foodsJSX = [];

  const foods = [
    {
      name: "Bacon",
      servingSize: "1 slice",
      quantity: 4,
      calories: 70
    },
    {
      name: "Egg",
      servingSize: "1 egg",
      quantity: 4,
      calories: 70
    },
    {
      name: "Hash Brown Patty",
      servingSize: "1 Patty",
      quantity: 2,
      calories: 120
    },
    {
      name: "Whole Wheat Bread",
      servingSize: "2 Slices",
      quantity: 1,
      calories: 120
    },
    {
      name: "Peanut Butter",
      servingSize: "2 Tablespoons",
      quantity: 1,
      calories: 180
    },
    {
      name: "White Spaghetti",
      servingSize: "3 oz",
      quantity: 1,
      calories: 140
    },
    {
      name: "Beef Meatballs",
      servingSize: "3 oz",
      quantity: 2,
      calories: 180
    }
  ];

  let key = 0;

  function updateFood(food){
    console.log(food);
  }

  function deleteFood(){
    console.log("Delete food");
  }

  for(const food of foods){
    foodsJSX.push(<FoodItem data={food} onServingsChange={updateFood} onDelete={deleteFood} key={key} />);
    ++key;
  }

  return (
    <div id="food-tracking-page-foods-tracked">
      {foodsJSX}
    </div>
  );
}

export default TrackedFoods;
