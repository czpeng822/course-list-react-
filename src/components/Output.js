import './Output.css';

function Output() {
  
    return (
        <div>
        <div className="filter">
        <input
          type="text"
          className="form-input-filter"
          id="filter"
          placeholder="Courses Registration:"
        />
      </div>

      <ul id="item-list" className="items">
      </ul>

      <button id="clear" className="btn-clear">Clear All</button>
    </div>
    )
}
export default Output;