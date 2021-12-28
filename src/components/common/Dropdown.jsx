import React from "react";

class Dropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // show: false,
      userStatus: { status: "" },
    };
  }

  handleChange = (event) => {
    this.props.onChange(event.target.value);
  };
  render() {
    return (
      <div class="col-md-6 padding-top">
        <label for="inputPassword4" className="form-label">
          Status
        </label>
        <select className="form-select select">
          <option selected>-- select--</option>
          <option value="active">Active</option>
          <option value="inactive">InActive</option>
        </select>
      </div>
    );
  }
}

export default Dropdown;
