const attendanceRecords = [];

// Hàm chấm công
function checkIn() {
    const employeeName = document.getElementById("employee-name").value;
    const currentTime = new Date().toLocaleString();

    // Thêm dữ liệu chấm công vào mảng
    attendanceRecords.push({ name: employeeName, time: currentTime });

    // Cập nhật bảng chấm công
    updateAttendanceTable();
}

// Hàm cập nhật bảng chấm công
function updateAttendanceTable() {
    const attendanceBody = document.getElementById("attendance-body");
    attendanceBody.innerHTML = ""; // Xóa nội dung cũ

    // Lặp qua danh sách chấm công và hiển thị
    attendanceRecords.forEach(record => {
        const row = document.createElement("tr");

        const nameCell = document.createElement("td");
        nameCell.textContent = record.name;

        const timeCell = document.createElement("td");
        timeCell.textContent = record.time;

        row.appendChild(nameCell);
        row.appendChild(timeCell);
        attendanceBody.appendChild(row);
    });
}