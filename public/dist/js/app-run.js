(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(
    function () {
		// outer width
		function getWidth(el) {
			return Math.max($(el).width(), $(el).outerWidth());
		}

    	// window on load
		// $(window).on('load', function () {
		// 	$('body').addClass('active');
		// });

        $('body').delay(2000).addClass('active');

        // footer
        $('.b-footer__btn').on('click', function () {
            $(this).toggleClass('b-footer__btn_active');
            $('.b-footer__text').toggleClass('b-footer__text_active');
        });

        // add current slide after load
        $('.pt-page[data-slide="about-me"]').addClass('pt-page-current');

        // change slide : begin
        $('.b-nav__link').on('click', function () {
            var dataSlide = $(this).data('slide');

            // if link has active class
            if ($(this).hasClass('b-nav__link_active')) {
                return false;
            }

            // controls
            $('.b-nav__link').each(function (index, element) {
                $(this).removeClass('b-nav__link_active')
            });
            $(this).addClass('b-nav__link_active');

            // for current page. add animate class and remove animate and current classes for current page
            $('.pt-page-current')
                .addClass('pt-page-rotateRoomTopOut pt-page-ontop')
                .delay(800)
                .queue(function () {
                    $(this).removeClass('pt-page-current pt-page-rotateRoomTopOut pt-page-ontop');
                });

			// all page NOT current. remove animate and current classes for all page
            $('.pt-page')
                .not('.pt-page-current')
                .each(function () {
                    $(this).removeClass('pt-page-current pt-page-rotateRoomTopIn').dequeue();
                });

            // dataSlide page. add class current and animate classes, remove animate class
            $('.pt-page[data-slide="' + dataSlide + '"]')
                .addClass('pt-page-current pt-page-rotateRoomTopIn')
                .delay(800)
                .queue(function () {
                    $(this).removeClass('pt-page-rotateRoomTopIn').dequeue();
                });
        });
		// change slide : end

		// audio player : begin
        function playAudio(element) {
            $('.b-content__btn_play').on('click', function () {
				var data = $(this).data('audio');
                var sounds = document.getElementsByTagName('audio');

                for(i = 0; i<sounds.length; i++) {
                    sounds[i].pause();
					$('.b-content__btn_pause.b-content__btn_active').prev('div').addClass('b-content__btn_active');
                    $('.b-content__btn_pause.b-content__btn_active').eq(i).removeClass('b-content__btn_active');
				}

                document.getElementById(data).play();

                $(this).toggleClass('b-content__btn_active');
                $(this).next('div').toggleClass('b-content__btn_active');
			});
		}
		function pauseAudio(element) {
			$('.b-content__btn_pause').on('click', function () {
				var data = $(this).data('audio');

				document.getElementById(data).pause();

				$(this).toggleClass('b-content__btn_active');
				$(this).prev('div').toggleClass('b-content__btn_active');
			});
		}

		playAudio();
		pauseAudio();
		// audio player : end

		// perfect scroll
		// $('.b-content').each(function () {
		// 	$(this).perfectScrollbar();
		// });
	}()
);

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJwdWJsaWMvYXBwLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiKFxuICAgIGZ1bmN0aW9uICgpIHtcblx0XHQvLyBvdXRlciB3aWR0aFxuXHRcdGZ1bmN0aW9uIGdldFdpZHRoKGVsKSB7XG5cdFx0XHRyZXR1cm4gTWF0aC5tYXgoJChlbCkud2lkdGgoKSwgJChlbCkub3V0ZXJXaWR0aCgpKTtcblx0XHR9XG5cbiAgICBcdC8vIHdpbmRvdyBvbiBsb2FkXG5cdFx0Ly8gJCh3aW5kb3cpLm9uKCdsb2FkJywgZnVuY3Rpb24gKCkge1xuXHRcdC8vIFx0JCgnYm9keScpLmFkZENsYXNzKCdhY3RpdmUnKTtcblx0XHQvLyB9KTtcblxuICAgICAgICAkKCdib2R5JykuZGVsYXkoMjAwMCkuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuXG4gICAgICAgIC8vIGZvb3RlclxuICAgICAgICAkKCcuYi1mb290ZXJfX2J0bicpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICQodGhpcykudG9nZ2xlQ2xhc3MoJ2ItZm9vdGVyX19idG5fYWN0aXZlJyk7XG4gICAgICAgICAgICAkKCcuYi1mb290ZXJfX3RleHQnKS50b2dnbGVDbGFzcygnYi1mb290ZXJfX3RleHRfYWN0aXZlJyk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIGFkZCBjdXJyZW50IHNsaWRlIGFmdGVyIGxvYWRcbiAgICAgICAgJCgnLnB0LXBhZ2VbZGF0YS1zbGlkZT1cImFib3V0LW1lXCJdJykuYWRkQ2xhc3MoJ3B0LXBhZ2UtY3VycmVudCcpO1xuXG4gICAgICAgIC8vIGNoYW5nZSBzbGlkZSA6IGJlZ2luXG4gICAgICAgICQoJy5iLW5hdl9fbGluaycpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBkYXRhU2xpZGUgPSAkKHRoaXMpLmRhdGEoJ3NsaWRlJyk7XG5cbiAgICAgICAgICAgIC8vIGlmIGxpbmsgaGFzIGFjdGl2ZSBjbGFzc1xuICAgICAgICAgICAgaWYgKCQodGhpcykuaGFzQ2xhc3MoJ2ItbmF2X19saW5rX2FjdGl2ZScpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBjb250cm9sc1xuICAgICAgICAgICAgJCgnLmItbmF2X19saW5rJykuZWFjaChmdW5jdGlvbiAoaW5kZXgsIGVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKCdiLW5hdl9fbGlua19hY3RpdmUnKVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAkKHRoaXMpLmFkZENsYXNzKCdiLW5hdl9fbGlua19hY3RpdmUnKTtcblxuICAgICAgICAgICAgLy8gZm9yIGN1cnJlbnQgcGFnZS4gYWRkIGFuaW1hdGUgY2xhc3MgYW5kIHJlbW92ZSBhbmltYXRlIGFuZCBjdXJyZW50IGNsYXNzZXMgZm9yIGN1cnJlbnQgcGFnZVxuICAgICAgICAgICAgJCgnLnB0LXBhZ2UtY3VycmVudCcpXG4gICAgICAgICAgICAgICAgLmFkZENsYXNzKCdwdC1wYWdlLXJvdGF0ZVJvb21Ub3BPdXQgcHQtcGFnZS1vbnRvcCcpXG4gICAgICAgICAgICAgICAgLmRlbGF5KDgwMClcbiAgICAgICAgICAgICAgICAucXVldWUoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKCdwdC1wYWdlLWN1cnJlbnQgcHQtcGFnZS1yb3RhdGVSb29tVG9wT3V0IHB0LXBhZ2Utb250b3AnKTtcbiAgICAgICAgICAgICAgICB9KTtcblxuXHRcdFx0Ly8gYWxsIHBhZ2UgTk9UIGN1cnJlbnQuIHJlbW92ZSBhbmltYXRlIGFuZCBjdXJyZW50IGNsYXNzZXMgZm9yIGFsbCBwYWdlXG4gICAgICAgICAgICAkKCcucHQtcGFnZScpXG4gICAgICAgICAgICAgICAgLm5vdCgnLnB0LXBhZ2UtY3VycmVudCcpXG4gICAgICAgICAgICAgICAgLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKCdwdC1wYWdlLWN1cnJlbnQgcHQtcGFnZS1yb3RhdGVSb29tVG9wSW4nKS5kZXF1ZXVlKCk7XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIC8vIGRhdGFTbGlkZSBwYWdlLiBhZGQgY2xhc3MgY3VycmVudCBhbmQgYW5pbWF0ZSBjbGFzc2VzLCByZW1vdmUgYW5pbWF0ZSBjbGFzc1xuICAgICAgICAgICAgJCgnLnB0LXBhZ2VbZGF0YS1zbGlkZT1cIicgKyBkYXRhU2xpZGUgKyAnXCJdJylcbiAgICAgICAgICAgICAgICAuYWRkQ2xhc3MoJ3B0LXBhZ2UtY3VycmVudCBwdC1wYWdlLXJvdGF0ZVJvb21Ub3BJbicpXG4gICAgICAgICAgICAgICAgLmRlbGF5KDgwMClcbiAgICAgICAgICAgICAgICAucXVldWUoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKCdwdC1wYWdlLXJvdGF0ZVJvb21Ub3BJbicpLmRlcXVldWUoKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG5cdFx0Ly8gY2hhbmdlIHNsaWRlIDogZW5kXG5cblx0XHQvLyBhdWRpbyBwbGF5ZXIgOiBiZWdpblxuICAgICAgICBmdW5jdGlvbiBwbGF5QXVkaW8oZWxlbWVudCkge1xuICAgICAgICAgICAgJCgnLmItY29udGVudF9fYnRuX3BsYXknKS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdHZhciBkYXRhID0gJCh0aGlzKS5kYXRhKCdhdWRpbycpO1xuICAgICAgICAgICAgICAgIHZhciBzb3VuZHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnYXVkaW8nKTtcblxuICAgICAgICAgICAgICAgIGZvcihpID0gMDsgaTxzb3VuZHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgc291bmRzW2ldLnBhdXNlKCk7XG5cdFx0XHRcdFx0JCgnLmItY29udGVudF9fYnRuX3BhdXNlLmItY29udGVudF9fYnRuX2FjdGl2ZScpLnByZXYoJ2RpdicpLmFkZENsYXNzKCdiLWNvbnRlbnRfX2J0bl9hY3RpdmUnKTtcbiAgICAgICAgICAgICAgICAgICAgJCgnLmItY29udGVudF9fYnRuX3BhdXNlLmItY29udGVudF9fYnRuX2FjdGl2ZScpLmVxKGkpLnJlbW92ZUNsYXNzKCdiLWNvbnRlbnRfX2J0bl9hY3RpdmUnKTtcblx0XHRcdFx0fVxuXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZGF0YSkucGxheSgpO1xuXG4gICAgICAgICAgICAgICAgJCh0aGlzKS50b2dnbGVDbGFzcygnYi1jb250ZW50X19idG5fYWN0aXZlJyk7XG4gICAgICAgICAgICAgICAgJCh0aGlzKS5uZXh0KCdkaXYnKS50b2dnbGVDbGFzcygnYi1jb250ZW50X19idG5fYWN0aXZlJyk7XG5cdFx0XHR9KTtcblx0XHR9XG5cdFx0ZnVuY3Rpb24gcGF1c2VBdWRpbyhlbGVtZW50KSB7XG5cdFx0XHQkKCcuYi1jb250ZW50X19idG5fcGF1c2UnKS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdHZhciBkYXRhID0gJCh0aGlzKS5kYXRhKCdhdWRpbycpO1xuXG5cdFx0XHRcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGRhdGEpLnBhdXNlKCk7XG5cblx0XHRcdFx0JCh0aGlzKS50b2dnbGVDbGFzcygnYi1jb250ZW50X19idG5fYWN0aXZlJyk7XG5cdFx0XHRcdCQodGhpcykucHJldignZGl2JykudG9nZ2xlQ2xhc3MoJ2ItY29udGVudF9fYnRuX2FjdGl2ZScpO1xuXHRcdFx0fSk7XG5cdFx0fVxuXG5cdFx0cGxheUF1ZGlvKCk7XG5cdFx0cGF1c2VBdWRpbygpO1xuXHRcdC8vIGF1ZGlvIHBsYXllciA6IGVuZFxuXG5cdFx0Ly8gcGVyZmVjdCBzY3JvbGxcblx0XHQvLyAkKCcuYi1jb250ZW50JykuZWFjaChmdW5jdGlvbiAoKSB7XG5cdFx0Ly8gXHQkKHRoaXMpLnBlcmZlY3RTY3JvbGxiYXIoKTtcblx0XHQvLyB9KTtcblx0fSgpXG4pO1xuIl19
