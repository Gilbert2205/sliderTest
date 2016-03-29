var slider_nav_holder = document.querySelector(".slider_nav_holder");
var slider_nav = document.querySelector('.slider_nav');
var sliderItemWidth = slider_nav.firstElementChild.offsetWidth + parseInt(getComputedStyle(slider_nav.firstElementChild).marginRight);
console.log(sliderItemWidth)
slider_nav_holder.style.cssText = "width: "+sliderItemWidth*3+"px; margin: 0 auto; margin-bottom:30px";
console.log(getComputedStyle(slider_nav_holder).width) 
slider_nav.style.cssText = "width: "+slider_nav.children.length * sliderItemWidth+"px";
var node = null;
var preview = document.querySelector('.preview');
var button = document.querySelector('.buttons')
button.onclick = function(e){
	var target = e && e.target || window.event.srcElement;
	var dataAttr = target.getAttribute('data-attr');
	if(dataAttr == 'Next'){		
		node = slider_nav.firstElementChild;
		node.classList.add('slider__item_active');
		console.log(node.src)
		node = node.nextElementSibling;
		console.log(node.src)
		node.classList.add('slider__item_active');
		node.previousElementSibling.classList.remove('slider__item_active');
		console.log(node.src)
		var cloning = slider_nav.firstElementChild;
		var cloned = cloning.cloneNode(true);
		slider_nav.appendChild(cloned);			
		slider_nav.style.cssText += "left: "+(-sliderItemWidth)+"px";
		slider_nav.removeChild(cloning);
			
		}reset();

	}
	function reset() {
	 	slider_nav.style.cssText = 'left: 0; width: '+slider_nav.children.length * sliderItemWidth+'px;';
	 } 

slider_nav.addEventListener('click', newClick);
function newClick(event) {
	var target = event.target;
	console.log(target);
	var attr = target.src;
	preview.setAttribute('src', attr);
}