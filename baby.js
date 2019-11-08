$("#vaccination-section").click(function() {
    $('html, body').animate({
        scrollTop: $("#my_vaccination").offset().top
    }, 1000);
});



var listvaccin = [
	{
		"age" : 0,
		"vaccin" : ["fklbkldf"]
	},
	{ 
		"age": 1,
		"vaccin" : ["hhhh", "dfdgd"]
	}	,
	{
		"age": 2,
		"vaccin" : ["aaa" , "zzzz"]
	}
]

function getinfo(){
          
var radios = document.getElementsByName('gender');

for (var i = 0, length = radios.length; i < length; i++)
{
 if (radios[i].checked)
 {
  // do whatever you want with the checked radio
 var gendervalue = radios[i].value

  // only one radio can be logically checked, don't check the rest
  break;
 }
}

            var date = document.getElementById("date-id").value;
            var age_bebe = document.getElementById("age-id").value;
/*alert(age_bebe);*/


            
/*var baby = {sexe: gendervalue , age = "white"};*/
}

