document.addEventListener("DOMContentLoaded", function() {
    const showHideIcons = document.querySelectorAll(".show-n-hide");
    showHideIcons.forEach(icon => {
        icon.addEventListener("click", function() {
            const inputFields = document.querySelectorAll(".input");
            inputFields.forEach(inputField => {
                if (inputField.type === "password") {
                    inputField.type = "text";
                } else {
                    inputField.type = "password";
                }
            });
        });
    });
});
