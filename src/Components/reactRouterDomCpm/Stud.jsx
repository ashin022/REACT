import React, { useState } from "react";
import "./App.css";

// JSON Data - 10 Users
const usersData = [
  { id: 1, name: "Arun Kumar", email: "arun@gmail.com", phone: "9876543210", place: "Kochi", img: "https://i.pravatar.cc/150?img=1" },
  { id: 2, name: "Dilna Rose", email: "dilna@gmail.com", phone: "9876543211", place: "Alwaye", img: "https://i.pravatar.cc/150?img=2" },
  { id: 3, name: "Abey Mathew", email: "abey@gmail.com", phone: "9876543212", place: "Trivandrum", img: "https://i.pravatar.cc/150?img=3" },
  { id: 4, name: "Sneha John", email: "sneha@gmail.com", phone: "9876543213", place: "Thrissur", img: "https://i.pravatar.cc/150?img=4" },
  { id: 5, name: "Rahul Raj", email: "rahul@gmail.com", phone: "9876543214", place: "Kozhikode", img: "https://i.pravatar.cc/150?img=5" },
  { id: 6, name: "Anu Priya", email: "anu@gmail.com", phone: "9876543215", place: "Kollam", img: "https://i.pravatar.cc/150?img=6" },
  { id: 7, name: "Vishnu V", email: "vishnu@gmail.com", phone: "9876543216", place: "Alappuzha", img: "https://i.pravatar.cc/150?img=7" },
  { id: 8, name: "Meera Nair", email: "meera@gmail.com", phone: "9876543217", place: "Kannur", img: "https://i.pravatar.cc/150?img=8" },
  { id: 9, name: "Jaison Joseph", email: "jaison@gmail.com", phone: "9876543218", place: "Muvattupuzha", img: "https://i.pravatar.cc/150?img=9" },
  { id: 10, name: "Fathima S", email: "fathima@gmail.com", phone: "9876543219", place: "Malappuram", img: "https://i.pravatar.cc/150?img=10" },
];

export default function App() {
  const [active, setActive] = useState("dashboard");
  const [sidebar, setSidebar] = useState(false);
  const [students, setStudents] = useState([
    { id: 1, name: "test", email: "test@gmail.com", phone: "0000000", class: "test" },
    { id: 2, name: "Dilna", email: "dilna@test.com", phone: "9876543210", class: "MERN" },
  ]);
  
  // Modals
  const [showAdd, setShowAdd] = useState(false);
  const [showEdit, setShowEdit] = useState(null);
  const [deleteId, setDeleteId] = useState(null);
  const [selectedUser, setSelectedUser] = useState(null);
  const [form, setForm] = useState({ name: "", email: "", phone: "", class: "" });

  // Add Student
  const handleAdd = (e) => {
    e.preventDefault();
    const newStudent = { id: Date.now(), ...form };
    setStudents([...students, newStudent]);
    setForm({ name: "", email: "", phone: "", class: "" });
    setShowAdd(false);
  };

  // Update Student
  const handleUpdate = (e) => {
    e.preventDefault();
    setStudents(students.map(s => s.id === showEdit.id ? { ...showEdit } : s));
    setShowEdit(null);
  };

  // Delete Student
  const handleDelete = () => {
    setStudents(students.filter(s => s.id !== deleteId));
    setDeleteId(null);
  };

  return (
    <div className="dashboard-app">
      <button className="hamburger" onClick={() => setSidebar(!sidebar)}>☰</button>

      {/* Sidebar - As per drawing */}
      <aside className={`sidebar ${sidebar ? "open" : ""}`}>
        <h2>Dashboard</h2>
        <ul>
          <li className={active === "users" ? "active" : ""} onClick={() => { setActive("users"); setSidebar(false); }}>UserList</li>
          <li className={active === "students" ? "active" : ""} onClick={() => { setActive("students"); setSidebar(false); }}>Students</li>
          <li onClick={() => alert("Logged Out")}>Logout</li>
        </ul>
      </aside>

      <main className="main">
        {active === "dashboard" && (
          <div className="welcome">
            <h1>Welcome to dashboard.</h1>
            <p>Click on <b>Students</b> for Student Table | Click on <b>UserList</b> for 10 users card</p>
            <div className="dash-cards">
              <div className="dash-card" onClick={() => setActive("students")}><h3>Total Students</h3><p>{students.length}</p></div>
              <div className="dash-card" onClick={() => setActive("users")}><h3>Total Users</h3><p>10</p></div>
            </div>
          </div>
        )}

        {/* STUDENT LIST */}
        {active === "students" && (
          <div className="content-box">
            <div className="table-header">
              <h2>Student List</h2>
              <button className="add-btn" onClick={() => setShowAdd(true)}>+ Add Student</button>
            </div>
            <div className="table-responsive">
              <table>
                <thead>
                  <tr><th>SlNo</th><th>Name</th><th>Email</th><th>Class</th><th>Phone</th><th>Action</th></tr>
                </thead>
                <tbody>
                  {students.map((s, i) => (
                    <tr key={s.id}>
                      <td>{i + 1}</td>
                      <td>{s.name}</td>
                      <td>{s.email}</td>
                      <td>{s.class}</td>
                      <td>{s.phone}</td>
                      <td>
                        <button className="edit-btn" onClick={() => setShowEdit({ ...s })}>Edit</button>
                        <button className="delete-btn" onClick={() => setDeleteId(s.id)}>Delete</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* USER LIST */}
        {active === "users" && (
          <div className="content-box">
            <h2>User List - 10 Users Card</h2>
            <div className="user-grid">
              {usersData.map(user => (
                <div className="user-card" key={user.id}>
                  <img src={user.img} alt={user.name} />
                  <h4>{user.name}</h4>
                  <p>{user.email}</p>
                  <p>{user.phone}</p>
                  <button onClick={() => setSelectedUser(user)}>Know More</button>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>

      {/* ADD STUDENT POPUP */}
      {showAdd && (
        <div className="modal-overlay">
          <form className="modal" onSubmit={handleAdd}>
            <h3>Add Student</h3>
            <label>Name: <input required value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} /></label>
            <label>Email: <input required value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} /></label>
            <label>Phone: <input required value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} /></label>
            <label>Class: <input required value={form.class} onChange={e => setForm({ ...form, class: e.target.value })} /></label>
            <div className="modal-btns"><button type="submit">Submit</button><button type="button" onClick={() => setShowAdd(false)}>Cancel</button></div>
          </form>
        </div>
      )}

      {/* EDIT STUDENT POPUP */}
      {showEdit && (
        <div className="modal-overlay">
          <form className="modal" onSubmit={handleUpdate}>
            <h3>Edit Student</h3>
            <label>Name: <input value={showEdit.name} onChange={e => setShowEdit({ ...showEdit, name: e.target.value })} /></label>
            <label>Email: <input value={showEdit.email} onChange={e => setShowEdit({ ...showEdit, email: e.target.value })} /></label>
            <label>Phone: <input value={showEdit.phone} onChange={e => setShowEdit({ ...showEdit, phone: e.target.value })} /></label>
            <label>Class: <input value={showEdit.class} onChange={e => setShowEdit({ ...showEdit, class: e.target.value })} /></label>
            <div className="modal-btns"><button type="submit">Update</button><button type="button" onClick={() => setShowEdit(null)}>Cancel</button></div>
          </form>
        </div>
      )}

      {/* DELETE CONFIRMATION POPUP */}
      {deleteId && (
        <div className="modal-overlay">
          <div className="modal small">
            <h3>Confirmation Popup</h3>
            <p>Are you sure you want to delete this student?</p>
            <div className="modal-btns"><button onClick={handleDelete} className="delete-btn">Yes Delete</button><button onClick={() => setDeleteId(null)}>Cancel</button></div>
          </div>
        </div>
      )}

      {/* USER DETAIL POPUP - Know More */}
      {selectedUser && (
        <div className="modal-overlay">
          <div className="modal small user-detail">
            <img src={selectedUser.img} alt="" />
            <h3>Name: {selectedUser.name}</h3>
            <p>Email: {selectedUser.email}</p>
            <p>Phone: {selectedUser.phone}</p>
            <p>Place: {selectedUser.place}</p>
            <p>Image: {selectedUser.img}</p>
            <button onClick={() => setSelectedUser(null)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

