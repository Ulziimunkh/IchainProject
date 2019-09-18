const NodeRSA = require('node-rsa');

class KeyGenerator{

    constructor(length =1024, formatLength =65537, pkFormat = 'pkcs8-public-der   ', skFormat = 'pkcs1-private-der   '){
        this.key = new NodeRSA();
        this.key.generateKeyPair(length, formatLength);
        this.pkFormat = pkFormat;
        this.skFormat = skFormat;
    }
    getPublicKey(){
        return this.key.exportKey(this.pkFormat);
    }
    getPrivateKey(){
        return this.key.exportKey(this.skFormat);
    }

}
// let keyGen = new KeyGenerator();
// let publicKey = keyGen.getPublicKey();
// let privateKey = keyGen.getPrivateKey();
// console.log('public key:', publicKey);
// console.log('private key:', privateKey);
module.exports.KeyGenerator = KeyGenerator;