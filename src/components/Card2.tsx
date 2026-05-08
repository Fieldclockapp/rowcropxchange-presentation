export function Card2() {
  const states = [
    { label: 'MN', acres: 2100 },
    { label: 'IA', acres: 1800 },
    { label: 'WI', acres: 950 },
    { label: 'IL', acres: 1200 },
    { label: 'MO', acres: 850 },
    { label: 'TN', acres: 400 },
    { label: 'NE', acres: 200 },
  ];

  const maxAcres = Math.max(...states.map(s => s.acres));

  return (
    <div className="card-container fade-in">
      <div className="card-content">
        <div>
          <h1 style={{ textAlign: 'center', marginBottom: '10px' }}>7,500+ Acre Grower Network</h1>
          <p style={{ textAlign: 'center', fontSize: '1.1rem', color: '#666', marginBottom: '30px' }}>
            Proven distribution across the Midwest
          </p>
        </div>

        <div className="chart-container">
          <div className="bar-chart">
            {states.map((state) => {
              const percentage = (state.acres / maxAcres) * 100;
              return (
                <div key={state.label} className="bar-row">
                  <div className="bar-label">{state.label}</div>
                  <div className="bar-background">
                    <div className="bar-fill" style={{ width: `${percentage}%` }}>
                      <span className="bar-value">{state.acres.toLocaleString()} acres</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div style={{ marginTop: '40px', textAlign: 'center', paddingTop: '20px', borderTop: '1px solid var(--light-gray)' }}>
            <p style={{ fontSize: '1.3rem', fontWeight: '700', color: 'var(--dark-green)' }}>
              Total Network: <span style={{ color: 'var(--gold)' }}>7,500+ acres</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
