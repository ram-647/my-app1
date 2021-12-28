import Recat from "react";

const Alert = (props) => {

  return (
    <div className="alert alert-info text-center" role="alert">
      <h4>{props.message}</h4>
      {/* <button type="button" className="close" data-dismiss="alert" aria-label="Close">
    <span aria-hidden="true">&times;</span>
  </button> */}
    </div>
  );
};

export default Alert;
