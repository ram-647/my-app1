import { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getUsers, editUser, deleteUser } from "../redux/actions/apis/api";
import Button from "react-bootstrap/Button";
import EditModal from "./EditModal";
import ErrorModal from "./common/ErrorModal";
import SuccessModal from "./common/SuccessModal";
import Alert from "./common/Alert";
import DataTable from "./common/DataTable";

class SearchPlan extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      status: "",
      gender: "",
      showApiError: true,
      isSearchBtnClicked: false,
      usersFilterData: [],
      isEditbtnClicked: false,
      isDelteSuccess: false,
      isEditSuccess: false,
      closeBtn: false,
      userId: "",
      userName: "",
    };
  }

  componentDidMount() {
    // making all API calls and store in the redux-store
    this.props.getUsers();
  }

  handleChange = (event) => {
    this.setState({ name: event.target.value });
  };

  handleStatusChange = (event) => {
    this.setState({ status: event.target.value });
  };

  handleGenderChange = (event) => {
    console.log('gender', event.target.value)
    this.setState({ gender: event.target.value });
  };

  handleSubmit = (event) => {
    console.log("inside handle submit", this.state.name, this.state.gender);
    const { name, status, gender } = this.state;
    event.preventDefault();
    this.setState({ isSearchBtnClicked: true });
    const usersFilterData = this.props.users
      .filter(
        (user) =>
          user.name.toLowerCase() === name.toLowerCase() ||
          user.status.toLowerCase() === status.toLowerCase() || 
          user.gender.toLowerCase() === gender.toLowerCase()
      )
      .map((user) => user);
    //console.log('filter data',usersFilterData)
    this.setState({ usersFilterData });
    this.handleClear();
  };

  handleCloseBtn = (show) => {
    this.setState({ isEditbtnClicked: show, showError: show });
  };

  handleErrorCloseBtn = (error) => {
    this.setState({ showApiError: error });
  };

  handleSuccessCloseBtn = (success) => {
    this.setState({ isDelteSuccess: success });
    this.setState({ isEditSuccess: success });
  };

  handleEdit = (user) => {
    console.log("handleEdit", user);
    this.setState({ isEditbtnClicked: true });
    this.setState({ userId: user.id, userName: user.name });
  };

  handleSaveEditUser = (id, user) => {
    console.log("inside handleSaveEditUser", id, user);
    this.props.editUser(id, user);
    this.setState({ isEditSuccess: true });
    //this.props.getUsers();
  };

  handleDelete = (id, event) => {
    console.log("handleDelete", id);
    event.preventDefault();
    this.props.deleteUser(id);
    this.setState({ isDelteSuccess: true });
    //this.props.getUsers();
  };

  handleClear = (event) => {
    this.setState({
      name: "",
      email: "",
      status: "",
      gender: "",
    });
    // this.props.getUsers()
  };

  render() {
    console.log("users", this.props.users);
    console.log("show success", this.props.loading);
    console.log("gender", this.state.gender);
    let { usersFilterData } = this.state;
    if (usersFilterData.length > 0) {
      usersFilterData = usersFilterData;
    } else {
      usersFilterData = this.props.users;
    }

    // console.log('usersFilterData', usersFilterData)
    return (
      <div className="searchPlan">
        <form className="row g-3" onSubmit={this.handleSubmit}>
          <div className="col-md-3">
            <label for="inputPassword4" className="form-label">
              User Name
            </label>
            <input
              type="text"
              className="form-control"
              value={this.state.name}
              onChange={this.handleChange}
            />
          </div>
          <div className="col-md-3">
            <label for="inputPassword4" className="form-label">
              Gender
            </label>
            <select
              className="form-select select"
              aria-label="Disabled select example"
              value={this.state.gender}
              onChange={this.handleGenderChange}
            >
              <option selected>-- select--</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
          <div className="col-md-3">
            <label for="text" className="form-label">
              Email
            </label>
            <input type="text" className="form-control" id="inputPassword4" />
          </div>
          <div className="col-md-3">
            <label for="inputPassword4" className="form-label">
              status
            </label>
            <select
              className="form-select select"
              value={this.state.status}
              onChange={this.handleStatusChange}
            >
              <option selected>-- select--</option>
              <option value="active">Active</option>
              <option value="inactive">InActive</option>
            </select>
          </div>

          <div className="col-12 button-right">
            <Button type="submit" className="btn btn-primary  mr-1">
              Search
            </Button>
            <Button type="submit" className="btn btn-outline-primary">
              Clear
            </Button>
          </div>
        </form>

        {this.props.loading && (
          <div className="d-flex justify-content-center ">
            <div className="spinner-border text-primary">
              <span className="sr-only">Loading...</span>
            </div>
          </div>
        )}

        {this.props.showError && this.state.showApiError && (
          <ErrorModal
            showError={this.props.showError}
            handleCloseBtn={this.handleErrorCloseBtn}
          />
        )}

        {this.state.isEditSuccess && this.props.editSuccess && (
          <SuccessModal
            message={"Updated Suuccessfully"}
            success={this.props.editSuccess}
            handleCloseBtn={this.handleSuccessCloseBtn}
          />
        )}

        {this.state.isDelteSuccess && this.props.success && (
          <SuccessModal
            message={"Deleted Suuccessfully"}
            success={this.props.success}
            handleCloseBtn={this.handleSuccessCloseBtn}
          />
        )}

        {this.state.isEditbtnClicked && (
          <EditModal
            editClicked={this.state.isEditbtnClicked}
            handleCloseBtn={this.handleCloseBtn}
            handleSaveEditUser={this.handleSaveEditUser}
            users={this.props.users}
            userId={this.state.userId}
            userName={this.state.userName}
          />
        )}

        {!this.props.loading &&
          !this.props.showError &&
          usersFilterData.length < 1 && <Alert message={"No Data Found"} />}

        {usersFilterData.length > 0 && (
          <DataTable
            usersFilterData={usersFilterData}
            handleEdit={this.handleEdit}
            handleDelete={this.handleDelete}
          />
        )}
      </div>
    );
  }
}

SearchPlan.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      gender: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      status: PropTypes.string.isRequired,
    })
  ),
  //Loading: PropTypes.bool
};

const mapStateToProps = (state) => ({
  users: state.task.users,
  loading: state.task.loading,
  showError: state.task.showError,
  success: state.task.success,
  editSuccess: state.task.editSuccess,
});

const mapDispacthToProps = (dispatch) => {
  return {
    getUsers: () => dispatch(getUsers()),
    editUser: (id, user) => dispatch(editUser(id, user)),
    deleteUser: (id) => dispatch(deleteUser(id)),
  };
};

export default connect(mapStateToProps, mapDispacthToProps)(SearchPlan);
