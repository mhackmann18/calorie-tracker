import './Macros.css';

function Macros(props){
  return (
    <div id="main-header-macros-consumed">
      <ul>
        <li>Fat: {props.fat} g</li>
        <li>Carbs: {props.carbs} g</li>
        <li>Protein: {props.protein} g</li>
      </ul>
    </div>
  );
}

export default Macros;