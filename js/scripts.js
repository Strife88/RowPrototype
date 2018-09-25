//need to make 3 rows
//on row click - expand row
//on row click - change image to variable
//on each iteration - change variable

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
    
/*    for(i=0;i< container.length;i++) {
 container[i].appendChild(element);
 }
 */
};

for(i=1;i<4;i++){
    createTag('div','row','column','row-'+i);
    var currentSelector = document.getElementById("row-"+i);
//addImage based on iterator
    currentSelector.style.background = "url('../RowPrototype/images/Card-Normal-"+ i +".png')";
}

var cardContainer = document.getElementById("container");
var btns = cardContainer.getElementsByClassName("row");

// Loop through the buttons and add the active class to the current/clicked row element
for (var i = 0; i < btns.length; i++) {
btns[i].addEventListener("click", function() {
  this.classList.toggle("active");
    if(this.classList == "row active"){
    this.style.background = "url('../RowPrototype/images/Card-Expanded-"+ this.getAttribute("id").slice(-1) +".png')";
    }
    else {
    this.style.background = "url('../RowPrototype/images/Card-Normal-"+ this.getAttribute("id").slice(-1) +".png')";    
}
}
);

};


//need to fallback to previous image. 
