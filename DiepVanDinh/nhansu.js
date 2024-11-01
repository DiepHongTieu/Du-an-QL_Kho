// Hàm để lấy thời gian hiện tại dưới dạng định dạng ngày/giờ
function getCurrentTime() {
    const now = new Date();
    const day = String(now.getDate()).padStart(2, '0');
    const month = String(now.getMonth() + 1).padStart(2, '0'); // Tháng bắt đầu từ 0
    const year = now.getFullYear();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    return `${day}/${month}/${year} ${hours}:${minutes}`;
}

// Hàm để chấm công khi bấm nút "Chấm Công"
function checkIn() {
    // Lấy phần tử select trong form chấm công
    const attendanceForm = document.getElementById("attendance-form");
    const employeeSelect = attendanceForm.querySelector("select"); // Lấy phần tử <select> trong form

    const selectedEmployee = employeeSelect.value; // Lấy giá trị của nhân viên đã chọn

    if (selectedEmployee) {
        const checkInTime = getCurrentTime(); // Lấy thời gian chấm công hiện tại

        // Tạo một hàng mới trong bảng lịch sử chấm công
        const attendanceTable = document.getElementById("attendance-body");
        const newRow = attendanceTable.insertRow();

        // Tạo ô cho tên nhân viên và thời gian chấm công
        const nameCell = newRow.insertCell(0);
        const timeCell = newRow.insertCell(1);
        nameCell.textContent = selectedEmployee;
        timeCell.textContent = checkInTime;

        // Hiển thị thông báo chấm công thành công
        alert(`Chấm công thành công cho ${selectedEmployee} lúc ${checkInTime}`);
    } else {
        alert("Vui lòng chọn một nhân viên để chấm công.");
    }
}
