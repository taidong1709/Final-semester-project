window.onload = async function onLoad() {
    document.getElementById("loginform").onsubmit = async function onSubmit(e) {
        e.preventDefault();
        let target = e.target;
        let username = target[0].value;
        let password = target[1].value;

        /** @type {Array<>} */
        let storage = JSON.parse(localStorage.getItem("accountData") || "[]");

        let accountID = storage.findIndex(account => account.username === username && account.password === password);
        if (accountID + 1) {
            // Đã tìm thấy tài khoản
            localStorage.setItem("currentUser", JSON.stringify({ username, password }));
            document.getElementById("errorMsg").innerHTML = "<b style='color: darkgreen'>Đăng nhập thành công! Chuyển hướng sau 3s...</b>";
            await new Promise(r => setTimeout(r, 3000));
            window.location.href = "index.html";
        } else {
            // Không tìm thấy tài khoản
            document.getElementById("errorMsg").innerHTML = "<b style='color: red'>Tên đăng nhập hoặc mật khẩu không đúng.</b>";
            document.getElementById("errorMsg").animate([
                { opacity: 1 },
                { opacity: 0 }
            ], {
                duration: 2000,
                delay: 2000
            });
            await new Promise(r => setTimeout(r, 4000));
            document.getElementById("errorMsg").innerHTML = "";
        }
    }
}