// collapsible selection fields

var coll = document.getElementsByClassName('formTitle');
var r;

for (r = 0; r < coll.length; r++) {
  coll[r].addEventListener('click', function () {
    // this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight && content.style.display) {
      content.style.display = null;
      content.style.maxHeight = null;
    } else {
      content.style.display = 'inherit';
      content.style.maxHeight = content.scrollHeight + 'px';
    }
  });
}

// collapsible sidebar

var elemnt = document.getElementById("formheader");
var overlay = document.getElementById("modaloverlay");
var formcloser = document.getElementById("formcloser").addEventListener('click', sidebarCollapse)
var sidebr = document.getElementsByClassName("selectorform")[0];
var HeaderPhn = document.getElementById("catHeaderPhn").addEventListener('click', sidebarCollapse)

function sidebarCollapse() {
  sidebr.classList.toggle('selectorform');
  sidebr.classList.toggle('selectorformmodal');
  overlay.style.display = (overlay.style.display == 'block' ? 'none' : 'block');
}

function Dog(name, size, coat, environment, breed, cost) {
  this.name = name;
  this.size = size;
  this.coat = coat;
  this.environment = environment;
  this.breed = breed;
  this.cost = cost;
}

var Dogs = [];
var filters = [];

const Shiba = new Dog(
  'Shiba Inu',
  'medDogs',
  'medCoat',
  'urban',
  'non-sporting',
  'expensive'
);
Dogs.push(Shiba);
const Malamute = new Dog(
  'Alaskan Malamute',
  'largeDogs',
  'longCoat',
  'rural',
  'spitz',
  'expensive'
);
Dogs.push(Malamute);
const Basenji = new Dog(
  'Basenji',
  'smallDogs',
  'shortCoat',
  'urban',
  'non-sporting',
  'affordable'
);
Dogs.push(Basenji);
const Boxer = new Dog('Boxer', 'medDogs', 'shortCoat', 'urban', 'working', 3);
Dogs.push(Boxer);
const Dalmat = new Dog(
  'Dalmatian',
  'medDogs',
  'shortCoat',
  'urban',
  'non-sporting',
  'affordable'
);
Dogs.push(Dalmat);
const GoldRet = new Dog(
  'Golden Retriver',
  'medDogs',
  'longCoat',
  'rural',
  'sporting',
  'expensive'
);
Dogs.push(GoldRet);
const Dober = new Dog(
  'Dobermann',
  'largeDogs',
  'shortCoat',
  'urban',
  'working',
  'affordable'
);
Dogs.push(Dober);
const Afghan = new Dog(
  'Afghan Hound',
  'largeDogs',
  'longCoat',
  'rural',
  'hounds',
  'expensive'
);
Dogs.push(Afghan);
const GreatDane = new Dog(
  'Great Dane',
  'largeDogs',
  'shortCoat',
  'rural',
  'working',
  'expensive'
);
Dogs.push(GreatDane);
const Airedale = new Dog(
  'Airedale Terrier',
  'medDogs',
  'medCoat',
  'urban',
  'terrier',
  'affordable'
);
Dogs.push(Airedale);
const Xolo = new Dog(
  'Xoloitzcuintli',
  'medDogs',
  'shortCoat',
  'urban',
  'non-sporting',
  'expensive'
);
Dogs.push(Xolo);
const Borzoi = new Dog(
  'Borzoi',
  'largeDogs',
  'longCoat',
  'rural',
  'non-sporting',
  'affordable'
);
Dogs.push(Borzoi);
const Papillon = new Dog(
  'Papillon',
  'smallDogs',
  'medCoat',
  'urban',
  'toys',
  'expensive'
);
Dogs.push(Papillon);
const Dachs = new Dog(
  'Dachshund',
  'smallDogs',
  'shortCoat',
  'urban',
  'hounds',
  'affordable'
);
Dogs.push(Dachs);
const Husky = new Dog(
  'Siberian Husky',
  'medDogs',
  'medCoat',
  'rural',
  'working',
  'expensive'
);
Dogs.push(Husky);
const Pug = new Dog(
  'Pug',
  'smallDogs',
  'shortCoat',
  'urban',
  'toys',
  'expensive'
);
Dogs.push(Pug);
const BMD = new Dog(
  'Bernese Mountain Dog',
  'largeDogs',
  'longCoat',
  'rural',
  'working',
  'expensive'
);
Dogs.push(BMD);
const SharPei = new Dog(
  'Shar Pei',
  'medDogs',
  'shortCoat',
  'urban',
  'non-sporting',
  'expensive'
);
Dogs.push(SharPei);
const GermanPointer = new Dog(
  'German Pointer',
  'medDogs',
  'shortCoat',
  'rural',
  'sporting',
  'affordable'
);
Dogs.push(GermanPointer);
const IrishWolfhound = new Dog(
  'Irish Wolfhound',
  'largeDogs',
  'longCoat',
  'rural',
  'hounds',
  'affordable'
);
Dogs.push(IrishWolfhound);
const BostonTerrier = new Dog(
  'Boston Terrier',
  'smallDogs',
  'shortCoat',
  'urban',
  'terriers',
  'affordable'
);
Dogs.push(BostonTerrier);
const KingCharlesSpan = new Dog(
  'King Charles Spaniel',
  'smallDogs',
  'medCoat',
  'urban',
  'working',
  'expensive'
);
Dogs.push(KingCharlesSpan);
const JackRussell = new Dog(
  'Jack Russell Terrier',
  'smallDogs',
  'shortCoat',
  'urban',
  'terriers',
  'affordable'
);
Dogs.push(JackRussell);

var prevtgt;

function toggler(event) {
  let tgt = event.target;
  //find group
  let toggleGroup = tgt.classList.item(1);
  //find filter
  let tgtfilter = tgt.classList.item(2);
  //access DOM
  let group = document.getElementsByClassName(toggleGroup);
  //If statements to toggle class
  for (let i = 0; i < group.length; i++) {
    if (group[i].classList.item(2) == tgtfilter) {
      group[i].classList.toggle('on');
    } else {
      group[i].classList.remove('on');
    }
  }
  prevtgt = tgt;
  genDogs();
}

function genDogs() {
  let filters = document.getElementsByClassName('on');
  let nodogs = document.getElementById('noDogs');
  var DogsFilt = Dogs;
  //loop dogs array through filters
  for (let j = 0; j < filters.length; j++) {
    var DogsFilt = DogsFilt.filter(
      dog => dog[filters[j].classList.item(1)] == filters[j].classList.item(2)
    );
  }
  //remove all previous
  const catcont = document.getElementById('catItemsCont');
  while (catcont.childNodes.length > 0) {
    catcont.removeChild(catcont.lastChild);
  }
  //insert new filtered dogs
  for (let i = 0; i < DogsFilt.length; i++) {
    catcont.insertAdjacentHTML(
      'afterbegin',
      `<div class="catalogueItem" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><img src="assets/${
      DogsFilt[i].name
      }.svg"><h6 class="catItemTitle">${DogsFilt[i].name}</h6></div>`
    );
  }
  if (DogsFilt.length == false) {
    nodogs.classList.remove('displaynone');
  } else {
    nodogs.classList.add('displaynone');
  }
  genModal();
}

// Modal On Click

function genModal() {
  var modal = document.getElementById('myModal');

  // Get the image and insert it inside the modal - use its "alt" text as a caption
  var imgs = document.getElementsByClassName('catalogueItem');
  var modalImg = document.getElementById('img01');
  for (let k = 0; k < imgs.length; k++) {
    let img = imgs[k];
    img.addEventListener('click', function () {
      modal.style.display = 'block';
      modalImg.src = this.firstChild.src;
      // this.alt;
    });
  }
  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName('closer')[0];

  // When the user clicks on <span> (x), close the modal
  span.onclick = function () {
    modal.style.display = 'none';
  };
}
