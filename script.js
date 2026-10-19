
const billingToggle = document.getElementById("billingToggle");
const prices = document.querySelectorAll(".price");

function updatePrices() {
    const yearly = billingToggle.checked;

    prices.forEach((price) => {
        const amount = yearly
            ? price.dataset.yearly
            : price.dataset.monthly;

        const period = yearly ? "/year" : "/month";

        price.innerHTML = `₹${amount} <small>${period}</small>`;
    });
}

billingToggle.addEventListener("change", updatePrices);

function selectPlan(plan) {
    alert("You selected the " + plan + " plan!");
}
