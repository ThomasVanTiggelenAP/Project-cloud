document.addEventListener("DOMContentLoaded", function () {
    let cart = [];

    const cartItemElement = document.getElementById("cartItem");
    const totalElement = document.getElementById("total");
    const productButtons = document.querySelectorAll(".cart");

    productButtons.forEach((button, index) => {
        button.addEventListener("click", () => {
            const productSection = button.closest(".product");
            const productName = productSection.querySelector("h1").innerText;

            const productPriceString = productSection.querySelector("p").innerText.split("€")[1].trim();
            const productPrice = parseFloat(productPriceString.replace(",", "."));

            const existingItemIndex = cart.findIndex(item => item.name === productName);

            if (existingItemIndex !== -1) {
                cart[existingItemIndex].quantity += 1;
            } else {
                cart.push({ name: productName, price: productPrice, quantity: 1 });
            }
            updateCartDisplay();
        });
    });
    const ulLi = document.getElementById("cartItem");
    function updateCartDisplay() {
        let cartItemText = "";
        let total = 0;

        cart.forEach((item, index) => {
            let newli = document.createElement("li");
            cartItemText += `${item.name} (x${item.quantity}) - €${(item.price * item.quantity).toFixed(2)}`;
            cartItemText += ` <button class="remove" data-index="${index}">Verwijder</button><br>`;
            total += item.price * item.quantity;
            newli.textContent = cartItemText;
                ulLi.appendChild(newli);
        });

        cartItemElement.innerHTML = cartItemText;
        totalElement.innerText = `€${total.toFixed(2)}`;

        const removeButtons = document.querySelectorAll(".remove");
        removeButtons.forEach(removeButton => {
        removeButton.addEventListener("click", () => {
        const itemIndexToRemove = parseInt(removeButton.getAttribute("data-index"));

        if (cart[itemIndexToRemove].quantity > 1) {
            cart[itemIndexToRemove].quantity -= 1;
        } else {
            cart.splice(itemIndexToRemove, 1);
        }
        updateCartDisplay();
    });
});
        if (cart.length === 0) {
            cartItemElement.innerText = "Je mandje is leeg";
        }
    }
});

