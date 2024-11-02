const employees = [
    {
        name: "Hồ Nguyên Long",
        position: "thành viên",
        phone: "0944126799",
        email: "long231220828@lms.utc.edu.vn",
        status: "đang công tác"
    },
    {
        name: "Ngô Xuân Lộc",
        position: "quản lý",
        phone: "0363019293",
        email: "ngoxuanloc1010@gmail.com",
        status: "đang làm"
    },
    {
        name: "Đinh Văn Điệp",
        position: "thành viên",
        phone: "0231312123",
        email: "DiepHongTieu@gmail.com",
        status: "đang làm"
    },
    {
        name: "Hoàng Bá Ngọc",
        position: "thành viên",
        phone: "0123123123",
        email: "ngoc231230124@lms.utc.edu.vn",
        status: "đang công tác"
    },
    {
        name: "Nguyễn Phúc Hiếu",
        position: "thành viên",
        phone: "0966598528",
        email: "nguyenphuchieu@gmail.com",
        status: "đang công tác"
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