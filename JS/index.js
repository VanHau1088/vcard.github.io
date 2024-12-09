document.addEventListener('DOMContentLoaded', (event) => {
  const queryParams = new URLSearchParams(window.location.search);
  const fullName = queryParams.get('fullName');
  const phoneNumber = queryParams.get('phoneNumber');
  const email = queryParams.get('email');
  const address = queryParams.get('address');
  const profileImage = queryParams.get('profileImage');
  const website = queryParams.get('website');
  const job = queryParams.get('job');

  if (fullName) {
    document.getElementById('fullName').textContent = fullName;
  }

  if (phoneNumber) {
    document.getElementById('phoneNumber').textContent = phoneNumber;
  }

  if (email) {
    document.getElementById('email').textContent = email;
  }

  if (address) {
    document.getElementById('address').textContent = address;
  }

  if (profileImage) {
    const imageElement = document.getElementById('profileImage');
    imageElement.src = profileImage;
    imageElement.style.display = 'block';
  }

  if (website) {
    document.getElementById('website').textContent = website;
  }

  if (job) {
    document.getElementById('job').textContent = job;
  }
});
