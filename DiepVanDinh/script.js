document.addEventListener('DOMContentLoaded', function() {
    const toggleSwitch = document.getElementById('darkModeToggle');
    const body = document.body;
  
    toggleSwitch.addEventListener('change', function() {
      if (this.checked) {
        body.classList.add('dark-mode');
        localStorage.setItem('darkMode', 'true'); // Lưu trạng thái vào localStorage
      } else {
        body.classList.remove('dark-mode');
        localStorage.removeItem('darkMode'); // Xóa trạng thái khỏi localStorage
      }
    });
  
    // Khôi phục trạng thái từ localStorage khi tải trang
    const darkMode = localStorage.getItem('darkMode');
    if (darkMode === 'true') {
      toggleSwitch.checked = true;
      body.classList.add('dark-mode');
    }
  });