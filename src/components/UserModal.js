import React from "react";
import "./UserModal.css";

function UserModal({ user, close }) {
  return (
    <div className="modalOverlay">
      <div className="modal">
        <h2>{user.name}</h2>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Phone:</strong> {user.phone}</p>
        <p><strong>Username:</strong> {user.username}</p>
        <p><strong>Website:</strong> {user.website}</p>

        <h3>Address</h3>
        <p>
          {user.address.street}, {user.address.suite}, {user.address.city}
        </p>

        <h3>Company</h3>
        <p>{user.company.name}</p>
        <p><em>"{user.company.catchPhrase}"</em></p>

        <button className="closeBtn" onClick={close}>
          Close
        </button>
      </div>
    </div>
  );
}

export default UserModal;
