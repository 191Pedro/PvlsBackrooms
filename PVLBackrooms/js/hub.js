const toggleButton = document.getElementById('toggle-btn');
const sidebar = document.getElementById('sidebar');
let sidebarMode = localStorage.getItem('sidebar-mode');

const enableSidebarMode = () =>{
  sidebar.classList.toggle('close');
  toggleButton.classList.toggle('rotate');
  
  closeAllSubMenus();

  localStorage.setItem('sidebar-mode', 'active');
}
const disableSidebarMode = () =>{
  sidebar.classList.toggle('close');
  toggleButton.classList.toggle('rotate');
  
  closeAllSubMenus();

  localStorage.setItem('sidebar-mode', null);
}

if(sidebarMode === "active") enableSidebarMode();

function toggleSidebar(){
  sidebarMode = localStorage.getItem('sidebar-mode')
  if(sidebarMode !== 'active'){
    enableSidebarMode()
  }
  else{
    disableSidebarMode()
  }
}

function toggleSubMenu(button){

  if(!button.nextElementSibling.classList.contains('show')){
    closeAllSubMenus();
  }
  
  button.nextElementSibling.classList.toggle('show');
  button.classList.toggle('rotate');
  
  if(sidebar.classList.contains('close')){
    toggleButton.classList.toggle('rotate');
    sidebar.classList.toggle('close');
  }
}

function closeAllSubMenus(){
  Array.from(sidebar.getElementsByClassName('show')).forEach(ul => {
    ul.classList.remove('show')
    ul.previousElementSibling.classList.remove('rotate')
  })
}

const configButton = document.getElementById('config-btn');
const configMenu = document.getElementById('config-menu');
const infoButton = document.getElementById('info-btn');
const infoMenu = document.getElementById('info-menu');
const mainDiv = document.getElementById('main');

configButton.addEventListener('click', () =>{
  configButton.classList.toggle('closed')
  configMenu.classList.toggle('closed')
  if(!infoMenu.classList.contains('closed')){
    infoMenu.classList.toggle('closed')
    infoButton.classList.toggle('closed')
  }
})

infoButton.addEventListener('click', () =>{
  infoButton.classList.toggle('closed')
  infoMenu.classList.toggle('closed')
  if(!configMenu.classList.contains('closed')){
    configMenu.classList.toggle('closed')
    configButton.classList.toggle('closed')
  }
})

mainDiv.addEventListener('click', () =>{
  console.log('teste')
  if(!configMenu.classList.contains('closed')){
    configMenu.classList.toggle('closed')
    configButton.classList.toggle('closed')
  }
  if(!infoMenu.classList.contains('closed')){
    infoMenu.classList.toggle('closed')
    infoButton.classList.toggle('closed')
  }
})

let lightMode = localStorage.getItem('lightMode');
const themeSwitch = document.getElementById('theme-switch');

const enablelightMode = () => {
  document.body.classList.toggle('lightMode');
  localStorage.setItem('lightMode', 'active');
}

const disablelightMode = () => {
  document.body.classList.toggle('lightMode');
  localStorage.setItem('lightMode', null);
}

if(lightMode === "active") enablelightMode();

themeSwitch.addEventListener("click", () => {
  lightMode = localStorage.getItem('lightMode');
  if(lightMode !== "active"){
    enablelightMode();
  }
  else {
    disablelightMode();
  }
})

const themeOptTurtle = document.getElementById('theme-turtle');
const themeOptRoses = document.getElementById('theme-roses');
let themeSet = localStorage.setItem('themeSet', 'turtle');

const setThemeTurtle = () => {
  document.body.classList.remove('themeRoses')
  document.body.classList.add('themeTurtle')
}

const setThemeRoses = () => {
  document.body.classList.remove('themeTurtle')
  document.body.classList.add('themeRoses')
}

themeOptTurtle.addEventListener('click', () =>{
  themeSet = localStorage.getItem('themeSet')
  if(themeSet !== "turtle"){
    setThemeTurtle();
  }
  else if(themeSet !== "roses"){
    setThemeRoses()
  }
})
themeOptRoses.addEventListener('click', () =>{
  themeSet = localStorage.getItem('themeSet')
})