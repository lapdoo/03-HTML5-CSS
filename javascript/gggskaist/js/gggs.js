let gnb = document.querySelectorAll(".menu li");
let lnb = document.querySelectorAll(".lnb");
let sub = document.querySelectorAll(".sub");

function myfnc() {
  lnb.forEach(function (keys, items) {
    keys.style.height = 0 + "px";
  });
  document.querySelector("header").style.background = "none";
  document.querySelector(".logo").classList.remove("on");
}
gnb.forEach(function (keys, items) {
  keys.onmouseenter = function () {
    sub.forEach(function (o, i) {
      let ht = sub[item].offsetHeight;
      lnb[item].style.height = ht + "px";
    });
    document.querySelector("header").style.background = "#fff";
    document.querySelector(".logo").classList.add("on");
  };
  keys.onmouseleave = function () {
    myfnc();
  };
});
