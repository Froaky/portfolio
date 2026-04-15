import Link from "next/link";

export default function OpsFlowLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div style={{ display: "flex", minHeight: "100vh", backgroundColor: "#020617" }}>
      {/* Sidebar */}
      <aside style={{ 
        width: "260px", 
        borderRight: "1px solid #1e293b", 
        padding: "2rem 1.5rem",
        display: "flex",
        flexDirection: "column",
        gap: "2rem"
      }}>
        <div style={{ fontSize: "1.5rem", fontWeight: 800, color: "#3b82f6" }}>
          OpsFlow
        </div>
        
        <nav style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
          <Link href="/opsflow" className="nav-link" style={{ padding: "0.5rem", borderRadius: "4px" }}>Dashboard</Link>
          <Link href="/opsflow/new" className="nav-link" style={{ padding: "0.5rem", borderRadius: "4px" }}>New Request</Link>
          <Link href="/opsflow/approvals" className="nav-link" style={{ padding: "0.5rem", borderRadius: "4px" }}>Approvals</Link>
        </nav>

        <div style={{ marginTop: "auto", borderTop: "1px solid #1e293b", paddingTop: "1rem" }}>
          <Link href="/" className="nav-link" style={{ fontSize: "0.875rem" }}>← Back to Portfolio</Link>
        </div>
      </aside>

      {/* Main Content */}
      <main style={{ flex: 1, padding: "2rem 3rem", overflowY: "auto" }}>
        {children}
      </main>
    </div>
  );
}
