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


    console.log('shit');
    createTag('div','row','column','row-1');
