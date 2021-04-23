const URL = '/api/ron/quotes';

let getRon = (e) => {
  e.preventDefault();
  console.log('get ron quote');
  fetch(URL).then((res) => res.json()).then((content) => {
    let main = document.querySelector('main');
    main.innerHTML = `<h2>${content[0]}</h2>`;
  }).catch((err) => console.error);
};

let getYes = (e) => {
  console.log('yes');
  let url = '/api/yes';
  fetch(url).then((res) => res.json()).then((content) => {
    let main = document.querySelector('main');
    main.innerHTML = `<h2>${content.msg}</h2>`;
  }).catch((err) => console.error);
};

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('ron').addEventListener('click', getRon);
  document.getElementById('yep').addEventListener('click', getYes);
});
