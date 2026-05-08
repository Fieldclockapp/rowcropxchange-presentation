export function Card10() {
  return (
    <div className="card-container fade-in">
      <div className="card-content">
        <h1 style={{ textAlign: 'center', marginBottom: '50px' }}>The RowCropXchange Difference</h1>

        <div className="comparison-grid">
          <div className="comparison-section without-section">
            <h3 className="section-title without-title">❌ Without RowCropXchange</h3>
            <ul className="comparison-list">
              <li>
                <span className="comparison-icon xmark">✗</span>
                <span>Blank equipment applications from farmers</span>
              </li>
              <li>
                <span className="comparison-icon xmark">✗</span>
                <span>Organic lead generation only (slow + expensive)</span>
              </li>
              <li>
                <span className="comparison-icon xmark">✗</span>
                <span>$0 predictable lead cost</span>
              </li>
              <li>
                <span className="comparison-icon xmark">✗</span>
                <span>3–6 month sales cycles</span>
              </li>
              <li>
                <span className="comparison-icon xmark">✗</span>
                <span>No multi-channel attribution</span>
              </li>
              <li>
                <span className="comparison-icon xmark">✗</span>
                <span>Equipment sits idle in off-season</span>
              </li>
            </ul>
          </div>

          <div className="comparison-section with-section">
            <h3 className="section-title with-title">✅ With RowCropXchange</h3>
            <ul className="comparison-list">
              <li>
                <span className="comparison-icon checkmark">✓</span>
                <span>500+ qualified farmer applications per cycle</span>
              </li>
              <li>
                <span className="comparison-icon checkmark">✓</span>
                <span>Multi-channel campaigns (postcard + SMS + Facebook + AI)</span>
              </li>
              <li>
                <span className="comparison-icon checkmark">✓</span>
                <span>$254 predictable cost per lead</span>
              </li>
              <li>
                <span className="comparison-icon checkmark">✓</span>
                <span>4–8 week sales cycles</span>
              </li>
              <li>
                <span className="comparison-icon checkmark">✓</span>
                <span>Real-time multi-channel attribution dashboard</span>
              </li>
              <li>
                <span className="comparison-icon checkmark">✓</span>
                <span>Year-round passive income from equipment leasing</span>
              </li>
            </ul>
          </div>
        </div>

        <div style={{ marginTop: '50px', padding: '30px', backgroundColor: 'rgba(212, 160, 23, 0.1)', borderRadius: '8px', border: '2px solid var(--gold)', textAlign: 'center' }}>
          <h3 style={{ marginBottom: '15px' }}>Ready to Scale?</h3>
          <p style={{ fontSize: '1.1rem', color: 'var(--dark-gray)', lineHeight: '1.6' }}>
            First 500 qualified farmers + postcard test results already validate the model. <br />
            <span style={{ fontWeight: '600', color: 'var(--dark-green)' }}>Let's run your campaign.</span>
          </p>
        </div>
      </div>
    </div>
  );
}
