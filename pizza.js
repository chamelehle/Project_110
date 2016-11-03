var result1, result2, result3;


function check1(topping)
{
  var order1 = document.getElementById("Ans1").value;
  result1 = order1.search(topping)>=0;
  setCookie("a1", result1);
}
function check2(topping)
{
  var order2 = document.getElementById("Ans2").value;
  result2 = order2.search(topping)>=0;
  setCookie("a2", result2);
}
function check3(topping)
{
  var order3 = document.getElementById("Ans3").value;
  result3 = order3.search(topping)>=0;
  setCookie("a3", result3);
}
function order1()
{
  check1("256");
  var calc1 = getCookie("a1");

  if(calc1 == "true")
  {
    window.alert("Correct! 256 is the answer");
  }
  else
  {
    window.alert("Incorrect. 256 is the answer");
  }
  window.open("Test2.html",'_self');
}
function order2()
{
  check2("109");
  var calc2 = getCookie("a2");
  if(calc2 == "true")
  {
    window.alert("Correct! 109 is the answer");
  }
  else
  {
    window.alert("Incorrect. 109 is the answer");
  }
  window.open("Test3.html",'_self');
}
function order3()
{
  check3("999999");
  var calc3 = getCookie("a3");
  if(calc3== "true")
  {
    window.alert("Correct! 999999 is the answer");
  }
  else
  {
    window.alert("Incorrect. 999999 is the answer");
  }
  if (confirm("You have completed the test. See Results?") == true)
  {
    window.open("Results.html",'_self');
  }
}
function result()
{
  var calc1 = getCookie("a1");
  var calc2 = getCookie("a2");
  var calc3 = getCookie("a3");
  var percentage;
  if(calc1 == "true" && calc2 == "true" && calc3=="false")
  {
    percentage = 66;
  }
  else if(calc2== "true" && calc3== "true"&& calc1=="false")
  {
    percentage = 66;
  }
  else if(calc1== "true" && calc3== "true" && calc2=="false")
  {
    percentage = 66;
  }
  else if(calc1== "false" && calc2 == "false"&& calc3== "false")
  {
    percentage = 0;
  }
  else if(calc1== "true" && calc2== "true" && calc3== "true")
  {
    percentage = 100;
  }
  else
  {
    percentage = 33;
  }
  document.getElementById("sub").innerHTML = asPercentage(percentage);
}
function asPercentage(percent)
{
  return "You got " + percent + "% Correct";
}



//courtesy of w3schools from http://www.w3schools.com/js/js_cookies.asp
function setCookie(cname, cvalue, exdays)
{
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname)
{
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}
