async function sendEmail() {
    try {
        const customer = await getCustomer(1);
        console.log('Customer: ', customer);
        if (customer.isGold) {
            const movies = await getTopMovies();
            console.log("Top movies: " + movies);
            await trySendingEmail();
        }
    }
    catch (err) {
        console.log("Error: " + err);
    }
}

sendEmail()
    .then(() => {
        console.log("Email sent.");
    });



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

function trySendingEmail(email, movies) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Sending email...");
            resolve();
        }, 4000);
    });

}