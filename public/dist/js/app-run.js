(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(
    function () {
		// outer width
		function getWidth(el) {
			return Math.max($(el).width(), $(el).outerWidth());
		}

    	// window on load
		$(window).on('load', function () {
			var windowWidth = getWidth(document);
			// console
			$('body').addClass('active');
		});

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
		$('.b-content').each(function () {
			$(this).perfectScrollbar();
		});
	}()
);

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJwdWJsaWMvYXBwLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiKFxuICAgIGZ1bmN0aW9uICgpIHtcblx0XHQvLyBvdXRlciB3aWR0aFxuXHRcdGZ1bmN0aW9uIGdldFdpZHRoKGVsKSB7XG5cdFx0XHRyZXR1cm4gTWF0aC5tYXgoJChlbCkud2lkdGgoKSwgJChlbCkub3V0ZXJXaWR0aCgpKTtcblx0XHR9XG5cbiAgICBcdC8vIHdpbmRvdyBvbiBsb2FkXG5cdFx0JCh3aW5kb3cpLm9uKCdsb2FkJywgZnVuY3Rpb24gKCkge1xuXHRcdFx0dmFyIHdpbmRvd1dpZHRoID0gZ2V0V2lkdGgoZG9jdW1lbnQpO1xuXHRcdFx0Ly8gY29uc29sZVxuXHRcdFx0JCgnYm9keScpLmFkZENsYXNzKCdhY3RpdmUnKTtcblx0XHR9KTtcblxuICAgICAgICAvLyBmb290ZXJcbiAgICAgICAgJCgnLmItZm9vdGVyX19idG4nKS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAkKHRoaXMpLnRvZ2dsZUNsYXNzKCdiLWZvb3Rlcl9fYnRuX2FjdGl2ZScpO1xuICAgICAgICAgICAgJCgnLmItZm9vdGVyX190ZXh0JykudG9nZ2xlQ2xhc3MoJ2ItZm9vdGVyX190ZXh0X2FjdGl2ZScpO1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyBhZGQgY3VycmVudCBzbGlkZSBhZnRlciBsb2FkXG4gICAgICAgICQoJy5wdC1wYWdlW2RhdGEtc2xpZGU9XCJhYm91dC1tZVwiXScpLmFkZENsYXNzKCdwdC1wYWdlLWN1cnJlbnQnKTtcblxuICAgICAgICAvLyBjaGFuZ2Ugc2xpZGUgOiBiZWdpblxuICAgICAgICAkKCcuYi1uYXZfX2xpbmsnKS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgZGF0YVNsaWRlID0gJCh0aGlzKS5kYXRhKCdzbGlkZScpO1xuXG4gICAgICAgICAgICAvLyBpZiBsaW5rIGhhcyBhY3RpdmUgY2xhc3NcbiAgICAgICAgICAgIGlmICgkKHRoaXMpLmhhc0NsYXNzKCdiLW5hdl9fbGlua19hY3RpdmUnKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gY29udHJvbHNcbiAgICAgICAgICAgICQoJy5iLW5hdl9fbGluaycpLmVhY2goZnVuY3Rpb24gKGluZGV4LCBlbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgJCh0aGlzKS5yZW1vdmVDbGFzcygnYi1uYXZfX2xpbmtfYWN0aXZlJylcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygnYi1uYXZfX2xpbmtfYWN0aXZlJyk7XG5cbiAgICAgICAgICAgIC8vIGZvciBjdXJyZW50IHBhZ2UuIGFkZCBhbmltYXRlIGNsYXNzIGFuZCByZW1vdmUgYW5pbWF0ZSBhbmQgY3VycmVudCBjbGFzc2VzIGZvciBjdXJyZW50IHBhZ2VcbiAgICAgICAgICAgICQoJy5wdC1wYWdlLWN1cnJlbnQnKVxuICAgICAgICAgICAgICAgIC5hZGRDbGFzcygncHQtcGFnZS1yb3RhdGVSb29tVG9wT3V0IHB0LXBhZ2Utb250b3AnKVxuICAgICAgICAgICAgICAgIC5kZWxheSg4MDApXG4gICAgICAgICAgICAgICAgLnF1ZXVlKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgJCh0aGlzKS5yZW1vdmVDbGFzcygncHQtcGFnZS1jdXJyZW50IHB0LXBhZ2Utcm90YXRlUm9vbVRvcE91dCBwdC1wYWdlLW9udG9wJyk7XG4gICAgICAgICAgICAgICAgfSk7XG5cblx0XHRcdC8vIGFsbCBwYWdlIE5PVCBjdXJyZW50LiByZW1vdmUgYW5pbWF0ZSBhbmQgY3VycmVudCBjbGFzc2VzIGZvciBhbGwgcGFnZVxuICAgICAgICAgICAgJCgnLnB0LXBhZ2UnKVxuICAgICAgICAgICAgICAgIC5ub3QoJy5wdC1wYWdlLWN1cnJlbnQnKVxuICAgICAgICAgICAgICAgIC5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgJCh0aGlzKS5yZW1vdmVDbGFzcygncHQtcGFnZS1jdXJyZW50IHB0LXBhZ2Utcm90YXRlUm9vbVRvcEluJykuZGVxdWV1ZSgpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyBkYXRhU2xpZGUgcGFnZS4gYWRkIGNsYXNzIGN1cnJlbnQgYW5kIGFuaW1hdGUgY2xhc3NlcywgcmVtb3ZlIGFuaW1hdGUgY2xhc3NcbiAgICAgICAgICAgICQoJy5wdC1wYWdlW2RhdGEtc2xpZGU9XCInICsgZGF0YVNsaWRlICsgJ1wiXScpXG4gICAgICAgICAgICAgICAgLmFkZENsYXNzKCdwdC1wYWdlLWN1cnJlbnQgcHQtcGFnZS1yb3RhdGVSb29tVG9wSW4nKVxuICAgICAgICAgICAgICAgIC5kZWxheSg4MDApXG4gICAgICAgICAgICAgICAgLnF1ZXVlKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgJCh0aGlzKS5yZW1vdmVDbGFzcygncHQtcGFnZS1yb3RhdGVSb29tVG9wSW4nKS5kZXF1ZXVlKCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuXHRcdC8vIGNoYW5nZSBzbGlkZSA6IGVuZFxuXG5cdFx0Ly8gYXVkaW8gcGxheWVyIDogYmVnaW5cbiAgICAgICAgZnVuY3Rpb24gcGxheUF1ZGlvKGVsZW1lbnQpIHtcbiAgICAgICAgICAgICQoJy5iLWNvbnRlbnRfX2J0bl9wbGF5Jykub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuXHRcdFx0XHR2YXIgZGF0YSA9ICQodGhpcykuZGF0YSgnYXVkaW8nKTtcbiAgICAgICAgICAgICAgICB2YXIgc291bmRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2F1ZGlvJyk7XG5cbiAgICAgICAgICAgICAgICBmb3IoaSA9IDA7IGk8c291bmRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIHNvdW5kc1tpXS5wYXVzZSgpO1xuXHRcdFx0XHRcdCQoJy5iLWNvbnRlbnRfX2J0bl9wYXVzZS5iLWNvbnRlbnRfX2J0bl9hY3RpdmUnKS5wcmV2KCdkaXYnKS5hZGRDbGFzcygnYi1jb250ZW50X19idG5fYWN0aXZlJyk7XG4gICAgICAgICAgICAgICAgICAgICQoJy5iLWNvbnRlbnRfX2J0bl9wYXVzZS5iLWNvbnRlbnRfX2J0bl9hY3RpdmUnKS5lcShpKS5yZW1vdmVDbGFzcygnYi1jb250ZW50X19idG5fYWN0aXZlJyk7XG5cdFx0XHRcdH1cblxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGRhdGEpLnBsYXkoKTtcblxuICAgICAgICAgICAgICAgICQodGhpcykudG9nZ2xlQ2xhc3MoJ2ItY29udGVudF9fYnRuX2FjdGl2ZScpO1xuICAgICAgICAgICAgICAgICQodGhpcykubmV4dCgnZGl2JykudG9nZ2xlQ2xhc3MoJ2ItY29udGVudF9fYnRuX2FjdGl2ZScpO1xuXHRcdFx0fSk7XG5cdFx0fVxuXHRcdGZ1bmN0aW9uIHBhdXNlQXVkaW8oZWxlbWVudCkge1xuXHRcdFx0JCgnLmItY29udGVudF9fYnRuX3BhdXNlJykub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuXHRcdFx0XHR2YXIgZGF0YSA9ICQodGhpcykuZGF0YSgnYXVkaW8nKTtcblxuXHRcdFx0XHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZChkYXRhKS5wYXVzZSgpO1xuXG5cdFx0XHRcdCQodGhpcykudG9nZ2xlQ2xhc3MoJ2ItY29udGVudF9fYnRuX2FjdGl2ZScpO1xuXHRcdFx0XHQkKHRoaXMpLnByZXYoJ2RpdicpLnRvZ2dsZUNsYXNzKCdiLWNvbnRlbnRfX2J0bl9hY3RpdmUnKTtcblx0XHRcdH0pO1xuXHRcdH1cblxuXHRcdHBsYXlBdWRpbygpO1xuXHRcdHBhdXNlQXVkaW8oKTtcblx0XHQvLyBhdWRpbyBwbGF5ZXIgOiBlbmRcblxuXHRcdC8vIHBlcmZlY3Qgc2Nyb2xsXG5cdFx0JCgnLmItY29udGVudCcpLmVhY2goZnVuY3Rpb24gKCkge1xuXHRcdFx0JCh0aGlzKS5wZXJmZWN0U2Nyb2xsYmFyKCk7XG5cdFx0fSk7XG5cdH0oKVxuKTtcbiJdfQ==
