function checkLoginForm() {
	var customerEnteredUid=document.getElementById("uid").value;
	var customerEnteredPwd=document.getElementById("pwd").value;
	if(customerEnteredUid == "")
	{
		document.getElementById("uid").style="background:red";
		alert("User id is mandaroty");
		return false;
	
	}
	
	else if (customerEnteredPwd=="");
	{
	alert("Pwd is mandaroty");
	return false;
	}
	return true;
	
	
}