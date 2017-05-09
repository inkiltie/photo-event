var photographerCost = 0;
var totalCost = 0;
var memoryBook = false;
var reproductionRights = false;

function calcStaff() {
   var num = document.getElementById("photognum").value;
console.log("num: " + num);
   var hrs = document.getElementById("photoghrs").value;
console.log("hrs: " + hrs);
   var distance = document.getElementById("distance").value;
   var distance1 = distance.substring(0,2);
console.log("distance: " + distance1);
   totalCost -= photographerCost;
console.log("totalCost: " + totalCost);
   photographerCost = num*100*hrs + distance1*num;
console.log("photographerCost: " + photographerCost);
   totalCost += photographerCost;
console.log("totalCost: " + totalCost);
   document.getElementById("estimate").value = "$" + totalCost;
}

function toggleMembook() {
   (document.getElementById("membook").checked === false) ? totalCost -= 250 : totalCost += 250;
   document.getElementById("estimate").value = "$" + totalCost;
}

function toggleRights() {
   (document.getElementById("reprodrights").checked === false) ? totalCost -= 1250 : totalCost += 1250;
   document.getElementById("estimate").value = "$" + totalCost;
}

function resetForm() {
   document.getElementById("photognum").value = 1;
   document.getElementById("photoghrs").value = 2;
   document.getElementById("membook").checked = memoryBook;
   document.getElementById("reprodrights").checked = reproductionRights;
   document.getElementById("distance").value = 0;
   calcStaff();
   createEventListeners();
}

function createEventListeners() {
   document.getElementById("photognum").addEventListener("change", calcStaff, false);
   document.getElementById("photoghrs").addEventListener("change", calcStaff, false);
   document.getElementById("membook").addEventListener("change", toggleMembook, false);
   document.getElementById("reprodrights").addEventListener("change", toggleRights, false);
   document.getElementById("distance").addEventListener("change", calcStaff, false);
   document.getElementById("estimate").addEventListener("change", calcStaff, false);
}

window.addEventListener("load", resetForm, false);
