// Xử lý sự kiện khi người dùng gửi biểu mẫu
document.getElementById('domesticForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Ngăn chặn gửi biểu mẫu mặc định

    // Lấy giá trị từ biểu mẫu
    let customerCode = document.getElementById('customerCode').value;
    let fullname = document.getElementById('fullname').value;
    let contactNumber = document.getElementById('contactNumber').value;
    let gmail = document.getElementById('gmail').value;
    let address = document.getElementById('address').value;
    let deliveryDate = document.getElementById('deliveryDate').value;

    // Kiểm tra xem các trường có trống hay không
    if (!customerCode || !fullname || !contactNumber || !gmail || !address || !deliveryDate) {
        alert('Please fill in all fields.');
        return;
    }

    // Kiểm tra định dạng email
    if (!validateEmail(gmail)) {
        alert('Please enter a valid email address.');
        return;
    }

    // In ra console để kiểm tra dữ liệu
    console.log("Customer Code: " + customerCode);
    console.log("Full Name: " + fullname);
    console.log("Contact Number: " + contactNumber);
    console.log("Gmail: " + gmail);
    console.log("Address: " + address);
    console.log("Delivery Date: " + deliveryDate);

    // Xử lý thêm khi cần thiết, như gửi dữ liệu tới server
    alert('Form submitted successfully!');
});

// Hàm kiểm tra định dạng email
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}
