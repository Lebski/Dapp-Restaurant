console.log(web3.currentProvider)
if (typeof web3 !== 'undefined') {
    web3 = new Web3(web3.currentProvider);
} else {
    var alertMsg = 'No injected Web3 provider found. ';
    alertMsg += 'Make sure your provider (e.g. MetaMask) is active and running ';
    alertMsg += 'Do you want to connect to a local Node instance on port 8548?.';

    if (confirm(alertMsg)) {
        web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'));
    } else {
        alert('Goin to another page....')
    }
}
web3.eth.defaultAccount = web3.eth.accounts[0];
var DrinksContract = web3.eth.contract(contractABI);

console.log(contractABI);
var Drinks = DrinksContract.at('0xde5491f774f0cb009abcea7326342e105dbb1b2e');
var coctails = '{"coctails":[' +
    '{"name":"Capri Americano","Amount":0 },' +
    '{"name":"Holy Flame Coctail","Amount":0 },' +
    '{"name":"Zombie Smasher","Amount":0 },' +
        '{"name":"Strawberry Daiquiri","Amount":0 }]}';
var CoctailsO = JSON.parse(coctails);
var qrcode = new QRCode(document.getElementById("qrcode"), {
    width : 100,
    height : 100
});

drawBill();

function drawBill() {
    document.getElementById("resultId").innerHTML = CoctailsO.coctails[0].name + ": " + CoctailsO.coctails[0].Amount + "<br>" + CoctailsO.coctails[1].name + ": " + CoctailsO.coctails[1].Amount + "<br>" + CoctailsO.coctails[2].name + ": " + CoctailsO.coctails[2].Amount + "<br>" + CoctailsO.coctails[3].name + ": " + CoctailsO.coctails[3].Amount + "<br>";
}

function updateBill(drinkId) {
    var selectAmount = document.getElementById("select" + drinkId).options.selectedIndex;
    console.log(selectAmount);
    CoctailsO.coctails[drinkId].Amount += selectAmount;
    drawBill();
}

function reset() {
    for (i = 0; i < CoctailsO.coctails.length; i++) {
        CoctailsO.coctails[i].Amount = 0;
        drawBill();
    }
}

function buyCoctail() {
    p0 = CoctailsO.coctails[0].Amount;
    p1 = CoctailsO.coctails[1].Amount;
    p2 = CoctailsO.coctails[2].Amount;
    p3 = CoctailsO.coctails[3].Amount;

    Drinks.takeOrder(p0, p1, p2, p3, function (error, result) {
        if (!error){
            document.getElementById("transaction_hash").innerHTML = "TransactionHash:" + result;
            qrcode.makeCode(result);
            console.log(result);
            reset()
        } else {
            console.error(error);
        } });

}


console.log(Drinks);

function burglar() {
    Drinks.getDrinks(1, function (error, result) {
        if (!error) {
            drinksAmount = Web3.toText(result); //aus local nach global bringen
            console.log(drinksAmount);
            callDrinks(drinksAmount)
        }
        else {
            console.error(error);
        }
    });
}

var drinksOrder = burglar();

function callDrinks(drinksOrder) {
    $("#resultId").html('Fancy Drangon Drink ' + drinksOrder);
}






