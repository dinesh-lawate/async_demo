
getCustomer(1, (customer) => {
  console.log('Customer: ', customer);
  if (customer.isGold) {
    getTopMovies((movies) => {
      console.log('Top movies: ' + movies);
      sendEmail(customer.email, movies, () => {
        console.log('Email sent...')
      });
    });
  }
});

function getCustomer(id, callback) {
  setTimeout(() => {
    console.log("Getting customer...");
    callback({
      id: 1,
      name: 'John Doe',
      isGold: true,
      email: 'email'
    });
  }, 4000);
}

function getTopMovies(callback) {
  setTimeout(() => {
    console.log("Getting top movies...");
    callback(['movie1', 'movie2']);
  }, 4000);
}

function sendEmail(email, movies, callback) {
  setTimeout(() => {
    console.log("Sending email...");
    callback();
  }, 4000);
}