$("#vaccination-section").click(function() {
    $('html, body').animate({
        scrollTop: $("#my_vaccination").offset().top
    }, 1000);
});

$("#baby-section").click(function() {
    $('html, body').animate({
        scrollTop: $("#baby_food").offset().top
    }, 1000);
});

$(function(){

    $('.radio').click(function() {

        $('input:checkbox').not(this).prop('checked', false);

    })

});

$(function(){
	$('input[type=checkbox]').click();
});

function show (id_disply_none1,id_disply_none2,id_disply_none3,id_disply_block) {
  
    	document.getElementById(id_disply_block).style.display= "block";
    	document.getElementById(id_disply_none1).style.display= "none";
    	document.getElementById(id_disply_none2).style.display= "none";
    	document.getElementById(id_disply_none3).style.display= "none";
    
    
}

function filter(){
document.getElementById('sum').value =0 ;
document.getElementById('tot').value = 0;

	var x = document.getElementById('myselect').value;
	if (x == "eggfree"){
		document.getElementById('egg').style.display= "none";
	}
	if (x == "fishfree"){
		document.getElementById('fish').style.display= "none";
	}
	if (x == "glutenfree"){
		document.getElementById('gluten').style.display= "none";

	}
	if (x == "dairyfree"){
		document.getElementById('dairy').style.display= "none";

	}	



}

var total_prix =0 ;

function increment(price){ 
		  
		   var qtt= document.getElementById('sum')
          document.getElementById('sum').value= (Number(qtt.value))+1;
          var  total_price = document.getElementById("tot")
		 document.getElementById('tot').value = (Number(total_price.value))+price;
		        
        } 
function deletecard(){
	document.getElementById('sum').value =0 ;
document.getElementById('tot').value = 0;
}


$(document).ready(function(){

    $("#a1").hide();
    $("#a2").hide();
    $("#a3").hide();
    $("#a4").hide();
});

