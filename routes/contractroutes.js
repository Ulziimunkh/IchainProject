var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
const web3 = require('web3');
const Tx = require('ethereumjs-tx');
const fs = require('fs');

//Constract
//const input = fs.readFileSync('../models/contracts/Patient.sol', 'utf8');
//console.log(input);
const solc = require('solc');
//const output = solc.compile(input, 1);
//console.log('==>', output);


//Infura HttpProvider Endpoint
web3js = new web3(new web3.providers.HttpProvider("http://localhost:8545"));
var myAddress = '0xe92a936b36fa82d98802027b57944a5c00ff3a1d';
var privateKey = Buffer.from('0x322f7b2d648820c600e7e24cdadb7537e281d7732eac0c17d0c5ba1dd97b13e4'.substring(2), 'hex')
var toAddress = '0xf6eba87e36bb5e31ad4a95f3f43cab7f880f5c91';
var contractAddress ="0xc22bc54b252aa1622347d7e765cbc0dcacbaf339";

  //load abi from json file
	var contractABI = JSON.parse(fs.readFileSync('routes/abi.json'));
  var contract = new web3js.eth.Contract(contractABI,contractAddress);

router.get('/',function(req,res){

  //creating contract object
  var count;
  // get transaction count, later will used as nonce
  web3js.eth.getTransactionCount(myAddress).then(function(v){
      console.log("Count: "+v);
      count = v;
      contract.methods.getAll().call().then(
				function(result){
					console.log('all data :', result);
					res.json(result);
				});
		})
});

/* GET SINGLE BOOK BY ID */
router.post('/', function(req, res, next) {
	console.log('patient data---->',req.body);
	let patient = req.body;
	//creating contract object
	var count;
	web3js.eth.getTransactionCount(myAddress).then(function(v){

		console.log("Count: "+v);
		count = v;
		var amount = web3js.utils.toHex(1e16);
		//creating raw tranaction
		var rawTransaction = {
		 "from":myAddress,
		 "gasPrice":web3js.utils.toHex(20* 1e9),
		 "gasLimit":web3js.utils.toHex(210000),
		 "to":contractAddress,
		 "value":"0x0",
		 "data":contract.methods.setAll(patient.lastName, patient.firstName, patient.gender,
			patient.email, patient.dob, patient.address, patient.phoneNumber).encodeABI(),
		 "nonce":web3js.utils.toHex(count)
		}
		console.log(rawTransaction);
		//creating transaction via ethereumjs-tx
		var transaction = new Tx(rawTransaction);
		//signing transaction with private key
		transaction.sign(privateKey);
		//sending transacton via web3js module
		web3js.eth.sendSignedTransaction('0x'+transaction.serialize().toString('hex'))
		.on('transactionHash',console.log);
	})
    res.json('sucessfully updated');
});


module.exports = router;
