//DOMItems
const smallCupsDOM = document.querySelectorAll('.cup-small');
const litersDOM = document.getElementById('liters');
const percentageDOM = document.getElementById('percentage');
const remainedDOM = document.getElementById('remained');

updateBigCup();

//fillTheSmallCups
smallCupsDOM.forEach((cup, index) => {
 cup.addEventListener('click', () => highlightCups(index))
})

//functionFilling
function highlightCups(index) {
 if (smallCupsDOM[index].classList.contains('full') && !smallCupsDOM[index].nextElementSibling.classList.contains('full')) {
  index--;
 }
 smallCupsDOM.forEach((cup, idx) => {
  if (idx <= index) {
   cup.classList.add('full')
  } else {
   cup.classList.remove('full')
  }
 })

 updateBigCup()
}

function updateBigCup() {
 const fullCups = document.querySelectorAll('.full').length;
 const totalCups = smallCupsDOM.length;

 if (fullCups === 0) {
  percentageDOM.style.visibility = 'hidden';
  percentageDOM.style.height = 0;
 } else {
  percentageDOM.style.visibility = 'visible';
  percentageDOM.style.height = `${fullCups/totalCups * 330}px`; //back to the styling of ".cup"
  percentageDOM.innerText = `${fullCups/totalCups * 100}%`
 }

 if (fullCups === totalCups) {
  remainedDOM.style.visibility = 'hidden';
  remainedDOM.style.height = 0;
 } else {
  remainedDOM.style.visibility = 'visible';
  litersDOM.innerText = `${2-(250 * fullCups / 1000)}L`
 }
}