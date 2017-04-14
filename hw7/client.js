function validateForm() {
    if (document.forms["frm"]["fname"].value == "") {
        alert("First name must be filled out");
        return false;
    }
    if (document.forms["frm"]["lname"].value == "") {
        alert("Last name must be filled out");
        return false;
    }
    if (document.forms["frm"]["add1"].value == "") {
        alert("Address line 1 must be filled out");
        return false;
    }
    if (document.forms["frm"]["city"].value == "") {
        alert("City must be filled out");
        return false;
    }
    if (document.forms["frm"]["state"].value == "") {
        alert("State must be filled out");
        return false;
    }
    if (document.forms["frm"]["zip"].value == "") {
        alert("Zip code must be filled out");
        return false;
    }
    //alert("hey d00d");
}

var xmlhttp = new XMLHttpRequest();

xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var creds = JSON.parse(this.responseText);
        /*document.getElementById("fname").innerHTML = creds.FirstName;
        document.getElementById("lname").innerHTML = creds.LastName;
        document.getElementById("add1").innerHTML = creds.AddressLine1;
        document.getElementById("add2").innerHTML = creds.AddressLine2;
        document.getElementById("city").innerHTML = creds.City;
        document.getElementById("state").innerHTML = creds.State;
        document.getElementById("zip").innerHTML = creds.ZipCode;*/
    }
};

//alert("Opening the server.php file");

xmlhttp.open("GET", "server.php?q="+str, true);

//alert("Sending data to server.php");

xmlhttp.send();

alert("Finished sending!");