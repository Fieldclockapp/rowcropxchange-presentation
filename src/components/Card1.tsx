export function Card1() {
  return (
    <div className="card-container fade-in">
      <div className="card-content">
        <h1 style={{ textAlign: 'center' }}>DIY vs Professional Farm Websites</h1>

        <table className="comparison-table" style={{ marginTop: '30px' }}>
          <thead>
            <tr>
              <th>Feature</th>
              <th className="diy-cell">DIY Amateur Farm Website</th>
              <th className="pro-cell">RowCropXchange Professional</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ fontWeight: '600', color: 'var(--dark-green)' }}>Design Quality</td>
              <td className="diy-cell"><span className="xmark">✗</span> Generic & Dated</td>
              <td className="pro-cell"><span className="checkmark">✓</span> Modern & Polished</td>
            </tr>
            <tr>
              <td style={{ fontWeight: '600', color: 'var(--dark-green)' }}>Loading Speed</td>
              <td className="diy-cell"><span className="xmark">✗</span> Slow & Heavy</td>
              <td className="pro-cell"><span className="checkmark">✓</span> Lightning Fast</td>
            </tr>
            <tr>
              <td style={{ fontWeight: '600', color: 'var(--dark-green)' }}>Trust Signals</td>
              <td className="diy-cell"><span className="xmark">✗</span> None Visible</td>
              <td className="pro-cell"><span className="checkmark">✓</span> Reviews & Proof</td>
            </tr>
            <tr>
              <td style={{ fontWeight: '600', color: 'var(--dark-green)' }}>Mobile Responsive</td>
              <td className="diy-cell"><span className="xmark">✗</span> Broken Layout</td>
              <td className="pro-cell"><span className="checkmark">✓</span> Perfect on All Devices</td>
            </tr>
            <tr>
              <td style={{ fontWeight: '600', color: 'var(--dark-green)' }}>SEO Optimization</td>
              <td className="diy-cell"><span className="xmark">✗</span> Invisible to Google</td>
              <td className="pro-cell"><span className="checkmark">✓</span> Ranks for Keywords</td>
            </tr>
            <tr>
              <td style={{ fontWeight: '600', color: 'var(--dark-green)' }}>Lead Capture</td>
              <td className="diy-cell"><span className="xmark">✗</span> Contact Form Only</td>
              <td className="pro-cell"><span className="checkmark">✓</span> Multi-Channel Funnels</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
