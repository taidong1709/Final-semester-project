window.onload = async function onLoad() {
    // Kiểm tra đã đăng nhập hay chưa.
    let currentAccount = JSON.parse(localStorage.getItem("currentUser") || "{}");
    let currentStatus = -1;
    let storage = JSON.parse(localStorage.getItem("accountData") || "[]");

    currentStatus = storage.findIndex(v => v.username === currentAccount.username && v.password === currentAccount.password);
    console.log(currentStatus, currentAccount, storage)
    if (currentStatus + 1) {
        document.getElementById("login-logout-child").innerHTML = "Đăng xuất";
    }
    let objCurrAcc = (storage[currentStatus] || {});
    document.getElementById("currentName").innerHTML = currentStatus + 1 ? `Xin chào ${objCurrAcc.firstname}` : "";

    document.getElementById("login-logout").onclick = async function loginOrLogout(e) {
        e.preventDefault();
        // Đăng nhập.
        if (currentStatus === -1) return window.location.href = "login.html";
        
        // Đăng xuất.
        localStorage.removeItem("currentUser");
        currentStatus = -1;
        currentAccount = {};
        document.getElementById("login-logout-child").innerHTML = "Đăng nhập";
    }
}