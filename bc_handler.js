contractAdress = '0x9561c133dd8580860b6b7e504bc5aa500f0f06a7';
amountOfCoctails = 4;

console.log(web3.currentProvider);


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
var Drinks = DrinksContract.at(contractAdress);
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
    var drinkArray = [];
    var amountArray = [];
    table = document.getElementById("table").options.selectedIndex;
    for (i = 0; i < amountOfCoctails; i++ ){
        _amount = CoctailsO.coctails[0].Amount;
        if (_amount != 0) {
            drinkArray.push(i);
            amountArray.push(_amount);

        }
    }
    console.log(drinkArray, amountArray)
    var price = calcPrice();
    console.log(typeof price);
    Drinks.takeOrder(1, drinkArray, amountArray, {from: web3.eth.accounts[0], gas: 3000000, value: calcPrice() },function (error, result) {
        if (!error){
            document.getElementById("transaction_hash").innerHTML = "TransactionHash:" + result;
            qrcode.makeCode(result);
            console.log(result);
            reset()
        } else {
            console.error(error);
        } });

}

function calcPrice() {
    var drinkArray = [];
    var amountArray = [];
    for (i = 0; i < amountOfCoctails; i++ ){
        _amount = CoctailsO.coctails[i].Amount;
        if (_amount != 0) {
            drinkArray.push(i);
            amountArray.push(_amount);

        }
    }
    console.log(drinkArray, amountArray)
    Drinks.calcPrice(drinkArray, amountArray, function (error, result) {
        if (!error){
            var res = result.toString(10);
            document.getElementById("price").innerHTML = "Preis: " + res + " Ethereum";
            console.log(res);
            return res;
        } else {
            console.error(error);
        } });

}
