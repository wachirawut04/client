import './DownloadLink.css';

function DownloadLinks() {
  return (
    <div style={{ textAlign: 'right', padding: '8px' }}>
      <a
        href="http://localhost:3001/api/export/json"
        target="_blank"
        rel="noopener noreferrer"
        style={{ marginRight: '12px' }}
      >
        Download JSON
      </a>
      <a
        href="http://localhost:3001/api/export/csv"
        target="_blank"
        rel="noopener noreferrer"
      >
        Download CSV
      </a>
    </div>
  );
}

export default DownloadLinks;
