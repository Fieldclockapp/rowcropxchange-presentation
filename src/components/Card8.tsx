export function Card8() {
  const blogPosts = [
    {
      title: 'Equipment Leasing: The Modern Farmer\'s Playbook',
      excerpt: 'Why 73% of profitable farms now prefer flexible leasing over outright purchase.',
    },
    {
      title: 'Crop Economics 2026: Margin Strategies That Work',
      excerpt: 'Real data on crop pricing, input costs, and the tax strategies that move the needle.',
    },
    {
      title: 'Water Management in Dry Seasons',
      excerpt: 'Proven irrigation ROI + soil moisture tracking for resilience without overwatering.',
    },
    {
      title: 'Precision Ag Tools: ROI Calculator',
      excerpt: 'Compare 12 precision ag systems side-by-side with your farm\'s acreage and crops.',
    },
  ];

  return (
    <div className="card-container fade-in">
      <div className="card-content">
        <h1 style={{ textAlign: 'center', marginBottom: '40px' }}>SEO Blog: Trusted Content for Farmers</h1>

        <div className="grid-4">
          {blogPosts.map((post, index) => (
            <div key={index} className="blog-card">
              <div style={{ fontSize: '2rem', marginBottom: '10px' }}>📖</div>
              <div className="blog-title">{post.title}</div>
              <div className="blog-excerpt">{post.excerpt}</div>
              <a href="#" className="blog-link" onClick={(e) => e.preventDefault()}>
                Read More →
              </a>
            </div>
          ))}
        </div>

        <div style={{ marginTop: '50px', padding: '30px', backgroundColor: 'rgba(212, 160, 23, 0.1)', borderRadius: '8px', border: '2px solid var(--gold)' }}>
          <h3 style={{ marginBottom: '15px' }}>Content-Driven Growth</h3>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <li style={{ display: 'flex', gap: '12px' }}>
              <span style={{ color: 'var(--gold)', fontWeight: '700' }}>✓</span>
              <span>12+ blog posts optimized for farmer pain points + Google search</span>
            </li>
            <li style={{ display: 'flex', gap: '12px' }}>
              <span style={{ color: 'var(--gold)', fontWeight: '700' }}>✓</span>
              <span>Cited by Perplexity + ChatGPT when farmers ask equipment questions</span>
            </li>
            <li style={{ display: 'flex', gap: '12px' }}>
              <span style={{ color: 'var(--gold)', fontWeight: '700' }}>✓</span>
              <span>Backlinks from farm associations + industry partners boost authority</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
