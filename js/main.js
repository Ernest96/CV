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

    }, 700);
})();

function mobileMenu() {
    var x = document.getElementById("navbar");
    if (x.className === "nav") {
        x.className = "nav mobile";
    } else {
        x.className = "nav";
    }
}

function linkClick() {
    mobileMenu();
}

function sendMessage() {
    var something = "4cd6c48c-aa60-45b5-a6e2-40fa7972f0d0";

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
        if (validateEmail(email)) {
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
            contactsError("Email is not in a valid form.");
        }
        
    }
    else {
        contactsError("Please fill all the fields.");
    }
}

function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}

function contactsError(errorMessage) {
    var validationMessageSelector = document.getElementById('validation-message');
    validationMessageSelector.classList.add("error");
    validationMessageSelector.innerHTML = errorMessage;
}