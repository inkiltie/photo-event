var orderDataArray = [];

function extractData()
{
	if (location.search)
	{
		var queryStringData = location.search;
		
		var hiddenInputs = document.getElementsByTagName("input");
		
		queryStringData = queryStringData.substring(1,queryStringData.length);	
	}

    orderDataArray = queryStringData.split("&");
	
    for (var i=0; i<orderDataArray.length; i++)
    {
        hiddenInputs[i].value = orderDataArray[i].substring(orderDataArray[i].lastIndexOf("=") + 1);
    }
}

function ValidateCreditCardNumber()
{
    var visa = document.getElementById("visa");
	var mCard = document.getElementById("mCard");
	var amEx = document.getElementById("amEx");
	var discr = document.getElementById("discr");
	
    var cardNum = document.getElementById("cardNum").value;

	if (visa.checked){
		var visaCard = /^4[0-9]{12}(?:[0-9]{3})?$/;

        if (visaCard.test(cardNum) == false)
		{
			window.alert("Visa: Numbers should start with a 4. New cards should consist of 16 digits and old cards of 13 digits (e.g, 4012880888821881).");
		}
	}
	else if (mCard.checked){
		var masterCard = /^5[1-5][0-9]{14}$/;

        if (masterCard.test(cardNum) == false)
		{
			window.alert("MasterCard: Numbers should start with the 51 through 55 and consist of 16 digits (e.g., 5105105105105100).");
		}
	}
	else if (amEx.checked){
		var amexCard = /^3[47][0-9]{13}$/;

        if (amexCard.test(cardNum) == false)
		{
			window.alert("American Express: Numbers should start with 34 or 37 and consist of 15 digits (e.g., 371449635398431).");
		}
	}
	else if (discr.checked){
		var discoverCard = /^6(?:011|5[0-9]{2})[0-9]{12}$/;

        if (discoverCard.test(cardNum) == false)
		{
			window.alert("Discover: Numbers should begin with 6011 or 65 and consist of 16 digits.");
		}
	}
}

var btn = document.getElementById("submitBtn");

if (btn.addEventListener)
{
	btn.addEventListener("click",extractData);
}
else if (btn.attachEvent)
{
	btn.attachEvent("onclick",extractData);
}