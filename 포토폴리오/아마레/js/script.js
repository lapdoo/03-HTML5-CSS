var swiper = new Swiper(".mySwiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  slidesPerView: 1,
  spaceBetween: 20,
  effect: "fade",
  loop: true,
  autoplay: {
    delay: 5000,
    pauseOnMouseEnter: true,
  },
});
var swiper2 = new Swiper(".mySwiper2", {
  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  slidesPerView: 1,
  spaceBetween: 20,
  effect: "fade",
  loop: true,
  autoplay: {
    delay: 5000,
    pauseOnMouseEnter: true,
  },
  on: {
    slideChange: function () {
      let i = this.activeIndex;
      console.log(i);
      $(".innerWrap .inner").eq(i).find(".rightImg").addClass("on");
      $(".innerWrap .inner").eq(i).find("P").addClass("on");
    },
  },
});
$(".BottomImg > .btn_bottom > div:first-child").click(function () {
  var $this = $(this);
  var $slider = $this.closest(".BottomImg");
  var $current = $slider.find(".page-nav > div.active");
  var $post = $current.prev();
  if ($post.length == 0) {
    $post = $slider.find(".page-nav > div:last-child");
  }
  $post.click();
});
$(".slider-2 > .side-btns > div:last-child").click(function () {
  var $this = $(this);
  var $slider = $this.closest(".slider-2");
  var $current = $slider.find(".page-nav > div.active");
  var $post = $current.next();
  if ($post.length == 0) {
    $post = $slider.find(".page-nav > div:first-child");
  }
  $post.click();
});
