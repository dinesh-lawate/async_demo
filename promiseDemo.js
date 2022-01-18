getCustomer(1)
    .then((customer) => {
        console.log('Customer: ', customer)
        if (customer.isGold) {
            return getTopMovies()
                .then((movies) => {
                    console.log("Top movies: " + movies);
                    return sendEmail(customer.email, movies);
                })
                .then(() => console.log("Email sent."))
                .catch((err) => console.log("Error: " + err));
        }
    })



function getCustomer(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Getting customer...");
            resolve({
                id: 1,
                name: 'John Doe',
                isGold: true,
                email: 'email'
            });
        }, 4000);
    });
}

function getTopMovies() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Getting top movies...");
            resolve(['movie1', 'movie2']);
        }, 4000);
    });
}

function sendEmail(email, movies) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Sending email...");
            resolve();
        }, 4000);
    });

}