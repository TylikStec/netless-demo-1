const URL = 'https://ron-swanson-quotes.herokuapp.com/v2/quotes';

let getRon = (e) => {
  console.log('get ron quote');
  fetch(URL).then((res) => res.json()).then((content) => {
    let main = document.querySelector('main');
    main.innerHTML = `<h2>${content[0]}</h2>`;
  }).catch((err) => console.error);
};

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('ron').addEventListener('click', getRon);
});