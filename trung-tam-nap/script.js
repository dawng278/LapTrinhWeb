document.addEventListener("DOMContentLoaded", function () {
  // Input hover effects
  const formInputs = document.querySelectorAll(".form-next input");
  const formLabels = document.querySelectorAll(".form-next label");

  formInputs.forEach((input, index) => {
    input.addEventListener("mouseover", () => {
      formLabels[index].classList.add("four");
    });
    input.addEventListener("mouseout", () => {
      formLabels[index].classList.remove("four");
    });
  });

  // Modal and Cart Interactions
  const elements = {
    openLogin: document.getElementById("open-login"),
    openRegister: document.getElementById("open-register"),
    closeButtons: document.querySelectorAll(".close-btn"),
    overlay: document.getElementById("overlay"),
    loginModal: document.getElementById("login-modal"),
    registerModal: document.getElementById("register-modal"),
    switchToRegister: document.getElementById("switch-to-register"),
    switchToLogin: document.getElementById("switch-to-login"),
    openCart: document.getElementById("open-cart"),
    cartModal: document.getElementById("cart-modal"),
  };

  // Validate all required elements exist
  const missingElements = Object.entries(elements)
    .filter(([key, value]) => !value)
    .map(([key]) => key);

  if (missingElements.length > 0) {
    console.error("Missing elements:", missingElements);
    return;
  }

  // Modal Open Functions
  function openModal(modal, overlay) {
    modal.style.display = "block";
    overlay.style.display = "block";
  }

  function closeModals() {
    elements.loginModal.style.display = "none";
    elements.registerModal.style.display = "none";
    elements.cartModal.style.display = "none";
    elements.overlay.style.display = "none";
    document.body.style.overflow = "auto";
  }

  // Event Listeners
  elements.openLogin.addEventListener("click", (event) => {
    event.preventDefault();
    openModal(elements.loginModal, elements.overlay);
    document.body.style.overflow = "hidden";
  });

  elements.openRegister.addEventListener("click", (event) => {
    event.preventDefault();
    openModal(elements.registerModal, elements.overlay);
    document.body.style.overflow = "hidden";
  });

  elements.openCart.addEventListener("click", (event) => {
    event.preventDefault();
    openModal(elements.cartModal, elements.overlay);
    document.body.style.overflow = "hidden";
    elements.cartModal.style.opacity = "1";
  });

  elements.closeButtons.forEach((button) => {
    button.addEventListener("click", closeModals);
    document.body.style.overflow = "auto";
  });

  elements.overlay.addEventListener("click", closeModals);

  elements.switchToRegister.addEventListener("click", () => {
    elements.loginModal.style.display = "none";
    elements.registerModal.style.display = "block";
  });

  elements.switchToLogin.addEventListener("click", () => {
    elements.loginModal.style.display = "block";
    elements.registerModal.style.display = "none";
  });

  // Email Verification
  const sendButton = document.querySelector(".send-button");
  const emailInput = document.querySelector(".email-group input");

  if (sendButton && emailInput) {
    sendButton.addEventListener("click", () => {
      const emailValue = emailInput.value.trim();

      if (!emailValue) {
        alert("Vui lòng nhập Email trước khi gửi!");
        return;
      }

      // Email validation regex
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(emailValue)) {
        alert("Vui lòng nhập địa chỉ Email hợp lệ!");
        return;
      }

      // Send confirmation code logic
      console.log(`Mã xác nhận đã được gửi tới: ${emailValue}`);
      alert("Mã xác nhận đã được gửi đến Email của bạn.");
    });
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const cartModal = document.getElementById("cart-modal");
  const overlay = document.getElementById("overlay");
  const openCartBtn = document.getElementById("open-cart");
  const closeCartBtns = document.querySelectorAll(".close-btn");
  const cartFooter = document.querySelector(".cart-footer");

  // Hàm mở giỏ hàng
  function openCart() {
    cartModal.classList.add("show");
    overlay.style.display = "block";
    document.body.style.overflow = "hidden";
  }

  // Hàm đóng giỏ hàng
  function closeCart() {
    cartModal.classList.remove("show");
    overlay.style.display = "none";
    document.body.style.overflow = "auto";
  }

  // Sự kiện mở giỏ hàng
  openCartBtn.addEventListener("click", (event) => {
    event.preventDefault();
    openCart();
  });

  // Sự kiện đóng giỏ hàng
  closeCartBtns.forEach((btn) => {
    btn.addEventListener("click", closeCart);
  });

  // Đóng giỏ hàng khi click overlay
  overlay.addEventListener("click", closeCart);

  // Quản lý giỏ hàng
  const cart = {
    items: [],

    addItem: function (name, price, image) {
      const existingItem = this.items.find((item) => item.name === name);

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        this.items.push({
          name: name,
          price: price,
          quantity: 1,
          image: image,
        });
      }

      this.updateCart();
    },

    updateCart: function () {
      const cartItemsContainer = document.querySelector(".cart-items");
      const totalPriceElement = document.querySelector(".total-price");

      // Xóa các mục giỏ hàng hiện tại
      cartItemsContainer.innerHTML = "";

      // Thêm các mục mới
      this.items.forEach((item) => {
        const cartItemElement = document.createElement("div");
        cartItemElement.classList.add("cart-item");
        cartItemElement.innerHTML = `
                    <img src="${item.image}" alt="${item.name}" class="item-image">
                    <div class="item-details">
                        <h3 class="item-name">${item.name}</h3>
                        <p class="item-price">Giá: ${item.price}</p>
                        <div class="item-quantity">
                            <button class="quantity-btn decrease" data-name="${item.name}">-</button>
                            <input type="number" value="${item.quantity}" class="quantity-input" data-name="${item.name}">
                            <button class="quantity-btn increase" data-name="${item.name}">+</button>
                        </div>
                    </div>
                    <button class="remove-item" data-name="${item.name}">&times;</button>
                `;
        cartItemsContainer.appendChild(cartItemElement);
      });

      // Cập nhật tổng giá
      const totalPrice = this.calculateTotal();
      totalPriceElement.textContent = `Tổng tiền: ${totalPrice.toLocaleString()}₫`;

      // Cập nhật hiển thị giỏ hàng
      this.updateCartDisplay();

      // Gắn sự kiện cho các nút trong giỏ hàng
      this.attachCartEventListeners();
    },

    updateCartDisplay: function () {
      if (this.items.length === 0) {
        // Ẩn footer khi không có sản phẩm
        cartFooter.style.display = "none";

        // Hiển thị thông báo giỏ hàng trống
        // const emptyCartMessage = document.createElement('div');
        // emptyCartMessage.classList.add('empty-cart-message');
        // emptyCartMessage.textContent = 'Giỏ hàng của bạn đang trống';
        // emptyCartMessage.style.textAlign = 'center';
        // emptyCartMessage.style.padding = '20px';
        // emptyCartMessage.style.color = '#888';

        const cartItemsContainer = document.querySelector(".cart-items");
        cartItemsContainer.appendChild(emptyCartMessage);
      } else {
        // Hiện footer khi có sản phẩm
        cartFooter.style.display = "flex";

        // Xóa thông báo giỏ hàng trống nếu có
        const emptyCartMessage = document.querySelector(".empty-cart-message");
        if (emptyCartMessage) {
          emptyCartMessage.remove();
        }

        // Thêm box-shadow cho các cart-item
        const cartItemElements = document.querySelectorAll(".cart-item");
        cartItemElements.forEach((item) => {
          item.style.boxShadow = "0 2px 5px rgba(0,0,0,0.1)";
        });
      }
    },

    calculateTotal: function () {
      return this.items.reduce(
        (total, item) =>
          total +
          parseFloat(item.price.replace(/[^0-9.-]+/g, "")) * item.quantity,
        0
      );
    },

    attachCartEventListeners: function () {
      // Các sự kiện giảm số lượng
      document.querySelectorAll(".quantity-btn.decrease").forEach((btn) => {
        btn.addEventListener("click", (e) => {
          const name = e.target.dataset.name;
          const item = this.items.find((item) => item.name === name);
          if (item && item.quantity > 1) {
            item.quantity -= 1;
            this.updateCart();
          }
        });
      });

      // Các sự kiện tăng số lượng
      document.querySelectorAll(".quantity-btn.increase").forEach((btn) => {
        btn.addEventListener("click", (e) => {
          const name = e.target.dataset.name;
          const item = this.items.find((item) => item.name === name);
          if (item) {
            item.quantity += 1;
            this.updateCart();
          }
        });
      });

      // Sự kiện xóa mục
      document.querySelectorAll(".remove-item").forEach((btn) => {
        btn.addEventListener("click", (e) => {
          const name = e.target.dataset.name;
          this.items = this.items.filter((item) => item.name !== name);
          this.updateCart();
        });
      });
    },
  };

  // Hàm thêm vào giỏ hàng
  window.addToCart = function (productCard) {
    const card = productCard.closest(".product-card");
    const name = card.querySelector("h4").textContent;
    const price = card.querySelector(".buy-now").textContent;
    const image = card.querySelector("img").src;

    cart.addItem(name, price, image);
  };

  // Gắn sự kiện cho các nút "Thêm vào giỏ hàng"
  document.querySelectorAll(".add-to-cart").forEach((button) => {
    button.addEventListener("click", function () {
      addToCart(this);
    });
  });

  // Khởi tạo ban đầu để ẩn footer
  cart.updateCartDisplay();
});
