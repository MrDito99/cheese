var total = 500
var knifecost = 20
var knives = 0
var fromagercost = 500
var frommagers = 0
var cps = 0


function buyknife(){
    if (total >= knifecost) {
        total = total - knifecost
        knives = knives + 1
        knifecost = Math.round(knifecost * 1.1)
        cps = cps + 1
        
        
        document.getElementById("total").innerHTML = total;
        document.getElementById("knives").innerHTML = knives;
        document.getElementById("knifecost").innerHTML = knifecost
        document.getElementById("cps").innerHTML = cps;
    }
}

function buyfromager(){
    if (total >= fromagercost) {
        total = total - fromagercost
        fromagers = fromagers + 1
        fromagercost = Math.round(fromagercost * 1.1)
        cps = cps + 10
        
        
        document.getElementById("total").innerHTML = total;
        document.getElementById("fromagers").innerHTML = fromagers;
        document.getElementById("fromagercost").innerHTML = fromagercost;
        document.getElementById("cps").innerHTML = cps;
    }
}


function addtotal(amount) {
    total = total + amount;
    document.getElementById("total").innerHTML = total;
}

setInterval (function() {
    total = total + cps;
    document.getElementById("total").innerHTML = total;
}, 1000)
