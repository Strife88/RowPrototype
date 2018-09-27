
//imageResolutions
var desktopM = window.matchMedia("(min-width:1366px)")
var desktopL =  window.matchMedia("(min-width:1920px)")

//creation of object
var createTag = function(tag,classname,parent,id,text) {
 var element = document.createElement(tag);
 if(classname) {
 element.classList.add(classname);
 }
 if(text){
 element.innerHTML = text;
 }
 if(id){  
 element.setAttribute("id", id);     
 }
 var container = document.getElementsByClassName(parent);
 container[0].appendChild(element)
};

//create row items and embed resolution specific image
var createRows = function(imageRes) {
for(i=1;i<9;i++){
    createTag('div','row','column','row-'+i);
    var currentSelector = document.getElementById("row-"+i);
//addImage based on iterator
    currentSelector.style.background = "url('../images/Card-"+imageRes+"-Normal-"+ i +".png')";
}
}

var cardContainer = document.getElementById("container");
var btns = cardContainer.getElementsByClassName("row");

// Loop through the buttons and add the active class to the current/clicked row element

var rowAction = function (imageRes) {
for (var i = 0; i < btns.length; i++) {
btns[i].addEventListener("click", function() {
  this.classList.toggle("active");
    if(this.classList == "row active"){
    this.style.background = "url('../images/Card-"+imageRes+"-Expanded-"+ this.getAttribute("id").slice(-1) +".png')";
    }
    else {
    this.style.background = "url('../images/Card-"+imageRes+"-Normal-"+ this.getAttribute("id").slice(-1) +".png')";    
}
}
)
}
}

//check screensize and generate appropriate image
if(desktopL.matches){
   createRows(1920);
   rowAction(1920);
}
else if(desktopM.matches){
   createRows(1366);
   rowAction(1366);
}
else {
    createRows(1024);
    rowAction(1024);
}


createTag('div','days','column','day');
createTag('div','month','column','month');
var dayTag = document.getElementById("day");
var monthTag = document.getElementById("month");
cardContainer.insertBefore(dayTag,cardContainer.children[0]);

cardContainer.insertBefore(monthTag,cardContainer.children[5]);
//need to fallback to previous image. 
