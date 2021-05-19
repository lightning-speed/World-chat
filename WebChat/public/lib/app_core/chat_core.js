var a; 
var user = "";
function getUser(){
        
    	a = setInterval(update,1000);
    	if(user==""||user==null){
    		con();
    	}
    	 show();
}
function se(){
	 ap.innerHTML+="<br><br><div id='mess'>sorry you connot join chat without a name<br><input type='button'value='Click to set Name' onclick='location.reload()'><div>";
}
var can = 1;
function con(){
   clearInterval(a);
   tx.disabled=true;
   se();
  
}
function send(){
     
	if(tx.value!=0&&can==1){
    var a= tx.value;
    a = a.replace("\n","<br>");
      a = a.replace("\r","<br>");
     write(read()+'<br> <div id="mess">'+user+" said <hr>"+a+'</div>');
     tx.value="";}
}
 


function update(){
      poti.innerHTML=user;
	  ap.innerHTML = "<br><br>"+read()+"<br><br><br><br>";
	  if(read().length>10000000){
	  	clear();
	  }
}
function clear(){
	write("");
}
function hide(){
	tx.style.display="none";
	ap.style.display="none";
	poti.style.display="none";
	document.getElementById('se').style.display="none";
	document.getElementById('cl').style.display="none";
	document.getElementById('mess').style.display="none";
}
function show(){
	tx.style.display="block";
	ap.style.display="block";
	poti.style.display="block";
	document.getElementById('se').style.display="block";
	document.getElementById('cl').style.display="block";
    document.getElementById('boxg').style.display="none";
	document.getElementById('mess').style.display="block";
}
function clea(){
	clear();
}