function compute()
//this function calculates interest and outputs the result
{
    principal = document.getElementById("principal").value;
    if(!principalValidate())
        {
            return false;
        }
    rate = document.getElementById("rate").value;
    years = document.getElementById("years");
    var yearsTotal = parseInt(years.value);
    interest = principal * yearsTotal * rate / 100;
    thisYear = new Date().getFullYear();
    futureYear = thisYear + yearsTotal;
    interestMessage = `If you deposit <mark>${ principal }</mark>,<br> at an interest rate of <mark>${ rate }</mark>.<br> You will receive an amount of <mark>${ interest }</mark>,<br> in the year <mark>${ futureYear }</mark>.`;
    document.getElementById("result").innerHTML = interestMessage;
}

function principalValidate()
//validates the input for the principal to ensure it's a positive amount
{
  if(principal == null || principal == 0 || principal < 0)
  {
      alert("Please enter a positive number in the Amount field");
      document.getElementById("principal").focus();
      return false;
  }
  return true
}

function rateValue()
//this function displays the current value in the slider to the user
{
    document.getElementById("currentSlider").innerHTML = document.getElementById("rate").value
}
