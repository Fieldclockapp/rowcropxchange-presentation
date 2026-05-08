export function Card4() {
  return (
    <div className="card-container fade-in">
      <div className="card-content">
        <h1 style={{ textAlign: 'center', marginBottom: '50px' }}>Postcard Test Results</h1>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '30px' }}>
          <div className="stat-card" style={{ borderTop: '5px solid var(--light-green)' }}>
            <div style={{ fontSize: '0.9rem', color: '#999', marginBottom: '10px' }}>Response Rate</div>
            <div style={{ fontSize: '3.5rem', fontWeight: '700', color: 'var(--light-green)', marginBottom: '10px' }}>
              20%
            </div>
            <div style={{ fontSize: '0.95rem', color: 'var(--dark-gray)' }}>
              4 of 20 cards resulted in qualified leads
            </div>
          </div>

          <div className="stat-card" style={{ borderTop: '5px solid var(--gold)' }}>
            <div style={{ fontSize: '0.9rem', color: '#999', marginBottom: '10px' }}>Cost Per Lead</div>
            <div style={{ fontSize: '3.5rem', fontWeight: '700', color: 'var(--gold)', marginBottom: '10px' }}>
              $254
            </div>
            <div style={{ fontSize: '0.95rem', color: 'var(--dark-gray)' }}>
              Total spend ÷ leads generated
            </div>
          </div>

          <div className="stat-card" style={{ borderTop: '5px solid var(--dark-green)' }}>
            <div style={{ fontSize: '0.9rem', color: '#999', marginBottom: '10px' }}>Time to Response</div>
            <div style={{ fontSize: '3.5rem', fontWeight: '700', color: 'var(--dark-green)', marginBottom: '10px' }}>
              21 days
            </div>
            <div style={{ fontSize: '0.95rem', color: 'var(--dark-gray)' }}>
              Average response time from mail date
            </div>
          </div>
        </div>

        <div style={{ marginTop: '50px', padding: '30px', backgroundColor: 'rgba(15, 61, 31, 0.05)', borderRadius: '8px', border: '2px solid var(--dark-green)' }}>
          <h3 style={{ marginBottom: '15px' }}>Key Insight</h3>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.6', color: 'var(--dark-gray)' }}>
            20% response rate validates the farmer audience quality. At scale across 500+ initial drops, we project <strong>100+ qualified leads per campaign cycle</strong> with predictable $254/lead acquisition cost.
          </p>
        </div>
      </div>
    </div>
  );
}
