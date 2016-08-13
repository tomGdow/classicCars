/*Acknowledgement.  The Javascript for the e-mail address validation is a slight
		modification of that given at W3Schools.
		 
		 The original code is 
		available at the following address: 
		
		http://www.w3schools.com/js/js_form_validation.asp*/

function validateForm()
	{
		var x=document.forms["myForm"]["email"].value;
		var atpos=x.indexOf("@");
		var dotpos=x.lastIndexOf(".");
		if (atpos<1 || dotpos<atpos+2 || dotpos+2>=x.length)
			{
				alert("This is not a valid e-mail address");
				return false;
			}
}