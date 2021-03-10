const callForm = document.querySelector('#callForm')
const kmacbForm = document.querySelector('#kmacb-form')
const kmf = document.querySelector('#kmf')
const kmf_Flex = document.querySelector('#kmacb-form-flex')
const grid__item1 = document.querySelector('.grid__item1')
const grid__item2 = document.querySelector('.grid__item2')
const grid__item3 = document.querySelector('.grid__item3')
const grid__item4 = document.querySelector('.grid__item4')
const grid__item5 = document.querySelector('.grid__item5')
const iconClose = document.querySelector('.icon-close')
const kmacbcli = document.querySelector('#kmacbcli')
const html  = document.querySelector('html')
const body  = document.querySelector('body')
kmf.style.top = `0px`
kmf.style.left = `0px`


function disableScrolling(){
	var x=window.scrollX;
	var y=window.scrollY;
	window.onscroll=function(){window.scrollTo(x, y);};
}

function enableScrolling(){
	window.onscroll=function(){};
}


callForm.addEventListener('click', (event) => {
  // kmacbForm.style.display = 'block'
	kmacbForm.style.display = 'grid'
	kmacbForm.style.gridTemplate = "1fr 550px 1fr / 1fr 460px 1fr"
	kmacbForm.style.gridTemplateAreas = "'header header header' 'block-1 block-2 block-3' 'footer footer footer'"
	disableScrolling()
	body.style.paddingRight= "17px"
	html.style.overflow= "hidden";
})


kmacbcli.addEventListener('click', (event) => {
	kmacbForm.style.display = 'grid'
	kmacbForm.style.gridTemplate = "1fr 550px 1fr / 1fr 460px 1fr"
	kmacbForm.style.gridTemplateAreas = "'header header header' 'block-1 block-2 block-3' 'footer footer footer'"
	disableScrolling()
	body.style.paddingRight= "17px"
	html.style.overflow= "hidden";
})
//position: relative;
//z-index: 2;
grid__item1.addEventListener('click', (event) => {
	enableScrolling()
	body.style.paddingRight= "0px"
	html.style.overflow= "auto ";
	kmacbForm.style.display = 'none'
})
grid__item2.addEventListener('click', (event) => {
	body.style.paddingRight= "0px"
	enableScrolling()
	html.style.overflow= "auto ";
	kmacbForm.style.display = 'none'
})
grid__item4.addEventListener('click', (event) => {
	body.style.paddingRight= "0px"
	enableScrolling()
	html.style.overflow= "auto ";
	kmacbForm.style.display = 'none'
})
grid__item5.addEventListener('click', (event) => {
	body.style.paddingRight= "0px"
	enableScrolling()
	html.style.overflow= "auto ";
	kmacbForm.style.display = 'none'
})
iconClose.addEventListener('click', (event) => {
	body.style.paddingRight= "0px"
	enableScrolling()
	html.style.overflow= "auto ";
	kmacbForm.style.display = 'none'
})