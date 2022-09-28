// Brand Logo Script
const lgtxt = document.querySelector('.text p');
lgtxt.innerHTML = lgtxt.innerText.split("").map(
  (char, i) =>
  `<span style="transform:rotate(${i * 4.8}deg)">${char}</span>`
).join("")
// END of Brand Logo Script




// Nav Menu Script
var marker = document.querySelector('.marker');
var item = document.querySelectorAll('nav .mk');


function indicator(e){
 marker.style.left = e.offsetLeft+"px";
 marker.style.width = e.offsetWidth+"px";
} 

item.forEach(link => {
 link.addEventListener('mouseover', (e)=>{
   indicator(e.target);
 })
})
// End of Nav Menu Script


// Morphing Burger Icon{}
let menu = document.querySelector('.menu')
let burger = document.querySelector('.burger')

menu.addEventListener('click', ()=>{
   menu.classList.toggle('swish')
   burger.classList.toggle('swish')
})


// End of Morphing Burger Icon{}

// HEADER STICKY ON UP-SCROLL
const body = document.body
let lastScroll = 0

window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset

  if(currentScroll <= 0){
    body.classList.remove("scroll-up")
  }

  if (currentScroll > lastScroll && !body.classList.contains("scroll-down")){
    body.classList.remove("scroll-up")
    body.classList.add("scroll-down")
  }
  if (currentScroll < lastScroll && body.classList.contains("scroll-down")){
    body.classList.remove("scroll-down")
    body.classList.add("scroll-up")
  }


  lastScroll = currentScroll


})
// END OF HEADER STICKY ON UP-SCROLL


// WHATSAPP CHAT BOT SCRIPT****************************************//
window.onscroll = function() {myFunction()};

function myFunction() {
if (document.documentElement.scrollTop > 400) { 
document.getElementById("chat").classList.add("scroll-visible");
} else { 
document.getElementById("chat").classList.remove("scroll-visible");

}
}

// END OF WHATSAPP CHAT BOT SCRIPT****************************************//


// Access and Store Elements
const slideRow = document.querySelector('.testRow');
const slideItems = document.getElementsByClassName('testItem');
const dots = document.getElementsByClassName('dot');
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');

let index = 1;
var width;

function slideWidth(){
  width = slideItems[0].clientWidth;
}

slideWidth();
window.addEventListener('resize', slideWidth);

slideRow.style.transform = 'translateX('+ (- width * index) + 'px)';

// Go to next slide
nextBtn.addEventListener('click', nextSlide);
function nextSlide(){
  if (index >= slideItems.length - 1){return}
  slideRow.style.transition = 'transform 0.4s ease-out';
  index++;
  slideRow.style.transform = 'translateX('+ (- width * index) + 'px)';
  indicators();
}

// Go to prev slide 
prevBtn.addEventListener('click', prevSlide);
function prevSlide(){
  if (index <= 0){return}
  slideRow.style.transition = 'transform 0.4s ease-out';
  index--;
  slideRow.style.transform = 'translateX('+ (- width * index) + 'px)';
  indicators();
}

// Return to the first slide when it reaches the last slide
slideRow.addEventListener('transitionend', returnFunction);
function returnFunction(){
  if(slideItems[index].id === 'firstSlideDuplicate'){
    slideRow.style.transition = 'none';
    index = slideItems.length - index;
    slideRow.style.transform = 'translateX('+ (- width * index) + 'px)';
    indicators()
  }

// Return to the last slide when it reaches first slide
if(slideItems[index].id === 'lastSlideDuplicate'){
  slideRow.style.transition = 'none';
  index = slideItems.length - 2;
  slideRow.style.transform = 'translateX('+ (- width * index) + 'px)';
  indicators()
}
}

// Code for the indicators
function indicators(){
  for(i = 0; i < dots.length; i++){
    dots[i].className = dots[i].className.replace(' active', '');
  }
  dots[index - 1].className += ' active';
}

// AutoSliding
function autoSlide(){
  deleteInterval = setInterval(timer, 3000);
  function timer(){
    indicators();
    nextSlide();
  }
}

autoSlide();

// Stop AutoSliding on mouse over the buttons
const btns = document.querySelectorAll('.buttons span');
btns[0].addEventListener('mouseover', pause);
btns[1].addEventListener('mouseover', pause);

function pause(){
  clearInterval(deleteInterval)

}

// Start AutoSliding when mouse if out of the buttons
btns[0].addEventListener('mouseout', autoSlide);
btns[1].addEventListener('mouseout', autoSlide);



// ******************COUNTUP SCRIPT
let section_counter = document.querySelector('#section_counter');
let counters = document.querySelectorAll('.counter-item .counter');

let speed = 100;


// Counter Scroll Animation
let = CounterObserver = new IntersectionObserver(
  (entries, observer)=>{
    let [entry] = entries;
    if(!entry.isIntersecting) return;
    counters.forEach((counter, index) => {
      function UpdateCounter(){
        const targetNumber = +counter.dataset.target;
        const initialNumber = +counter.innerText;
        const incPerCount = targetNumber / speed;
        if (initialNumber < targetNumber){
          counter.innerText = Math.ceil(initialNumber + incPerCount);
          setTimeout(UpdateCounter, 50)
        }
      }
    
      UpdateCounter();

      if(counter.parentElement.style.animation){
        counter.parentElement.style.animation = "";
      }
      else{
        counter.parentElement.style.animation = `slide-up 0.3s ease forwards ${index / counters.length + 0.5}s`;
      }
    });
    observer.unobserve(section_counter);

  }, 
  {
  root: null,
  threshold: 0.4,
});

CounterObserver.observe(section_counter);
// ******************END OF COUNTUP SCRIPT 


// Map marker Script
var iconBase = 'https://maps.google.com/mapfiles/kml/shapes/';
  var marker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    icon: iconBase + 'https://www.flaticon.com/free-icon/flag_4904145?term=map%20marker&related_id=4904145#'
  });

// END of Map market Script