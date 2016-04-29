//Jeremy Eramian
//Take a persons name and turn it into pig latin

var rawFirstName;
var rawLastName;
var firstName;
var lastName;

rawFirstName = window.prompt('Please enter your first name');

if(rawFirstName.length > 1)
{
	firstName = rawFirstName;
}
else
{
	alert('The name entered did not meet the requirments');
}

rawLastName = window.prompt('Please enter your last name');

if(rawLastName.length > 1)
{
	lastName = rawLastName;
}
else
{
	alert('The name entered did not meet the requirments');
}

var fnameLetter = firstName[0];
var lnameLetter = lastName[0];
var fnameLen = firstName.length;
var lnameLen = lastName.length;
var fnameLast = firstName.charAt(fnameLen -1);
var lnameLast = lastName.charAt(lnameLen -1);

var fnameNoFirst = firstName.slice(1);

var ay = "ay";

var newFname = fnameNoFirst.concat(fnameLetter).concat(ay);

var lnameNoFirst = lastName.slice(1);

var newLname = lnameNoFirst.concat(lnameLetter).concat(ay);

console.log(newFname, newLname);