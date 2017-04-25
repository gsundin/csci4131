function ajax_post(){
    // Create our XMLHttpRequest object
    var xmlhttp = new XMLHttpRequest();
    // Create some variables we need to send to our PHP file
    var fn = document.getElementById("first_name").value;
    var ln = document.getElementById("last_name").value;
    var add1 = document.getElementById("add1").value;
    var add2 = document.getElementById("add2").value;
    var city = document.getElementById("city").value;
    var state = document.getElementById("state").value;
    var zip = document.getElementById("zip").value;

    //var previousCreds = document.getElementById("status").innerHTML;

    //alert(previousCreds);

    var everythingFilledOut = true;

    if (fn == "") {
        alert("First name must be filled out");
        everythingFilledOut = false;
    }
    else if (ln == "") {
        alert("Last name must be filled out");
        everythingFilledOut = false;
    }
    else if (add1 == "") {
        alert("Address line 1 must be filled out");
        everythingFilledOut = false;
    }
    else if (city == "") {
        alert("City must be filled out");
        everythingFilledOut = false;
    }
    else if (state == "") {
        alert("State must be filled out");
        everythingFilledOut = false;
    }
    else if (zip == "") {
        alert("Zip code must be filled out");
        everythingFilledOut = false;
    }

    var vars = "firstname="+fn+"&lastname="+ln+"&add1="+add1+"&add2="+add2+"&city="+city+"&state="+state+"&zip="+zip;

    if (everythingFilledOut == true) {
      xmlhttp.open("POST", "my_parse_file.php", true);
    // Set content type header information for sending url encoded variables in the request
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    // Access the onreadystatechange event for the XMLHttpRequest object
    xmlhttp.onreadystatechange = function() {
      if(xmlhttp.readyState == 4 && xmlhttp.status == 200) {
        var return_data = xmlhttp.responseText;
        document.getElementById("status").innerHTML = return_data;
        }
      }
      // Send the data to PHP now... and wait for response to update the status div
      xmlhttp.send(vars); // Actually execute the request
      document.getElementById("status").innerHTML = "processing...";

      var form = document.getElementById("frm");
      frm.reset();
    }
    
}