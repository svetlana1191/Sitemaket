$(window).scroll(function () {
        if ($(this).scrollTop() > 0) {
            $('.top').fadeIn();
        } else {
            $('.top').fadeOut();
        }
    });
    $(function(){
         $('.top').click(function () {
    	 $('body,html').animate({
            scrollTop: 0
        }, 1000);
        });
});

let selected;
let menu = document.querySelector("ul.menu")
menu.addEventListener("click", function(event) {
  let targ = event.target; // где был клик?

  if (targ.tagName != 'LI') return; // не на TD? тогда не надо

  highlight(targ); // подсветить TD
});

function highlight(node) {
  if (selected) {
    selected.classList.remove('active');
  }
  selected = node;
  selected.classList.add('active');
}