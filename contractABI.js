var contractABI = [
    {
        "constant": true,
        "inputs": [
            {
                "name": "",
                "type": "address"
            },
            {
                "name": "",
                "type": "uint8"
            }
        ],
        "name": "order",
        "outputs": [
            {
                "name": "",
                "type": "uint8"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "amount0",
                "type": "uint8"
            },
            {
                "name": "amount1",
                "type": "uint8"
            },
            {
                "name": "amount2",
                "type": "uint8"
            },
            {
                "name": "amount3",
                "type": "uint8"
            }
        ],
        "name": "takeOrder",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "_guest",
                "type": "address"
            },
            {
                "name": "drinkId",
                "type": "uint8"
            }
        ],
        "name": "getDrinks",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    }
];