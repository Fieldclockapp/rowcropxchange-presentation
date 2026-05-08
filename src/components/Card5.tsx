export function Card5() {
  return (
    <div className="card-container fade-in">
      <div className="card-content">
        <h1 style={{ textAlign: 'center', marginBottom: '50px' }}>AI Discovery: Search → Citation → Landing Page</h1>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr auto 1fr auto 1fr', alignItems: 'center', gap: '20px', marginBottom: '50px' }}>
          <div className="stat-card">
            <div style={{ fontSize: '2.5rem', marginBottom: '15px' }}>🔍</div>
            <div style={{ fontSize: '0.95rem', fontWeight: '600', color: 'var(--dark-green)', marginBottom: '10px' }}>Farmer Searches:</div>
            <div style={{ fontSize: '1.05rem', color: 'var(--dark-gray)', lineHeight: '1.5' }}>
              "Equipment rental near me"
            </div>
          </div>

          <div style={{ fontSize: '2rem', color: 'var(--gold)' }}>→</div>

          <div className="stat-card" style={{ backgroundColor: '#f9f7f3', borderLeft: '5px solid var(--gold)' }}>
            <div style={{ fontSize: '2.5rem', marginBottom: '15px' }}>✨</div>
            <div style={{ fontSize: '0.95rem', fontWeight: '600', color: 'var(--dark-green)', marginBottom: '10px' }}>Perplexity Result:</div>
            <div style={{ fontSize: '0.95rem', color: 'var(--dark-gray)' }}>
              "RowCropXchange streamlines..." <span style={{ color: 'var(--gold)', fontWeight: '600' }}>Visit site</span>
            </div>
          </div>

          <div style={{ fontSize: '2rem', color: 'var(--gold)' }}>→</div>

          <div className="stat-card">
            <div style={{ fontSize: '2.5rem', marginBottom: '15px' }}>📱</div>
            <div style={{ fontSize: '0.95rem', fontWeight: '600', color: 'var(--dark-green)', marginBottom: '10px' }}>Landing Page</div>
            <div style={{ fontSize: '0.95rem', color: 'var(--dark-gray)' }}>
              High-converting signup form
            </div>
          </div>
        </div>

        <div style={{ padding: '40px', backgroundColor: 'rgba(212, 160, 23, 0.1)', borderRadius: '8px', border: '2px solid var(--gold)' }}>
          <h3 style={{ marginBottom: '20px', color: 'var(--dark-green)' }}>Daily AI Citation Opportunities</h3>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '15px' }}>
            <li style={{ display: 'flex', gap: '15px', alignItems: 'flex-start' }}>
              <span style={{ fontSize: '1.3rem' }}>✓</span>
              <div>
                <div style={{ fontWeight: '600', color: 'var(--dark-green)' }}>Perplexity AI</div>
                <div style={{ color: '#666', fontSize: '0.95rem' }}>Multiple daily farmer searches + citations in AI-generated answers</div>
              </div>
            </li>
            <li style={{ display: 'flex', gap: '15px', alignItems: 'flex-start' }}>
              <span style={{ fontSize: '1.3rem' }}>✓</span>
              <div>
                <div style={{ fontWeight: '600', color: 'var(--dark-green)' }}>ChatGPT Search</div>
                <div style={{ color: '#666', fontSize: '0.95rem' }}>GPT-4 browsing sees fresh content + links to RowCropXchange</div>
              </div>
            </li>
            <li style={{ display: 'flex', gap: '15px', alignItems: 'flex-start' }}>
              <span style={{ fontSize: '1.3rem' }}>✓</span>
              <div>
                <div style={{ fontWeight: '600', color: 'var(--dark-green)' }}>Google AI Overviews</div>
                <div style={{ color: '#666', fontSize: '0.95rem' }}>SERP integration with backlinks → organic citation credits</div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
