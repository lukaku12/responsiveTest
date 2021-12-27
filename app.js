const button = document.getElementById("responsive");
const navlink = document.getElementById('responsive-navigation');
const goBack = document.getElementById('goBack');
/*button.addEventListener('click', () =>{
    gsap.to('#responsive-navigation',{x: -180})
    console.log('clicked');
})*/

button.addEventListener("click", () => {
  gsap.fromTo('#responsive-navigation',{scale: 0}, { duration: .4,scale: 1})
  navlink.style.display = 'flex'
})
goBack.addEventListener("click", () => {
  gsap.fromTo('#responsive-navigation',{scale: 1}, { duration: .5,scale: 0})
  navlink.style.display = 'flex'
})