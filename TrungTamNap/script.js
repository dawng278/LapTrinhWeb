const formInputs = document.querySelectorAll('.form-next input');
const formLabels = document.querySelectorAll('.form-next label');   

    document.getElementById('open-login').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('login-modal').style.display = 'block';
    document.getElementById('overlay').style.display = 'block';
});

// Show the registration modal and overlay when "Đăng Ký" link is clicked
document.getElementById('open-register').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('register-modal').style.display = 'block';
    document.getElementById('overlay').style.display = 'block';
});

// Switch to registration modal when "Đăng Ký Ngay" is clicked in the login modal
document.getElementById('switch-to-register').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('login-modal').style.display = 'none'; // Hide login modal
    document.getElementById('register-modal').style.display = 'block'; // Show registration modal
});

// Switch to login modal when "Đăng Nhập" is clicked in the registration modal
document.getElementById('switch-to-login').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('register-modal').style.display = 'none'; // Hide registration modal
    document.getElementById('login-modal').style.display = 'block'; // Show login modal
});

// Close the modals and overlay when the close button is clicked
document.querySelectorAll('close-btn').forEach(button => {
    button.addEventListener('click', function() {
        document.getElementById('login-modal').style.display = 'none';
        document.getElementById('register-modal').style.display = 'none';
        document.getElementById('overlay').style.display = 'none';
    });
});

// Close modals and overlay when clicking outside of the modal
document.getElementById('overlay').addEventListener('click', function() {
    document.getElementById('login-modal').style.display = 'none';
    document.getElementById('register-modal').style.display = 'none';
    document.getElementById('overlay').style.display = 'none';
});

let cartItems = [];

function addToCart(productName) { //bỏ price ra vì chưa gắn giá , price
    // Thêm sản phẩm vào giỏ hàng
    cartItems.push({ name: productName}); //bỏ price ra vì chưa gắn giá , price: price 
    displayCart();
}

function displayCart() {
    // Lấy bảng giỏ hàng
    const cartTable = document.getElementById('cartTable').getElementsByTagName('tbody')[0];
    cartTable.innerHTML = ''; // Xóa tất cả các dòng cũ

    // Duyệt qua giỏ hàng và thêm các sản phẩm vào bảng
    cartItems.forEach(item => {
        const row = cartTable.insertRow();
        const cell1 = row.insertCell(0);
        const cell2 = row.insertCell(1);
        cell1.textContent = item.name;
        cell2.textContent = item.price.toLocaleString() + ' VNĐ';
    });

    // Hiển thị giỏ hàng
    document.getElementById('cart').style.display = 'block';
}

function toggleCart() {
    // Ẩn hoặc hiển thị giỏ hàng
    const cart = document.getElementById('cart');
    cart.style.display = (cart.style.display === 'block') ? 'none' : 'block';
}

function checkout() {
    if (cartItems.length === 0) {
        alert('Giỏ hàng của bạn trống!');
        return;
    }

    alert('Đã xác nhận giỏ hàng!');
    cartItems = []; // Dọn dẹp giỏ hàng
    displayCart(); // Cập nhật lại giỏ hàng (sẽ không có gì sau khi xác nhận)
}