
var express = require('express');
var router = express.Router();
const NodeRSA = require('node-rsa');

class KeyGenerator{

    constructor(){

    }
    generateKey(length =1024, formarlength =65537){
        const key = new NodeRSA();
        key.generateKeyPair(length, formarlength);
        
        const publicKey = key.exportKey('pkcs8-public-der   ');
        const privateKey = key.exportKey('pkcs1-private-der   ');
    }

}

module.exports.KeyGenerator = KeyGenerator;


router.get('/',function(req,res){

    // const key = new NodeRSA({b: 512});
    const text = 'Hello RSA!';
    // const encrypted = key.encrypt(text, 'base64');
    // console.log('encrypted: ', encrypted);
    // const decrypted = key.decrypt(encrypted, 'utf8');
    // console.log('decrypted: ', decrypted);

    const key = new NodeRSA('-----BEGIN RSA PRIVATE KEY-----\n'+
    'MIICXQIBAAKBgQCCjBCJedERIegnvBfTSGQFbAgeDRSS2J+RyQpFRgvmlcvHvWXr\n'+
    'xJ680/8phMdGT3iMSchTXb1HfUsdVyjDsy9vk3Ug5WyegrMRUhutZeCKctUkDt8S\n' +
    '3ac7aGGNDvb1pqkTZ1gyCFrQ42+qjBUViBPH6pL2LnE/w3ixde73xIgN9wIDAQAB\n' +
    'AoGATnac4eQjsmZswKUetNDHvTKHVniKKxCkJ91rnONS986E4pKFlcVhmyDYNj4l\n' +
    '/654R+l4zBKFV1iJMyNVzvn9we+B4Lf/F1zmNqpnmQxZHi8EBQjy2l3YphmAoVwK\n' +
    'rgNSSzNZv+ccP5EKSgftdJ2g4oC2sSSbZTe+PEInHs4KNEECQQDyoxUENho9UrYH\n' +
    'LcJ0u0kizHctekEXFa/2Hbls5Y9s0GrZ8GEulSMVqNovuTbgu7GdQyWuvqr6HrGj\n' +
    'Z7p7s97HAkEAibyjCXGVs6FMboRMOJUql0NIsmSaWMDBLhWjbmmrflT7pv4rzoBy\n' +
    'LC8DgeNYwH+3xL6jYvR7u0ctiNu/Y5/nUQJBAOWKwucpB8nb5bkE4WHtjFMPe+/a\n' +
    'KJneOolrtW///J/EzFFBx656CKcFBuT/I5uX9YABdjTKzJWzU/pyt0kv8SECQCbP\n' +
    'MhkdGhNNJZ4WROvEjAWm/brWQe80ELqNeklIGPw1sdqxz2IWKxVsAc79YiqLUhpr\n' +
    'pNnjDWINgjUHxfuqOKECQQC6TQxU/lknjDJMjECIKYv0HZvJawwPpqrSY4M6DcNi\n' +
    '2e4E8f4kdy/WvNfNfB7eCS3kYbLYe+UPNi3mVYvndv8E\n'+
    '-----END RSA PRIVATE KEY-----');
    //key.generateKeyPair(1024, 65537);
    const publicKey = key.exportKey('pkcs8-public-der   ');
    const privateKey = key.exportKey('pkcs1-private-der   ');
    console.log('private key: ', privateKey);
    console.log('public key: ', publicKey);
    const encrypted = 'IsPG3X+xPSe5ywHCKduuMqZAyYk7Rbb3eRfYevUdmqD+Em/vKgUeAP4Y0104JGfvcxtTFNi/cUPiX9xzGBY0d9WuW33WbFHVPH+ItYXPlT4u+0bZIknQ/CypUS63L8nsi9ABZFgrqTEviBvukh2fCIJ6nk+L1HmW3sY3IvsZO18=';
    //console.log('encrypted: ', encrypted);
    const decrypted = key.decrypt(encrypted, 'utf8');
    console.log('decrypted: ', decrypted);

});

module.exports = router;