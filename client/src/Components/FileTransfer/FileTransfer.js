import './FileTransfer.css';

function FileTransfer() {

    return (
    <div className="file-transfer">
      <svg  className="files playground-icon" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="20" height="20" rx="4" fill="#2C3E50"/>
        <rect width="12" height="2" rx="1" transform="matrix(0 1 1 0 9 1.59998)" fill="#ECF0F1"/>
        <rect x="3" y="15" width="14" height="2" rx="1" fill="#ECF0F1"/>
        <rect width="8.28664" height="2" rx="1" transform="matrix(0.707107 -0.707107 -0.707107 -0.707107 10 14)" fill="#ECF0F1"/>
        <rect x="10" y="14" width="8.28664" height="2" rx="1" transform="rotate(-135 10 14)" fill="#ECF0F1"/>
      </svg>

      <svg  className="files playground-icon" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="20" height="20" rx="4" fill="#2C3E50"/>
        <rect x="9" y="14" width="12" height="2" rx="1" transform="rotate(-90 9 14)" fill="#ECF0F1"/>
        <rect x="3" y="15" width="14" height="2" rx="1" fill="#ECF0F1"/>
        <rect x="10" y="1.59998" width="8.28664" height="2" rx="1" transform="rotate(45 10 1.59998)" fill="#ECF0F1"/>
        <rect width="8.28664" height="2" rx="1" transform="matrix(-0.707107 0.707107 0.707107 0.707107 10 1.59998)" fill="#ECF0F1"/>
      </svg>
    </div>
  );
}

export default FileTransfer;
