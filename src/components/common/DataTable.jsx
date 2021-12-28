import React, { Component } from "react";
import editIcon from "../../img/edit.svg";
import deleteIcon from "../../img/delete.svg";
import Button from "react-bootstrap/Button";

export default class DataTable extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleEdit = (user) => {
    this.props.handleEdit(user);
  };

  handleDelete = (id, event) => {
    this.props.handleDelete(id, event);
  };

  render() {
    const { usersFilterData } = this.props;
    return (
      <div className="table-responsive">
        <table className="table">
          <thead style={{ backgroundColor: "#001871", color: "white" }}>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Name</th>
              <th scope="col">Gender</th>
              <th scope="col">Email</th>
              <th scope="col">Status</th>
              <th scope="col">Action(s)</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody style={{ fontSize: "16px", fontWeight: "600" }}>
            {usersFilterData
              .sort((a, b) => a.id - b.id)
              .map((user) => (
                <tr key={user.id}>
                  <td scope="col">{user.id}</td>
                  <td scope="col">{user.name}</td>
                  <td scope="col">{user.gender}</td>
                  <td scope="col">{user.email}</td>
                  <td scope="col">{user.status}</td>
                  <td>
                    <Button
                      variant="outline-primary"
                      onClick={() => this.handleEdit(user)}
                    >
                      Edit
                      <span>
                        <img alt="edit" src={editIcon} />
                      </span>
                    </Button>
                  </td>
                  <td>
                    <Button
                      variant="outline-primary"
                      key={user.id}
                      onClick={(event) => this.handleDelete(user.id, event)}
                    >
                      Delete
                      <span>
                        <img alt="delete" src={deleteIcon} />
                      </span>
                    </Button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    );
  }
}
