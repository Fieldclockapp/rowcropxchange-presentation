export function Card6() {
  const timeline = [
    {
      week: 'Week 1: Planning & Design',
      color: 'var(--dark-green)',
      items: [
        'Postcard template design finalized',
        'QR code generation & SMS setup',
        'Print job to vendor',
      ],
    },
    {
      week: 'Week 2: Mail & SMS Launch',
      color: 'var(--gold)',
      items: [
        '20-card postcard drop to test audience',
        'SMS campaign automated sequences',
        'Facebook ad targeting configured',
      ],
    },
    {
      week: 'Week 3: Lead Flow Begins',
      color: 'var(--light-green)',
      items: [
        'First responses arriving via QR',
        'SMS opens & click tracking live',
        'Landing page conversion monitoring',
      ],
    },
    {
      week: 'Week 4: Scale & Reporting',
      color: 'var(--dark-green)',
      items: [
        'Full 500+ card drop to validated audience',
        'Multi-channel attribution analysis',
        'Cost-per-lead metrics finalized',
      ],
    },
  ];

  return (
    <div className="card-container fade-in">
      <div className="card-content">
        <h1 style={{ textAlign: 'center', marginBottom: '40px' }}>30-Day Campaign Timeline</h1>

        <div className="timeline">
          {timeline.map((item, index) => (
            <div key={index} className="timeline-item" style={{ borderLeftColor: item.color }}>
              <div className="timeline-week" style={{ color: item.color }}>
                {item.week}
              </div>
              <ul className="timeline-content">
                {item.items.map((task, taskIndex) => (
                  <li key={taskIndex}>{task}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div style={{ marginTop: '40px', padding: '25px', backgroundColor: 'rgba(15, 61, 31, 0.08)', borderRadius: '8px', textAlign: 'center' }}>
          <p style={{ fontSize: '1.1rem', color: 'var(--dark-green)', fontWeight: '600' }}>
            Expected First Qualified Lead: <span style={{ color: 'var(--gold)' }}>Day 15-21</span>
          </p>
          <p style={{ fontSize: '0.95rem', color: '#666', marginTop: '8px' }}>
            Full campaign results & ROI analysis ready: Day 30
          </p>
        </div>
      </div>
    </div>
  );
}
