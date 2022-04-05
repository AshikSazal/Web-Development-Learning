

function info(){
  var jname=document.forms["reg_form"]["name"].value;
  var jaddress=document.forms["reg_form"]["address"].value;
  var jphone=document.forms["reg_form"]["phone"].value;
  var jemail=document.forms["reg_form"]["email"].value;
  var jpass=document.forms["reg_form"]["password"].value;


  if(jname=="")
    alert("Name must be filled out");
  else if (jaddress=="")
    alert("Address must be filled out");
  else if (jphone==""||isNaN(jphone)||jphone.length!=11)
    alert("invalid phone number");
  else if(jemail=="")
    alert("Email must be filled out");
  else if(jpass=="")
    alert("Password must be filled out");
  else
    alert("Successfully done");
}
