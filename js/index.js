function toggleNav() {
  let root = document.documentElement;
  var myval = getComputedStyle(root)
    .getPropertyValue('--side-navigation-bar-fix-width');
  var myval2 = getComputedStyle(document.documentElement).getPropertyValue('--side-navigation-bar-width');
  console.log(myval2);

  if ( getComputedStyle(document.documentElement).getPropertyValue('--side-navigation-bar-width') != "0vw" ) {
  root.style.setProperty('--side-navigation-bar-width',"0vw");
  document.getElementById("nav-profilepic").style.opacity = 0;
  document.getElementById("nav-links").style.opacity = 0;
  document.getElementById("nav-socicons").style.opacity = 0;
  //console.log('0');
  } else {
  root.style.setProperty('--side-navigation-bar-width',myval);
  document.getElementById("nav-profilepic").style.opacity = 1;
  document.getElementById("nav-links").style.opacity = 1;
  document.getElementById("nav-socicons").style.opacity = 1;
  //console.log('1');
  }
}

document.body.addEventListener("keydown", function (event) {
    	if (event.key === "h") {
        	window.location.assign("/");
    	}
	if (event.key === "a") {
        	window.location.assign("/aboutme");
    	}
    	if (event.key === "c") {
        	window.location.assign("/contacts");
    	}
	if (event.key === "j") {
        	window.location.assign("/job");
    	}
	if (event.key === "p") {
        	window.location.assign("/projects");
    	}
	if (event.key === "w") {
        	window.location.assign("/wiki");
    	}
});
