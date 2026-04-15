import Link from "next/link";

export default function ResourceManagementProject() {
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
          <h1 style={{ marginTop: "1rem", fontSize: "3rem" }}>Internal Resource Management App</h1>
          
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", margin: "2rem 0" }}>
            <span className="btn btn-outline" style={{ cursor: "default", padding: "0.25rem 0.75rem", fontSize: "0.875rem" }}>Flutter</span>
            <span className="btn btn-outline" style={{ cursor: "default", padding: "0.25rem 0.75rem", fontSize: "0.875rem" }}>Node.js</span>
            <span className="btn btn-outline" style={{ cursor: "default", padding: "0.25rem 0.75rem", fontSize: "0.875rem" }}>PostgreSQL</span>
          </div>

          <div style={{ maxWidth: "800px" }}>
            <h2 style={{ marginTop: "3rem" }}>Summary</h2>
            <p>
              Developed a cross-platform mobile application and backend to manage company 
              resources, assets, and personnel deployment in real-time.
            </p>

            <h2 style={{ marginTop: "3rem" }}>Problem</h2>
            <p>
              Teams in the field were using spreadsheets and WhatsApp to track expensive 
              shared equipment, leading to lost assets and scheduling conflicts.
            </p>

            <h2 style={{ marginTop: "3rem" }}>Solution</h2>
            <p>
              Built a mobile-first solution with offline capability. Personnel can 
              scan equipment QR codes, check availability, and log usage directly from their phones.
            </p>

            <h2 style={{ marginTop: "3rem" }}>Technical Decisions</h2>
            <p>
              We chose <strong>Flutter</strong> for single-codebase speed and <strong>PostgreSQL</strong> 
              with row-level security for robust data isolation between departments.
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
