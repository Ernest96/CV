(function () {
    setTimeout(function () {
        document.getElementById('loader-wrapper').classList.add("fade-off");
    
        new TypeIt("#job-typeit", {
            strings: "Software Developer",
            startDelay: 750,
            speed: 80
        }).go();
    
        let birthDate = new Date(1996, 8, 25);
        let today = new Date();
        let age = today.getFullYear() - birthDate.getFullYear();
    
        document.getElementById('virsta').innerHTML = age;
        document.getElementById('page-content').style.display = 'block';

        AOS.init({
            duration: 500,
            once: true
        });

    }, 400);
})();

function sendMessage() {
    var something = "a5778984-e535-47af-b4e9-900abbf3052e";

    var contactNameSelector = document.getElementById('contact-name');
    var contactEmailSelector = document.getElementById('contact-email');
    var contactMessageSelector = document.getElementById('contact-message');
    var validationMessageSelector = document.getElementById('validation-message');
    var contactsLoadingSelector = document.getElementById('contacts-loading');

    var name = contactNameSelector.value;
    var email = contactEmailSelector.value;
    var message = contactMessageSelector.value;

    validationMessageSelector.innerHTML = "";
    validationMessageSelector.classList.remove("error")

    if (name.length && name.length && message.length) {
        contactsLoadingSelector.style.visibility = 'visible';
        message = "From: " + name + " " + email + "<br />" + message; 

        Email.send({
            SecureToken : something,
            To : 'bitca.ernest@gmail.com',
            From : "ernestdeveloper96@gmail.com",
            Subject : "CV Site",
            Body : message
        }).then(function (response) {
            console.log(response);
            contactsLoadingSelector.style.visibility = 'hidden';
            validationMessageSelector.innerHTML = "Your message was sent :)";
            contactNameSelector.value = "";
            contactEmailSelector.value = "";
            contactMessageSelector.value = "";
          }
        );
    }
    else {
        validationMessageSelector.classList.add("error");
        validationMessageSelector.innerHTML = "Please fill all the fields.";
    }
}