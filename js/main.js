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

let getOcto = (e) => {
  e.preventDefault();
  console.log('get octocat');
  fetch('/api/octo').then((res) => res.json()).then((data) => {
    let main = document.querySelector('main');
    let content = data.map((i) => {
      return `<li>${i.name}</li>`
    });
    main.innerHTML = `<ul>${content}</ul>`;
  }).catch((err) => console.error);
};

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('ron').addEventListener('click', getRon);
  document.getElementById('yep').addEventListener('click', getYes);
  document.getElementById('octo').addEventListener('click', getOcto);
});
