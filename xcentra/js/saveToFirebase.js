function saveToFirebase() {
    var email = document.getElementById("email_form").value
    var name = document.getElementById("name_form").value
    var guestObject = {
        email: email,
        name: name
    };

    console.log(email);
    console.log(name);
    pushToFirebase(guestObject);
}


function pushToFirebase(guestObject) {
    console.log("Start pushing to Firebase");
    firebase.database().ref('subscription-entries').push().set(guestObject);
    console.log("Pushing to Firebase is completed!")
}

saveToFirebase()