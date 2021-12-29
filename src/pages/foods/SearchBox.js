import './SearchBox.css';

function SearchBox(){
  return (
    <div id="food-tracking-main-search-box">
      <input type="text" />
      <button>
        <i className="fas fa-search btn"></i>
      </button>
    </div>
  );
}

export default SearchBox;
