function setCookie(cname, cvalue){
	document.cookie = cname+"="+cvalue+"; ";
}

function getCookie(cname)
{
	var name = cname + "=";
	var ca = document.cookie.split(';');
	for(var i=0; i<ca.length; i++) {
		var c = ca[i].trim();
		if (c.indexOf(name)==0) return c.substring(name.length,c.length);
	}
	return "";
}

function checkCookie()
{
	var cont=getCookie("continue");
	if (cont!=""){}else{
  		cont = -1;
		if (cont!="" && cont!=null){
   			setCookie("continue",cont,30);
    	}
 	}
 	currLvl = cont;
}

