const myForm = document.querySelector("#my_form");

myForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const nameInput = document.querySelector('#username');
    console.log(nameInput.value);   
});
