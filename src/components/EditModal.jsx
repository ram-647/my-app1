import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Dropdown from "./common/Dropdown";
import { Modal } from "react-bootstrap";
import "../css/modal.css"


class EditModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      userStatus: { status: "" },
    };
  }

  handleChange = (event) => {
    console.log("handlechange", event.target.value);
    this.setState({ userStatus: { status: event.target.value } });
  };

  handleSave = () => {
    console.log("handlesave", this.state.userStatus.status);
    this.props.handleSaveEditUser(this.props.userId, this.state.userStatus);
    this.props.handleCloseBtn(false);
  };

  handleClose = () => {
    console.log("inside handleCLose", this.state.show);
    this.setState((prevstate) => ({ show: prevstate.show }));
    this.props.handleCloseBtn(false);
  };
  render() {
    console.log(
      "this.props.editClicked",
      this.props.editClicked,
      this.props.userId
    );
    return (
      <>
        {this.props.editClicked && (
          <div className="modal">
            <div className="modal-content" style={{width:"38%", height:"40%"}}>
              <div className="modal-header">
                <h4 className="modal-title text-center">
                {this.props.userName}
                </h4>
              </div>
              <div className="modal-body">
              <div class="col-md-6 padding-top">
                 <label for="inputPassword4" className="form-label">
                   Status
                 </label>
                  <select
                   className="form-select select"
                   onChange={this.handleChange}
                 >
                   <option selected>-- select--</option>
                   <option value="active">Active</option>
                   <option value="inactive">InActive</option>
                 </select> 
               
               </div>
              </div>
              <div className="modal-footer">
              <Button variant="primary" onClick={this.handleSave}>
                 Save
               </Button>
               <Button variant="secondary" onClick={this.handleClose}>
                 Close
               </Button>
              </div>
            </div>
          </div>
        )}
      </>
    );
  }
}

export default EditModal;
