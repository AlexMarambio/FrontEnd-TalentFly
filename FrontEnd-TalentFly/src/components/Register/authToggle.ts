export function initAuthToggle() {
    const container = document.getElementById('container');
    const registerBtn = document.getElementById('registerBtn');
    const loginBtn = document.getElementById('loginBtn');
  
    if (container && registerBtn && loginBtn) {
      registerBtn.addEventListener('click', () => {
        container.classList.add('active');
      });
  
      loginBtn.addEventListener('click', () => {
        container.classList.remove('active');
      });
    } else {
      console.error('One or more elements not found');
    }
  }
  