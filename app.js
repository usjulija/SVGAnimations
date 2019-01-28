const app = document.querySelector('.app');
const projects = [
  {
    "title": "Walking ghost",
    "url": "https://codepen.io/Julli/full/dgGYXo",
    "img": "images/ghost.jpg"
  },
  {
    "title": "Responsive SVG image",
    "url": "https://codepen.io/Julli/full/PyNoJp",
    "img": "images/city.jpg"
  },
  {
    "title": "Search button animation",
    "url": "https://codepen.io/Julli/full/ReRdXa",
    "img": "images/search.jpg"
  },
  {
    "title": "SVG Candy Machine",
    "url": "https://codepen.io/Julli/full/rqoZyP",
    "img": "images/candy.jpg"
  },
  {
    "title": "Panda-Cosmonaut",
    "url": "https://codepen.io/Julli/full/KrWoRq",
    "img": "images/panda.jpg"
  }
];

function addContent() {
  return projects.map(project => {
   const render =
   `<div class='card' style="background-image: url(${project.img})">
     <a target='_blank' href='${project.url}' class="title">${project.title}<i class='fas fa-search-plus' style='font-size:36px'></i></a>
   </div>`;

   app.insertAdjacentHTML("beforeend", render);
   });
}

window.onload = addContent;
