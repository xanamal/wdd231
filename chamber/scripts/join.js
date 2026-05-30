document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("timestamp").value =
        new Date().toISOString();
});

document.querySelector("#timestamp").value = new Date().toLocaleString();