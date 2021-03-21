var c4 = $('.counter');

c4.circleProgress({
  startAngle: -Math.PI / 4 * 3,
  value: 0.8,
  lineCap: 'round',
  fill: {color: '#EC2121'},
  emptyFill: "#FBD3D3",
  size: 84,
  thickness: 10,
  startAngle: 0
});

$(function() {
    // copy content to clipboard
    function copyToClipboard(element) {
      var $temp = $("<input>");
      $("body").append($temp);
      $temp.val($(element).text()).select();
      document.execCommand("copy");
      $temp.remove();
    }
  
    // copy coupone code to clipboard
    $(".adress-btn").on("click", function() {
      copyToClipboard("#adress-field");
      $(".coupon-alert").fadeIn("slow");
    });
  });

  
/* Smooth Scroll */
$("[data-scroll]").on("click", function(event) {
  event.preventDefault();
      
    let elementId = $(this).data(`scroll`);
    let elementOffset = $(elementId).offset().top;
              
$("html, body").animate({
  scrollTop: elementOffset - 50
  }, 600);
});  