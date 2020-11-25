var listitems=['do your work', 'soar high'];
function newElement()
{
	var tmp=document.getElementById("myInput").value;
	listitems.push(tmp);
	DisplayList(tmp);
	document.getElementById("myInput").value='';
}

function DisplayList(item)
{
	document.getElementById("display").innerHTML += "<li>"+item+"</li>"
}

function removeAll()
{
	document.getElementById("display").innerHTML = "";	
}
