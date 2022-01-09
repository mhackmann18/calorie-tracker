import './TrackedFoods.css';
import FoodItem from './FoodItem';

function TrackedFoods(props){

  const mealsJSX = [];

  const mealData = [
    {
      name: "Breakfast",
      foods: [
        {
          name: "Bacon",
          servingSize: "1 slice",
          quantity: 4,
          calories: 280
        },
        {
          name: "Eggs",
          servingSize: "1 egg",
          quantity: 4,
          calories: 280
        },
        {
          name: "Hash Brown Patties",
          servingSize: "1 Patty",
          quantity: 2,
          calories: 240
        },
      ]
    },
    {
      name: "Lunch",
      foods: [
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
      ]
    },
    {
      name: "Dinner",
      foods: [
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
          calories: 360
        },
      ]
    },
  ];

  let key = 0;

  for(const meal of mealData){
    const foodsJSX = [];

    for(const food of meal.foods){
      foodsJSX.push(<FoodItem data={food} key={key} />);
      ++key;
    }

    mealsJSX.push(
      <div key={key}>
        <h2>{meal.name}</h2>
        {foodsJSX}
      </div>
    );
  }

  return (
    <div id="food-tracking-page-foods-tracked">
      {mealsJSX}
    </div>
  );
}

export default TrackedFoods;
