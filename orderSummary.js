function orderSummaryInfo()
{
	var orderCustData = decodeURIComponent(location.search);
	
	var orderCustArray = [];
	
	var resList = document.querySelector("div.results ul");
	
	orderCustData = orderCustData.substring(1,orderCustData.length);

	while(orderCustData.indexOf("+")!== -1)
	{
		orderCustData=orderCustData.replace("+", " ");
	}

	while(orderCustData.indexOf("%")!== -1)
	{
		orderCustData=orderCustData.replace("%24", "$");
	}
	
	orderCustArray = orderCustData.split("&");
	
	for (var i=0; i<orderCustArray.length; i++)
	{
		var listItem = document.createElement("li");
		
		listItem.innerHTML = orderCustArray[i];
		
		resList.appendChild(listItem);
	}
}

if (window.addEventListener)
{
	window.addEventListener("load",orderSummaryInfo);
}
else if (window.attachEvent)
{
	window.attachEvent("onclick",orderSummaryInfo);
}