const employees = [
    {
        name: "Hồ Nguyên Long",
        position: "con",
        phone: "",
        email: "longngu123@gmail.com",
        status: "đang thẩm"
    },
    {
        name: "Ngô Xuân Lộc",
        position: "bố",
        phone: "0363019293",
        email: "ngoxuanloc1010@gmai.com",
        status: "đang thẩm"
    },
    {
        name: "Đinh Văn Điệp",
        position: "con",
        phone: "0968244212",
        email: "DiepHongTieu@gmai.com",
        status: "đang thẩm"
    },
    {
        name: "Hoàng Bá Ngọc",
        position: "con",
        phone: "0936904325",
        email: "contao@gmai.com",
        status: "đang thẩm"
    },
    {
        name: "Nguyễn Phúc Hiếu",
        position: "con",
        phone: "0966598528",
        email: "abcxyz@gmai.com",
        status: "đang thẩm"
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