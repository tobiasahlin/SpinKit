/*!
  * Spinkit v1.1.0
  * Copyright 2016-2018
  * Author Bradley Ramdeen
  */
//must reference Jquery before this script can execute
if (typeof (jQuery) === 'undefined') {
    throw new Error('SpinKit requires jQuery');
}

(function () {
    $.fn.spinkit = function (userOptions) {
        //if destroy is option find all spinner objects and remove
        if (userOptions == 'destroy') {
            //look for overlay to see if it was created
            var _overlay = $('.sk-page-overlay');

            if (_overlay.length > 0) {
                _overlay.remove();
            }

            //apply to all elements
            this.each(function () {
                //find spinners and destroy them
                $(this).children('.sk').remove();
            });
        }
        else { //json options submitted
            //setup options
            var _options = $.extend({}, $.fn.waiting.defaults, userOptions);

            //initialize waiting element
            var _spinkit;

            //check to see setTo property
            if (_options.useOverlay) {
                //create overlay
                _overlay = createPageOverlay();

                //set _spinkit to overlay
                _spinkit = _overlay;
            }
            else {
                _spinkit = this.first();
            }

            //get spinnner
            var _spinner = getSpinner();

            //insert into element
            _spinkit.append(_spinner);
        }

        //gets the type of spinner needed to render
        function getSpinner() {
            return $.fn.spinkit.templates[_options.spinner];
        }

        function createPageOverlay(){
            var overlay = $("<div class='sk-page-overlay'></div>");
            $('body').append(overlay);

            return overlay;
        }
    };

    $.fn.spinkit.templates = {
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

    $.fn.spinkit.defaults = { 'spinner': 'wave', 'setTo': 'default', 'color': 'default' };
})(jQuery);