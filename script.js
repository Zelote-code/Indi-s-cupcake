// script.js
document.addEventListener("DOMContentLoaded", function () {
    const orderForm = document.getElementById("orderForm");

    orderForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent the form from submitting

        const formData = new FormData(orderForm);
        let orderSummary = "";
        let totalItems = 0;

        // Loop through each menu item and check if a quantity was selected
        for (const [item, quantity] of formData.entries()) {
            if (quantity > 0) {
                orderSummary += `${quantity} x ${capitalizeFirstLetter(item.replace('_', ' '))}\n`;
                totalItems += parseInt(quantity, 10);
            }
        }

        if (totalItems === 0) {
            alert("Please select at least one item to order.");
        } else {
            alert(`Thank you for your order!\n\nYour order summary:\n${orderSummary}`);
            orderForm.reset(); // Reset the form after submission
        }
    });

    // Capitalize first letter of menu item for display purposes
    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
});
