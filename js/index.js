/* Set the width of the side navigation to 15% */
function toggleNav() {
  if ( document.getElementById("mysidenav").style.width != "0px" ) {
  document.getElementById("mysidenav").style.width = "0px";
  document.getElementById("togglebutton").style.left = "0px";
  } else { 
  document.getElementById("mysidenav").style.width = "15%";
  document.getElementById("togglebutton").style.left = "15%";
  }  
}

/* Set the width of the side navigation to 0 */
function closeNav() {
  document.getElementById("mysidenav").style.width = "0";
} 