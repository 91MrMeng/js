var btn=document.getElementById("btn");
	body=document.getElementsByTagName("body")[0];
	box=document.getElementById("box");
	img1=document.getElementById("bg1");
	img2=document.getElementById("bg2");
	img3=document.getElementById("bg3");
	var x=0;
	var	index=1;
	index=getCookie("bgImage");
	if(index){
		body.style.background="url(img/bg"+index+".jpg) no-repeat";
	}	
btn.onclick=function(){
	x++;
	if (x%2==1) {
		box.style.display="block";
	} else if(x%2==0){
		box.style.display="none"
	}
}
img1.onclick=function(){
	body.style.background="url(img/bg"+1+".jpg) no-repeat";
	index=1;
	setCookie("bgImage",index,setCookieDate(7))
}
img2.onclick=function(){
	body.style.background="url(img/bg"+2+".jpg) no-repeat";
	index=2;
	setCookie("bgImage",index,setCookieDate(7))
}
img3.onclick=function(){
	body.style.background="url(img/bg"+3+".jpg) no-repeat";
	index=3;
	setCookie("bgImage",index,setCookieDate(7))
}

