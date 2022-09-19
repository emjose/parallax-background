var scene = document.getElementById("scene");

if (typeof Parallax == "function") var parallax = new Parallax(scene);

if (typeof $.fn.parallax == "function") $(".parallax-window").parallax();
