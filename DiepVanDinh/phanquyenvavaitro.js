const roles = [];

// Hàm phân quyền cho nhân viên
function assignRole() {
    const employeeName = document.getElementById("employee-name").value;
    const role = document.getElementById("role").value;

    // Kiểm tra xem nhân viên đã được phân quyền chưa
    const existingRole = roles.find(r => r.name === employeeName);
    
    if (existingRole) {
        // Cập nhật vai trò nếu đã tồn tại
        existingRole.role = role;
    } else {
        // Thêm mới nếu chưa có
        roles.push({ name: employeeName, role: role });
    }

    // Cập nhật hiển thị bảng vai trò
    updateRoleTable();
}

// Hàm cập nhật bảng vai trò
function updateRoleTable() {
    const roleBody = document.getElementById("role-body");
    roleBody.innerHTML = ""; // Xóa nội dung cũ

    // Lặp qua danh sách vai trò và hiển thị
    roles.forEach(r => {
        const row = document.createElement("tr");

        const nameCell = document.createElement("td");
        nameCell.textContent = r.name;

        const roleCell = document.createElement("td");
        roleCell.textContent = r.role;

        row.appendChild(nameCell);
        row.appendChild(roleCell);
        roleBody.appendChild(row);
    });
}