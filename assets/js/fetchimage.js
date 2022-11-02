console.log('fetching image and displaying on index.html page');

catchCoffeeBook()
  .then(response => {
    console.log('Successfull');
  })
  .catch(error => {
    console.log('Error...');
    console.error(error);
  });

async function catchCoffeeBook() {
  const response = await fetch('../../images/pic01.jpg');
  const blob = await response.blob();
  document.getElementById('coffeebook').src = URL.createObjectURL(blob);
}