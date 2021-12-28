import React from "react";
import { Modal } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import successIcon from "../../img/success.svg";
import "../../css/modal.css"

class Success extends React.Component {
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
    console.log("inside error modal", this.props.success);
    return (
      <React.Fragment>
        {this.props.success && (
          <div className="modal">
            <div className="modal-content">
              <div className="modal-header">
                <h4 className="modal-title text-center">
                  <span>
                    <img src={successIcon} />
                  </span>
                </h4>
              </div>
              <div className="modal-body">
                <p className="text-center">{this.props.message}</p>
              </div>
              
                <Button
                  type="button "
                  className="btn btn-success"
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

export default Success;
