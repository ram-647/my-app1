import React from "react";
// import { Modal } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import errorIcon from "../../img/error.svg";
import "../../css/modal.css"

class Error extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
    };
  }

  handleClose = () => {
    console.log("inside handleCLose", this.state.show);
    this.setState((prevstate) => ({ show: prevstate.show }));
    this.props.handleCloseBtn(false);
  };

  render() {
    console.log("inside error modal", this.props.showError);
    return (
      <React.Fragment>
        {this.props.showError && (
          <div className="modal">
            <div className="modal-content">
              <div className="modal-header">
                <h4 className="modal-title text-center">
                  <span>
                    <img src={errorIcon} />
                  </span>
                </h4>
              </div>
              <div className="modal-body">
                <h4 className="text-center">Network Error</h4>
              </div>
             
              <Button
                  type="button "
                  className="btn btn-danger"
                  onClick={this.handleClose}
                  style={{textAlign: "center",
                    padding: "16px 0px"}}
                >
                  Ok
                </Button>
             
            </div>
          </div>
        )}
      </React.Fragment>
    );
  }
}

export default Error;
