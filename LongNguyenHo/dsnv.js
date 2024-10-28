const employees = [
    {
        name: "Hồ Nguyên Long",
        position: "",
        phone: "",
        email: "",
        status: ""
    },
    {
        name: "Ngô Xuân Lộc",
        position: "",
        phone: "",
        email: "",
        status: ""
    },
    {
        name: "Đinh Văn Điệp",
        position: "",
        phone: "",
        email: "",
        status: ""
    },
    {
        name: "Hoàng Bá Ngọc",
        position: "",
        phone: "",
        email: "",
        status: ""
    },
    {
        name: "Nguyễn Phúc Hiếu",
        position: "",
        phone: "",
        email: "",
        status: ""
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