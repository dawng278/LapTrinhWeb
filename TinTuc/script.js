const formInputs = document.querySelectorAll('.form-next input');
const formLabels = document.querySelectorAll('.form-next label');

formInputs.forEach((input, index) => {
    input.addEventListener('mouseover', () => {
        formLabels[index].classList.add("four");
    });
    input.addEventListener('mouseout', () => {
        formLabels[index].classList.remove("four");
    });
});

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
    