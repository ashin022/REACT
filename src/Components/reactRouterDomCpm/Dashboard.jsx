import React, { useState } from "react";
import "./dash.css";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const students = [
    { id: 1, name: "Amal", course: "BCA", status: "Active" },
    { id: 2, name: "Rahul", course: "BCA", status: "Active" },
    { id: 3, name: "Anu", course: "MCA", status: "Inactive" },
    { id: 4, name: "Abey", course: "BTech", status: "Active" },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case "students":
        return (
          <div className="activity">
            <h2>Students List</h2>
            <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Course</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {students.map((s) => (
                  <tr key={s.id}>
                    <td>{s.id}</td>
                    <td>{s.name}</td>
                    <td>{s.course}</td>
                    <td><span className={`status ${s.status.toLowerCase()}`}>{s.status}</span></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
      case "courses":
        return <div className="activity"><h2>Courses</h2><p>Total 15 Courses available.</p></div>;
      case "reports":
        return <div className="activity"><h2>Reports</h2><p>48 Reports generated.</p></div>;
      case "settings":
        return <div className="activity"><h2>Settings</h2><p>Settings page.</p></div>;
      default:
        return (
          <>
            <div className="cards">
              <div className="card"><h3>Total Students</h3><p>250</p></div>
              <div className="card"><h3>Total Courses</h3><p>15</p></div>
              <div className="card"><h3>Teachers</h3><p>25</p></div>
              <div className="card"><h3>Reports</h3><p>48</p></div>
            </div>
            <div className="activity">
              <h2>Recent Activity</h2>
              <table>
                <thead>
                  <tr><th>Name</th><th>Course</th><th>Status</th></tr>
                </thead>
                <tbody>
                  <tr><td>Amal</td><td>BCA</td><td><span className="status active">Active</span></td></tr>
                  <tr><td>Rahul</td><td>BCA</td><td><span className="status active">Active</span></td></tr>
                  <tr><td>Anu</td><td>MCA</td><td><span className="status inactive">Inactive</span></td></tr>
                </tbody>
              </table>
            </div>
          </>
        );
    }
  };

  return (
    <div className="dashboard">
      {/* Mobile Menu Button */}
      <button className="mobile-menu-btn" onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
        ☰
      </button>

      <aside className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
        <h2>My Dashboard</h2>
        <ul>
          <li className={activeTab === "dashboard" ? "active" : ""} onClick={() => { setActiveTab("dashboard"); setIsSidebarOpen(false); }}>🏠 Dashboard</li>
          <li className={activeTab === "students" ? "active" : ""} onClick={() => { setActiveTab("students"); setIsSidebarOpen(false); }}>👨‍🎓 Students</li>
          <li className={activeTab === "courses" ? "active" : ""} onClick={() => { setActiveTab("courses"); setIsSidebarOpen(false); }}>📚 Courses</li>
          <li className={activeTab === "reports" ? "active" : ""} onClick={() => { setActiveTab("reports"); setIsSidebarOpen(false); }}>📊 Reports</li>
          <li className={activeTab === "settings" ? "active" : ""} onClick={() => { setActiveTab("settings"); setIsSidebarOpen(false); }}>⚙️ Settings</li>
        </ul>
      </aside>

      <main className="main-content">
        <nav className="navbar">
          <h2>{activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}</h2>
          <span>Welcome, Admin....</span>
        </nav>
        {renderContent()}
      </main>
    </div>
  );
};

export default Dashboard;