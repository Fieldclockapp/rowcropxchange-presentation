export function Card9() {
  return (
    <div className="card-container fade-in">
      <div className="card-content">
        <h1 style={{ textAlign: 'center', marginBottom: '40px' }}>Landing Page Preview</h1>

        <div
          style={{
            background: 'linear-gradient(135deg, var(--dark-green) 0%, var(--gold) 100%)',
            padding: '50px',
            borderRadius: '8px',
            color: 'white',
            marginBottom: '30px',
            textAlign: 'center',
          }}
        >
          <h2 style={{ color: 'white', marginBottom: '15px' }}>RowCropXchange</h2>
          <p style={{ color: 'rgba(255,255,255,0.95)', fontSize: '1.3rem', lineHeight: '1.5' }}>
            Connect with equipment owners. Scale your farm without the debt.
          </p>
        </div>

        <div className="chart-container" style={{ marginBottom: '30px' }}>
          <h3 style={{ marginBottom: '25px' }}>Why Growers Choose RowCropXchange</h3>
          <table
            style={{
              width: '100%',
              borderCollapse: 'collapse',
            }}
          >
            <thead>
              <tr style={{ borderBottom: '2px solid var(--gold)' }}>
                <th style={{ textAlign: 'left', padding: '15px', fontWeight: '600', color: 'var(--dark-green)' }}>
                  The Problem
                </th>
                <th style={{ textAlign: 'left', padding: '15px', fontWeight: '600', color: 'var(--dark-green)' }}>
                  The Solution
                </th>
              </tr>
            </thead>
            <tbody>
              <tr style={{ borderBottom: '1px solid var(--light-gray)' }}>
                <td style={{ padding: '15px', color: '#999' }}>High equipment costs limit growth</td>
                <td style={{ padding: '15px', fontWeight: '500', color: 'var(--light-green)' }}>
                  Access equipment at 60% of ownership cost
                </td>
              </tr>
              <tr style={{ borderBottom: '1px solid var(--light-gray)', backgroundColor: '#fafaf8' }}>
                <td style={{ padding: '15px', color: '#999' }}>Can't find reliable equipment owners</td>
                <td style={{ padding: '15px', fontWeight: '500', color: 'var(--light-green)' }}>
                  Network of vetted, local equipment suppliers
                </td>
              </tr>
              <tr style={{ borderBottom: '1px solid var(--light-gray)' }}>
                <td style={{ padding: '15px', color: '#999' }}>Seasonal demand = idle equipment</td>
                <td style={{ padding: '15px', fontWeight: '500', color: 'var(--light-green)' }}>
                  Maximize ROI by leasing equipment year-round
                </td>
              </tr>
              <tr>
                <td style={{ padding: '15px', color: '#999' }}>No marketplace for farm services</td>
                <td style={{ padding: '15px', fontWeight: '500', color: 'var(--light-green)' }}>
                  One-stop platform for all equipment needs
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="testimonial">
          <div className="quote-mark">"</div>
          <div className="quote-text">
            RowCropXchange saved us $45,000 in equipment purchases in just one season. We now rent equipment as needed instead of carrying debt.
          </div>
          <div className="quote-author">John Doe, Corn & Soybean Farmer</div>
          <div className="quote-author">Southern Minnesota</div>
          <div className="quote-stars">★★★★★</div>
        </div>
      </div>
    </div>
  );
}
