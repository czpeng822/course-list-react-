import './Input.css';


function Input(){






  
    return (
        <form id="item-form">
        <div className="form-control">
          <input
            type="text"
            className="form-input"
            id="item-input"
            name="item"
            placeholder="Please Enter Course ID"
          />
        </div>
        <div className="form-control">
          <button type="submit" className="btn">
            <i className="fa-solid fa-plus"></i> Add Course
          </button>
        </div>
      </form>
    )
}

export default Input;