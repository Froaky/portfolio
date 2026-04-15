import Link from "next/link";

export default function OpsDashboardProject() {
  return (
    <>
      <nav className="navbar">
        <div className="container nav-content">
          <Link href="/" className="nav-link" style={{ color: "white", fontWeight: 700, fontSize: "1.25rem" }}>
            MC
          </Link>
          <div className="nav-links">
            <Link href="/" className="nav-link">← Back to Projects</Link>
          </div>
        </div>
      </nav>

      <main className="container" style={{ paddingTop: "8rem", paddingBottom: "6rem" }}>
        <section>
          <span style={{ color: "var(--primary)", fontWeight: 600 }}>CASE STUDY</span>
          <h1 style={{ marginTop: "1rem", fontSize: "3rem" }}>Custom Operations Dashboard</h1>
          
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", margin: "2rem 0" }}>
            <span className="btn btn-outline" style={{ cursor: "default", padding: "0.25rem 0.75rem", fontSize: "0.875rem" }}>Next.js</span>
            <span className="btn btn-outline" style={{ cursor: "default", padding: "0.25rem 0.75rem", fontSize: "0.875rem" }}>SQL</span>
            <span className="btn btn-outline" style={{ cursor: "default", padding: "0.25rem 0.75rem", fontSize: "0.875rem" }}>Analytics</span>
          </div>

          <div style={{ maxWidth: "800px" }}>
            <h2 style={{ marginTop: "3rem" }}>Summary</h2>
            <p>
              A high-performance dashboard for freelance operations, consolidating 
              financial metrics, client status, and task progress into a single view.
            </p>

            <h2 style={{ marginTop: "3rem" }}>Problem</h2>
            <p>
              Managing multiple clients and projects meant searching through 5+ 
              different tools to understand current revenue and pending deadlines.
            </p>

            <h2 style={{ marginTop: "3rem" }}>Solution</h2>
            <p>
              Integrated various APIs into a centralized SQL database with a 
              fast Next.js frontend, providing real-time visibility into the health of all operations.
            </p>
          </div>

          <div style={{ marginTop: "4rem" }}>
            <Link href="/" className="btn btn-primary">
              Back to Homepage
            </Link>
          </div>
        </section>
      </main>

      <footer style={{ marginTop: "4rem" }}>
        <div className="container">
          <p>&copy; {new Date().getFullYear()} Mateo Nahuel Coca</p>
        </div>
      </footer>
    </>
  );
}
