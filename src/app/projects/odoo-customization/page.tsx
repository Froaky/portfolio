import Link from "next/link";

export default function OdooProject() {
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
          <h1 style={{ marginTop: "1rem", fontSize: "3rem" }}>Odoo ERP Customization & Integration Hub</h1>
          
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", margin: "2rem 0" }}>
            <span className="btn btn-outline" style={{ cursor: "default", padding: "0.25rem 0.75rem", fontSize: "0.875rem" }}>Python</span>
            <span className="btn btn-outline" style={{ cursor: "default", padding: "0.25rem 0.75rem", fontSize: "0.875rem" }}>Odoo</span>
            <span className="btn btn-outline" style={{ cursor: "default", padding: "0.25rem 0.75rem", fontSize: "0.875rem" }}>PostgreSQL</span>
            <span className="btn btn-outline" style={{ cursor: "default", padding: "0.25rem 0.75rem", fontSize: "0.875rem" }}>REST APIs</span>
          </div>

          <div style={{ maxWidth: "800px" }}>
            <h2 style={{ marginTop: "3rem" }}>Summary</h2>
            <p>
              Designed and implemented a central integration hub within Odoo ERP to automate 
              business-critical operations and connect with external hardware and mobile applications.
            </p>

            <h2 style={{ marginTop: "3rem" }}>Business Context</h2>
            <p>
              The organization was struggling with manual data entry between its field devices 
              and the central ERP. This created massive delays in inventory management and 
              financial reporting. They needed a way to sync data in real-time across the company.
            </p>

            <h2 style={{ marginTop: "3rem" }}>System Architecture</h2>
            <p>
              The system was built as a series of custom Odoo modules that exposed a restricted 
              REST API for field workers. 
            </p>
            <ul style={{ color: "var(--text-muted)", marginLeft: "1.5rem", marginBottom: "1.5rem" }}>
              <li><strong>Core:</strong> Custom Python logic extending Odoo models.</li>
              <li><strong>Database:</strong> Optimized PostgreSQL indexing for high-frequency writes from field devices.</li>
              <li><strong>Integration:</strong> Webhook-based alerts for external task routing.</li>
            </ul>

            <h2 style={{ marginTop: "3rem" }}>Technical Decisions & Tradeoffs</h2>
            <p>
              We chose to build <strong>inside Odoo</strong> instead of a standalone middleware 
              to maintain single-source-of-truth integrity, despite the increased complexity of 
              Odoo's ORM for certain high-load operations.
            </p>

            <h2 style={{ marginTop: "3rem" }}>Outcome</h2>
            <p>
              Successfully reduced manual synchronization time from 4 hours daily to under 5 minutes. 
              The system currently handles thousands of automated status transitions per day with 
              zero data loss reported in the first year of production.
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
