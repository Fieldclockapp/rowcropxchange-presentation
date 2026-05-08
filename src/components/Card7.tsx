export function Card7() {
  return (
    <div className="card-container fade-in">
      <div className="card-content">
        <h1 style={{ textAlign: 'center', marginBottom: '40px' }}>Analytics Dashboard</h1>

        <div className="dashboard-container">
          <div className="kpi-grid">
            <div className="kpi-box">
              <div className="kpi-label">Attribution by Channel</div>
              <div className="kpi-value">Postcard</div>
              <div style={{ fontSize: '0.85rem', opacity: 0.8, marginTop: '5px' }}>52% of leads</div>
            </div>
            <div className="kpi-box">
              <div className="kpi-label">Cost Per Lead</div>
              <div className="kpi-value">$254</div>
              <div style={{ fontSize: '0.85rem', opacity: 0.8, marginTop: '5px' }}>Validated benchmark</div>
            </div>
            <div className="kpi-box">
              <div className="kpi-label">Conversion Rate</div>
              <div className="kpi-value">3.2%</div>
              <div style={{ fontSize: '0.85rem', opacity: 0.8, marginTop: '5px' }}>Landing → Signup</div>
            </div>
          </div>

          <div className="chart-placeholder">
            <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px' }}>
              <div style={{ fontSize: '1.1rem', opacity: 0.9 }}>Lead Volume Over 4 Weeks</div>
              <div className="chart-bars">
                <div className="chart-bar" style={{ height: '30%' }}>
                  <div className="chart-bar-label">W1</div>
                </div>
                <div className="chart-bar" style={{ height: '55%' }}>
                  <div className="chart-bar-label">W2</div>
                </div>
                <div className="chart-bar" style={{ height: '85%' }}>
                  <div className="chart-bar-label">W3</div>
                </div>
                <div className="chart-bar" style={{ height: '100%' }}>
                  <div className="chart-bar-label">W4</div>
                </div>
              </div>
            </div>
          </div>

          <div style={{ marginTop: '25px', padding: '20px', backgroundColor: 'rgba(255, 255, 255, 0.1)', borderRadius: '6px', textAlign: 'center' }}>
            <div style={{ opacity: 0.9, fontSize: '0.95rem' }}>
              Total Leads Captured: <span style={{ color: 'var(--gold)', fontWeight: '700', fontSize: '1.2rem' }}>47</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
