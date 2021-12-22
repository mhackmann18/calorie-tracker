import './HeaderItem.css';

function HeaderItem(props){
  return (
    <div id="main-header-miles-ran">
      <span id="main-header-miles-count">{props.number} <span>{props.unit}</span></span> 
      <span>{props.text}</span>
    </div>
  );
}

export default HeaderItem;