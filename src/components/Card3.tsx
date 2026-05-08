export function Card3() {
  const paths = [
    { icon: '📮', label: 'Postcard QR', benefit: 'Tangible lead magnet with trackable response' },
    { icon: '💬', label: 'SMS Campaign', benefit: 'Instant engagement on mobile devices' },
    { icon: '👥', label: 'Facebook Ads', benefit: 'Demographic targeting + interest bundles' },
    { icon: '🤝', label: 'Farm Associations', benefit: 'Trusted referrals & partnerships' },
  ];

  return (
    <div className="card-container fade-in">
      <div className="card-content">
        <h1 style={{ textAlign: 'center', marginBottom: '40px' }}>Three Paths to High-Value Growers</h1>

        <div className="flow-container">
          {paths.map((path, index) => (
            <div key={index}>
              <div className="flow-item">
                <div className="flow-icon">{path.icon}</div>
                <div className="flow-title">{path.label}</div>
                <div className="flow-subtitle">{path.benefit}</div>
              </div>
              {index < paths.length - 1 && <div className="flow-arrow">→</div>}
            </div>
          ))}
        </div>

        <p style={{ textAlign: 'center', marginTop: '40px', fontSize: '1.1rem', color: '#666' }}>
          Each path is independently trackable • Combine for maximum conversion rate
        </p>
      </div>
    </div>
  );
}
