/* Navigation */
function toggleMenu() {
	if($("header nav").css("display") == "none" || $("header .nav").css("visibility") == "hidden") {
		$("header nav").slideDown(1000);
	}
	else
	{
		$("header nav").slideUp(1000);
	}
}

/* Easter Egg */
tabk = ["67","65","84"];
cpt = 0;
function konami(e)
{
var touche_appuyee='IntInit';
if (!e) var e=window.event;
if (e.keyCode) 
	{
		touche_appuyee = e.keyCode;
	}
	
if (touche_appuyee == tabk[cpt])
	 cpt++;
else 
	cpt=0;
	
if (cpt==3) 
{
	document.getElementById('easterEgg').style.visibility ="visible";
	cpt=0;	}
}


function endKonami()
{
	document.getElementById('easterEgg').style.visibility ="hidden";
}