let filtermake = document.getElementById('filtermake');
let filtermake_drop = document.getElementById('filtermake_drop');

let filtermodel = document.getElementById('filtermodel');
let filtermodel_drop = document.getElementById('filtermodel_drop');

let filtercity = document.getElementById('filtercity');
let filtercity_drop = document.getElementById('filtercity_drop');

let filterfrom = document.getElementById('filterfrom');
let filterfrom_drop = document.getElementById('filterfrom_drop');

let filterto = document.getElementById('filterto');
let filterto_drop = document.getElementById('filterto_drop');

filtermake.addEventListener('click',() => {
  filtermake_drop.classList.toggle('height');
})
filtermodel.addEventListener('click',() => {
  filtermodel_drop.classList.toggle('height');
})
filtercity.addEventListener('click',() => {
  filtercity_drop.classList.toggle('height');
})
filterfrom.addEventListener('click',() => {
  filterfrom_drop.classList.toggle('height');
})
filterto.addEventListener('click',() => {
  filterto_drop.classList.toggle('height');
})
let bids = document.querySelector('.bids')
let mobmenu = document.getElementById('mobmenu');
mobmenu.addEventListener('click',()=>{
  document.getElementById('menulist').classList.toggle('mobmenuactive')
})
document.getElementById('filter-btn').addEventListener('click',()=>{
  document.getElementById('filter-card').classList.toggle('showmenu')

})