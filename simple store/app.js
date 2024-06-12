let addtoCartIphone = document.getElementById("button1");
let addtoCartHeadset = document.getElementById("button2");
let addtoCartKeyboard = document.getElementById("button3");

let productExistsIphone = false;
let productExistsHeadset = false;
let productExistsKeyboard = false;

addtoCartIphone.addEventListener("click", () => {
    const originalPrice = 900;
    if (!productExistsIphone) {
        let product = document.createElement("div");
        product.setAttribute("class", "item iphone");
        product.innerHTML = `
                <img class="cartImage" src="./images/iphone.png" alt="">
                <div class="addDeleteDiv">
                    <button class="decrement">-</button>
                    <input type="text" class="quantity" value="1" min="1">
                    <button class="increment">+</button>
                </div>
                <div class="priceInCart">${originalPrice} JD</div>
                <button type="button" class="deleteFromCart">X</button>
            `;
        productExistsIphone = true;
        document.getElementById("containerCart").appendChild(product);

        addProductEventListeners(product, originalPrice, () => productExistsIphone = false);

        // Update session storage
        updateSessionStorage(product, originalPrice);
    } else {
        incrementQuantity(".iphone", originalPrice);

        // Update session storage
        updateSessionStorage(document.querySelector(".iphone"), originalPrice);
    }
});

addtoCartHeadset.addEventListener("click", () => {
    const originalPrice = 150;
    if (!productExistsHeadset) {
        let product = document.createElement("div");
        product.setAttribute("class", "item headset");
        product.innerHTML = `
                <img class="cartImage" src="./images/headset.png" alt="">
                <div class="addDeleteDiv">
                    <button class="decrement">-</button>
                    <input type="text" class="quantity" value="1" min="1">
                    <button class="increment">+</button>
                </div>
                <div class="priceInCart">${originalPrice} JD</div>
                <button type="button" class="deleteFromCart">X</button>
            `;
        productExistsHeadset = true;
        document.getElementById("containerCart").appendChild(product);

        addProductEventListeners(product, originalPrice, () => productExistsHeadset = false);

        // Update session storage
        updateSessionStorage(product, originalPrice);
    } else {
        incrementQuantity(".headset", originalPrice);

        // Update session storage
        updateSessionStorage(document.querySelector(".headset"), originalPrice);
    }
});

addtoCartKeyboard.addEventListener("click", () => {
    const originalPrice = 1500;
    if (!productExistsKeyboard) {
        let product = document.createElement("div");
        product.setAttribute("class", "item keyboard");
        product.innerHTML = `
                <img class="cartImage" src="./images/keyboard.png" alt="">
                <div class="addDeleteDiv">
                    <button class="decrement">-</button>
                    <input type="text" class="quantity" value="1" min="1">
                    <button class="increment">+</button>
                </div>
                <div class="priceInCart">${originalPrice} JD</div>
                <button type="button" class="deleteFromCart">X</button>
            `;
        productExistsKeyboard = true;
        document.getElementById("containerCart").appendChild(product);

        addProductEventListeners(product, originalPrice, () => productExistsKeyboard = false);

        // Update session storage
        updateSessionStorage(product, originalPrice);
    } else {
        incrementQuantity(".keyboard", originalPrice);

        // Update session storage
        updateSessionStorage(document.querySelector(".keyboard"), originalPrice);
    }
});

function addProductEventListeners(product, originalPrice, resetExistsFlag) {
    product.querySelector(".deleteFromCart").addEventListener("click", () => {
        resetExistsFlag();
        product.remove();
    });

    product.querySelector(".increment").addEventListener("click", () => {
        let quantityInput = product.querySelector(".quantity");
        let priceInCart = product.querySelector(".priceInCart");
        quantityInput.value = parseInt(quantityInput.value) + 1;
        priceInCart.textContent = `${parseInt(quantityInput.value) * originalPrice} JD`;

        // Update session storage
        updateSessionStorage(product, originalPrice);
    });

    product.querySelector(".decrement").addEventListener("click", () => {
        let quantityInput = product.querySelector(".quantity");
        if (quantityInput.value > 1) {
            quantityInput.value = parseInt(quantityInput.value) - 1;
            let priceInCart = product.querySelector(".priceInCart");
            priceInCart.textContent = `${parseInt(quantityInput.value) * originalPrice} JD`;

            // Update session storage
            updateSessionStorage(product, originalPrice);
        }
    });
}

function incrementQuantity(selector, originalPrice) {
    let product = document.querySelector(selector);
    let quantityInput = product.querySelector(".quantity");
    let priceInCart = product.querySelector(".priceInCart");
    quantityInput.value = parseInt(quantityInput.value) + 1;
    priceInCart.textContent = `${parseInt(quantityInput.value) * originalPrice} JD`;

    // Update session storage
    updateSessionStorage(product, originalPrice);
}

document.querySelector(".buttonTotal").addEventListener("click", getTotalPrice);

function getTotalPrice() {
    let totalPrice = 0;
    let products = document.querySelectorAll(".item");
    let totalPriceElement = document.querySelector(".Totalprice");

    for (let i = 0; i < products.length; i++) {
        let product = products[i];
        let priceText = product.querySelector(".priceInCart").textContent;
        let price = parseFloat(priceText.split(" ")[0]);
        totalPrice += price;
    }

    totalPriceElement.textContent = `${totalPrice} JD`;
    sessionStorage.setItem("total in cart", totalPrice)
}

// Function to update session storage with product information
// Function to update session storage with product information
function updateSessionStorage(product, originalPrice) {
    let productName = product.getAttribute("class").split(" ")[1];
    let quantity = parseInt(product.querySelector(".quantity").value);
    let totalPrice = quantity * originalPrice;

    sessionStorage.setItem(productName, JSON.stringify({
        name: productName,
        quantity: quantity,
        totalPrice: totalPrice
    }));
}
