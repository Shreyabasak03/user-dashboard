import React, { useEffect, useState } from "react";
import UserTable from "./components/UserTable";
import Loader from "./components/Loader";
import UserModal from "./components/UserModal";
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);  
  const [error, setError] = useState("");        
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        if (!res.ok) throw new Error("Unable to fetch users");
        return res.json();
      })
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch(() => {
        setError("❌ Failed to fetch user data. Please try again.");
        setLoading(false);
      });
  }, []);

  const filteredUsers = users.filter((u) =>
    (u.name + u.email).toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container">
      <h1>User Dashboard</h1>

      <input
        type="text"
        placeholder="Search by name or email..."
        className="searchBox"
        onChange={(e) => setSearch(e.target.value)}
      />

      
      {loading && <Loader />}

      
      {error && <p className="error">{error}</p>}

      
      {!loading && !error && (
        <UserTable users={filteredUsers} setSelectedUser={setSelectedUser} />
      )}

      {selectedUser && (
        <UserModal user={selectedUser} close={() => setSelectedUser(null)} />
      )}
    </div>
  );
}

export default App;
