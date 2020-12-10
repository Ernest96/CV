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
    var name = document.getElementById('contact-name').value;
    var email = document.getElementById('contact-email').value;
    var message = document.getElementById('contact-message').value;

    document.getElementById('validation-message').innerHTML = "";
    document.getElementById('validation-message').classList.remove("error")


    if (name.length && name.length && message.length) {
        document.getElementById('contacts-loading').style.visibility = 'visible';
        message = "From: " + name + " " + email + "<br />" + message; 

        Email.send({
            SecureToken : something,
            To : 'bitca.ernest@gmail.com',
            From : "ernestdeveloper96@gmail.com",
            Subject : "CV Site",
            Body : message
        }).then(function (response) {
            console.log(response);
            document.getElementById('contacts-loading').style.visibility = 'hidden';
            document.getElementById('validation-message').innerHTML = "Your message was sent :)";
          }
        );
    }
    else {
        document.getElementById('validation-message').classList.add("error");
        document.getElementById('validation-message').innerHTML = "Please fill all the fields.";
    }


    
}