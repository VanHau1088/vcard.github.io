document.addEventListener('DOMContentLoaded', (event) => {
  const queryParams = new URLSearchParams(window.location.search);
  const ssid = queryParams.get('ssid');
  const networkType = queryParams.get('networkType');
  const password = queryParams.get('password');
  
  if (ssid) {
    document.getElementById('ssid').textContent = ssid;
  }

  if (networkType) {
    document.getElementById('networkType').textContent = networkType;
  }

  if (password) {
    document.getElementById('password').textContent = password;
  }
});
