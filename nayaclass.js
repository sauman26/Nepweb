function checkLoginForm(){
    var customerEnteredUid=document.getElementById("uid").value;
    var customerEnteredPwd=document.getElementById("pwd").value;
    if(customerEnteredUid==""){
        document.getElementById("uid").style="background:red";
        alert("Please Enter Your UserId.")
        return false;
    }
    else if(customerEnteredPwd=="")
    {
        document.getElementById("pwd").style="background:red";
        alert("Please Enter Your Password.")
        return false;
}
return true;
}