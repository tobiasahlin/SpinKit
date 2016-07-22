function SpinKit(DOMElement, spinKitType) {
	//set attributes
	var _elementRef = DOMElement;
	var _spinnerName = getSpinnerName(spinKitType);
	
	//get DOM node and spinner
	this.DOMnode = getDOMnode();
	this.spinner = getSpinner();
	
	this.show = function() {
		return this.DOMnode.appendChild(this.spinner);
	}
	
	this.destroy = function(){
		return this.DOMnode.removeChild(this.spinner);
	}
	
	//get spinner name by ensuring supplied type is valid
	function getSpinnerName(spinnerType){
		var spinnerName = "";
		
		switch(spinnerType){
			case "rotatingPlane":
				spinnerName = "rotatingPlane";
				break;
			case "doubleBounce":
				spinnerName = "doubleBounce";
				break;
			case "wanderingCubes":
				spinnerName = "wanderingCubes";
				break;
			case "pulse":
				spinnerName = "pulse";
				break;
			case "chasingDots":
				spinnerName = "chasingDots";
				break;
			case "threeBounce":
				spinnerName = "threeBounce";
				break;
			case "circle":
				spinnerName = "circle";
				break;
			case "cubeGrid":
				spinnerName = "cubeGrid";
				break;
			case "fadingCircle":
				spinnerName = "fadingCircle";
				break;
			case "foldingCube":
				spinnerName = "foldingCube";
				break;
			case "wave":	
			default:
				spinnerName = "wave";
		}
		
		return spinnerName;
	}
	
	//get DOM node based on arguments supplied
	function getDOMnode(){
		//if a dom element is already supplied
		if(typeof(_elementRef) == 'object'){
			return _elementRef;
		}
		else{
			if(_elementRef[0] == '#'){
				return document.getElementById(_elementRef.substr(1));
			}
			else if(_elementRef[0] == '.'){
				//get first element with class type
				return document.getElementsByClassName(_elementRef.substr(1))[0];
			}
			else {
				return document[_elementRef];
			}
		}
	}
	
	//get spinner based on spinner name
	function getSpinner(){
		return HTMLFromString(getTemplate(_spinnerName));
	}
	
	//helper function
	function HTMLFromString(str) {
		var div = document.createElement('div');
		div.innerHTML = str;
		
		var parent = div;
		return div.children[0];
	}
	
	//get template based on spinner name
	function getTemplate(spinner){
		var templates = {
			"rotatingPlane": '<div class="sk sk-rotating-plane"></div>',
			"doubleBounce": '<div class="sk sk-double-bounce"><div class="sk-child sk-double-bounce1"></div><div class="sk-child sk-double-bounce2"></div></div>',
			"wave": '<div class="sk sk-wave"><div class="sk-rect sk-rect1"></div><div class="sk-rect sk-rect2"></div><div class="sk-rect sk-rect3"></div><div class="sk-rect sk-rect4"></div><div class="sk-rect sk-rect5"></div></div>',
			"wanderingCubes": '<div class="sk sk-wandering-cubes"><div class="sk-cube sk-cube1"></div><div class="sk-cube sk-cube2"></div></div>',
			"pulse": '<div class="sk sk-spinner sk-spinner-pulse"></div>',
			"chasingDots": '<div class="sk sk-chasing-dots"><div class="sk-child sk-dot1"></div><div class="sk-child sk-dot2"></div></div>',
			"threeBounce": '<div class="sk sk-three-bounce"><div class="sk-child sk-bounce1"></div><div class="sk-child sk-bounce2"></div><div class="sk-child sk-bounce3"></div></div>',
			"circle": '<div class="sk sk-circle"><div class="sk-circle1 sk-child"></div><div class="sk-circle2 sk-child"></div><div class="sk-circle3 sk-child"></div><div class="sk-circle4 sk-child"></div><div class="sk-circle5 sk-child"></div><div class="sk-circle6 sk-child"></div><div class="sk-circle7 sk-child"></div><div class="sk-circle8 sk-child"></div><div class="sk-circle9 sk-child"></div><div class="sk-circle10 sk-child"></div><div class="sk-circle11 sk-child"></div><div class="sk-circle12 sk-child"></div></div>',
			"cubeGrid": '<div class="sk sk-cube-grid"><div class="sk-cube sk-cube1"></div><div class="sk-cube sk-cube2"></div><div class="sk-cube sk-cube3"></div><div class="sk-cube sk-cube4"></div><div class="sk-cube sk-cube5"></div><div class="sk-cube sk-cube6"></div><div class="sk-cube sk-cube7"></div><div class="sk-cube sk-cube8"></div><div class="sk-cube sk-cube9"></div></div>',
			"fadingCircle": '<div class="sk sk-fading-circle"><div class="sk-circle1 sk-circle"></div><div class="sk-circle2 sk-circle"></div><div class="sk-circle3 sk-circle"></div><div class="sk-circle4 sk-circle"></div><div class="sk-circle5 sk-circle"></div><div class="sk-circle6 sk-circle"></div><div class="sk-circle7 sk-circle"></div><div class="sk-circle8 sk-circle"></div><div class="sk-circle9 sk-circle"></div><div class="sk-circle10 sk-circle"></div><div class="sk-circle11 sk-circle"></div><div class="sk-circle12 sk-circle"></div></div>',
			"foldingCube": '<div class="sk sk-folding-cube"><div class="sk-cube1 sk-cube"></div><div class="sk-cube2 sk-cube"></div><div class="sk-cube4 sk-cube"></div><div class="sk-cube3 sk-cube"></div></div>'
		};
		
		return templates[spinner];
	}
}