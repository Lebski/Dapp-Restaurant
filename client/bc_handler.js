contractAdress = '0x8cf4eef1ebc48055b871981d87ed86992e89f055';
amountOfCoctails = 4;
price = 0;

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

/*
var qrcode = new QRCode(document.getElementById("qrcode"), {
    width : 100,
    height : 100
});
*/

function updateBill(drinkId) {
    var selectAmount = document.getElementById("select" + drinkId).options.selectedIndex;
    console.log(selectAmount);
    CoctailsO.coctails[drinkId].Amount += selectAmount;
    drawBill();
}

function reset() {
    for (i = 0; i < amountOfCoctails; i++) {
        item = document.getElementById("select"+i);
        item.value = 0;
    }
}

function buyCoctail() {
  var cocktail = []
  cocktail[0] = document.getElementById("select0").value;
  cocktail[1] = document.getElementById("select1").value;
  cocktail[2] = document.getElementById("select2").value;
  cocktail[3] = document.getElementById("select3").value;

  var table = document.getElementById("table").value;

  if(table != "none"){
    if(cocktail[0] != 0 || cocktail[1] != 0 || cocktail[2] != 0 || cocktail[3] != 0 ){

      var drinkArray = [];
      var amountArray = [];
      for (i = 0; i < amountOfCoctails; i++ ){
          _amount = cocktail[i];
          if (_amount != 0) {
              drinkArray.push(i);
              amountArray.push(parseInt(_amount));

          }
      }
      console.log(drinkArray, amountArray)
      Drinks.takeOrder(1, drinkArray, amountArray, {from: web3.eth.accounts[0], gas: 3000000, value: price},function (error, result) {
          if (!error){
              document.getElementById("transaction_hash").innerHTML = "<a target ='_blank' href=https://ropsten.etherscan.io/tx/" + result + ">Transaction Hash: " + result + "</a>";
              $.post('../client/writedb.php', {cocktail0: cocktail[0], cocktail1: cocktail[1], cocktail2: cocktail[2],cocktail3: cocktail[3],table: table, txid: result});
              //qrcode.makeCode(result);
              console.log(result);
              reset()
          } else {
              console.error(error);
          } });



      //window.location.href = "index.php";
    }else{
      alert("Select at least one drink!");
    }
  }else{
    alert("Table must not be null!");
  }



}

function disableBuy(isActive) {
  document.getElementById("buyBtn").disabled = isActive;
}

function calcPrice() {
  var cocktail = []
  cocktail[0] = document.getElementById("select0").value;
  cocktail[1] = document.getElementById("select1").value;
  cocktail[2] = document.getElementById("select2").value;
  cocktail[3] = document.getElementById("select3").value;

    var drinkArray = [];
    var amountArray = [];
    for (i = 0; i < amountOfCoctails; i++ ){
        _amount = cocktail[i];
        if (_amount != 0) {
            drinkArray.push(i);
            amountArray.push(parseInt(_amount));

        }
    }
    console.log(drinkArray, amountArray)
    Drinks.calcPrice(drinkArray, amountArray, function (error, result) {
        if (!error){
            var res = result.toString(10);
            document.getElementById("price").innerHTML = "Preis: " + res + " Ethereum";
            console.log(res);
            price = res;
            disableBuy(0);
        } else {
            console.error(error);
        } });

}
