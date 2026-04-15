export default function OpsFlowDashboard() {
  const mockRequests = [
    { id: "1", title: "New Laptop for Onboarding", status: "PENDING", requester: "John Doe", date: "2024-04-10" },
    { id: "2", title: "Cloud Credits Increase", status: "APPROVED", requester: "Jane Smith", date: "2024-04-12" },
    { id: "3", title: "Database Access - Production", status: "REJECTED", requester: "Bob Wilson", date: "2024-04-14" },
  ];

  return (
    <div>
      <header style={{ marginBottom: "3rem" }}>
        <h1>Operations Dashboard</h1>
        <p style={{ color: "#94a3b8" }}>Overview of recent workflow requests and their status.</p>
      </header>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1.5rem", marginBottom: "3rem" }}>
        <div className="card" style={{ textAlign: "center" }}>
          <div style={{ fontSize: "2rem", fontWeight: 700, color: "#3b82f6" }}>12</div>
          <p style={{ margin: 0 }}>Pending</p>
        </div>
        <div className="card" style={{ textAlign: "center" }}>
          <div style={{ fontSize: "2rem", fontWeight: 700, color: "#22c55e" }}>45</div>
          <p style={{ margin: 0 }}>Approved</p>
        </div>
        <div className="card" style={{ textAlign: "center" }}>
          <div style={{ fontSize: "2rem", fontWeight: 700, color: "#ef4444" }}>3</div>
          <p style={{ margin: 0 }}>Rejected</p>
        </div>
      </div>

      <div className="card" style={{ padding: 0 }}>
        <table style={{ width: "100%", borderCollapse: "collapse", color: "#f8fafc" }}>
          <thead>
            <tr style={{ borderBottom: "1px solid #334155", textAlign: "left" }}>
              <th style={{ padding: "1rem 1.5rem" }}>Title</th>
              <th style={{ padding: "1rem 1.5rem" }}>Requester</th>
              <th style={{ padding: "1rem 1.5rem" }}>Date</th>
              <th style={{ padding: "1rem 1.5rem" }}>Status</th>
            </tr>
          </thead>
          <tbody>
            {mockRequests.map((req) => (
              <tr key={req.id} style={{ borderBottom: "1px solid #1e293b" }}>
                <td style={{ padding: "1rem 1.5rem", fontWeight: 500 }}>{req.title}</td>
                <td style={{ padding: "1rem 1.5rem", color: "#94a3b8" }}>{req.requester}</td>
                <td style={{ padding: "1rem 1.5rem", color: "#94a3b8" }}>{req.date}</td>
                <td style={{ padding: "1rem 1.5rem" }}>
                  <span style={{ 
                    padding: "0.25rem 0.5rem", 
                    borderRadius: "4px", 
                    fontSize: "0.75rem", 
                    fontWeight: 700,
                    backgroundColor: req.status === "PENDING" ? "#1e1b4b" : req.status === "APPROVED" ? "#064e3b" : "#450a0a",
                    color: req.status === "PENDING" ? "#818cf8" : req.status === "APPROVED" ? "#34d399" : "#f87171"
                  }}>
                    {req.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
