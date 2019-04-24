function saveToFirebase(email,name) {
    var guestObject = {
        email: email;
        name: name
    };

    firebase.database().ref('subscription-entries').push().set(guestObject)
        .then(function(snapshot) {
            success(); // some success method
        }, function(error) {
            console.log('error' + error);
            error(); // some error method
        });
}

saveToFirebase(email,name);