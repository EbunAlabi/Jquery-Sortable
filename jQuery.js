
let pos0= document.getElementById("0");
let pos1= document.getElementById("1");
let pos2= document.getElementById("2");
let pos3= document.getElementById("3");
let pos4= document.getElementById("4");
let pos5= document.getElementById("5");
let pos6= document.getElementById("6");

let array = [pos0, pos1,pos2,pos3, pos4, pos5, pos6];

let newArray = [];
let listElement = [];



var $sortableList = $("#sortable");
var sortEventHandler = function(event, ui){
    console.log("New sort order!  ");
    $sortableList.sortable( "refreshPositions" );
    var sortedIDs = $sortableList.sortable( "toArray" );
    console.log('These are sortedIDS; ',sortedIDs);
    $( "span" ).each(function( index ) {
        if ( this.innerHTML !== index ) {
            this.innerHTML = index + 1 + " -";
          } else {
            this.innerHTML = "hey";
          }  
    });
    
};
$sortableList.sortable({
    stop: sortEventHandler
});

  


