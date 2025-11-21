import React from "react";
import "./UserTable.css";

function UserTable({ users, setSelectedUser }) {
  return (
    <table className="userTable">
      <thead>
        <tr>
          <th>ID</th>
          <th>Image</th>
          <th>Name</th>
          <th>Phone</th>
          <th>Company</th>
          <th>Coin</th>
          <th></th>
        </tr>
      </thead>

      <tbody>
        {users.map((u) => (
          <tr key={u.id}>
            <td>{u.id}</td>

            <td>
              <img
                src={`https://i.pravatar.cc/50?img=${u.id}`}
                alt="avatar"
                className="avatar"
              />
            </td>

            <td>{u.name}</td>
            <td>{u.phone}</td>
            <td>{u.company.name}</td>
            <td>{Math.floor(Math.random() * 1000)} </td>

            <td>
              <button className="viewBtn" onClick={() => setSelectedUser(u)}>
                View Details
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default UserTable;
