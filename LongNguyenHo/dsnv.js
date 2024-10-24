const employees = [
    {
        name: "Nguyễn Văn A",
        position: "Quản lý kho",
        phone: "0123456789",
        email: "nguyenvana@example.com",
        status: "Đang làm việc"
    },
    {
        name: "Trần Thị B",
        position: "Nhân viên kiểm kho",
        phone: "0987654321",
        email: "tranthib@example.com",
        status: "Nghỉ phép"
    },
    {
        name: "Phạm Văn C",
        position: "Nhân viên giao nhận",
        phone: "0912345678",
        email: "phamvanc@example.com",
        status: "Đang làm việc"
    }
];

// Hàm để hiển thị danh sách nhân viên trong bảng
function loadEmployeeData() {
    const employeeBody = document.getElementById("employee-body");

    employees.forEach(employee => {
        // Tạo một dòng mới cho mỗi nhân viên
        const row = document.createElement("tr");

        // Tạo các ô và chèn dữ liệu
        for (let key in employee) {
            const cell = document.createElement("td");
            cell.textContent = employee[key];
            row.appendChild(cell);
        }

        // Thêm dòng vào bảng
        employeeBody.appendChild(row);
    });
}

// Gọi hàm khi trang đã tải xong
window.onload = loadEmployeeData;