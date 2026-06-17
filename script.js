document.addEventListener("DOMContentLoaded", () => {
    
    const menuItems = document.querySelectorAll(".menu-item");
    
    menuItems.forEach(item => {
        item.addEventListener("click", function(e) {
            // Nếu click trúng Đăng xuất thì bỏ qua không thay class hoạt động
            if (this.parentElement.classList.contains('logout')) return;

            document.querySelector(".menu-item.active")?.classList.remove("active");
            this.classList.add("active");
        });
    });

    const searchInput = document.querySelector(".search-box input");
    const rows = document.querySelectorAll(".grid-row:not(.table-header)");

    searchInput.addEventListener("input", (e) => {
        const value = e.target.value.toLowerCase().trim();

        rows.forEach(row => {
            const cells = row.querySelectorAll(".grid-cell");
            const studentId = cells[1].textContent.toLowerCase();
            const studentName = cells[2].textContent.toLowerCase();

             if (studentName.includes(value) || studentId.includes(value)) {
                row.style.setProperty("display", "grid", "important");
            } else {
                row.style.setProperty("display", "none", "important");
            }
        });
    });

    const headerCheckbox = document.getElementById("select-all");
    const rowCheckboxes = document.querySelectorAll(".row-checkbox");

    if (headerCheckbox) {
        headerCheckbox.addEventListener("change", function() {
            rowCheckboxes.forEach(checkbox => {
                checkbox.checked = this.checked;
            });
        });
    }
});