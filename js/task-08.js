const form = document.querySelector('.login-form');

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();
    const {
        elements: { email, password },
    } = event.currentTarget;

    if (email.value === "" || password.value === "") {
        return alert("Bсі поля повинні бути заповнені!");
    } else {
        const userDetails = {
            email: email.value,
            password: password.value,
        };
        console.log(userDetails);
        form.reset();
    };
};