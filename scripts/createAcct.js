var request = require('request');
var StellarSdk = require('stellar-sdk');

// create a completely new and unique pair of keys
var pair = StellarSdk.Keypair.random();

console.log('public key:', pair.publicKey());
console.log('secret key:', pair.secret());

// request account
request.get({
  url: 'https://friendbot.stellar.org',
  qs: { addr: pair.publicKey() },
  json: true
}, function(error, response, body) {
  if (error || response.statusCode !== 200) {
    console.error('ERROR!', error || body);
  }
  else {
    console.log('SUCCESS! You have a new account :)\n', body);
    // set sdk server object
    var server = new StellarSdk.Server('https://horizon-testnet.stellar.org');
    // retrieve acct info using promise
    server.loadAccount(pair.publicKey())
    .then(function(account) {
      // display balances
      console.log('Balances for account: ' + pair.publicKey());
      account.balances.forEach(function(balance) {
        console.log('Type:', balance.asset_type, ', Balance:', balance.balance);
      });
    });
  }
});
