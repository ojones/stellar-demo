> Scripts for getting started with Stellar blockchain.

# Stellar Demo

   * [Install](#install)
   * [Run Scripts](#run-scripts)
      * [Create Account](#create-account)
      * [Watch Account](#watch-account)
      * [Send Lumen](#send-lumen)

# Install
- Requires `node v10.1.0` and `npm 5.6.0`.

    ```
    npm install
    ```

# Run Scripts
- Run node scripts to interact with Stellar testnet.

## Create Account
- Create an account (`acct1`):
    ```
    node scripts/createAcct.js
    ```
- Save the keys displayed in console. 
- Create another account (`acct2`) and save those keys too.


## Watch Account
- Edit `scripts/watchDemo.js` to use `acct2` public key.
- Open another terminal window and from the `stellar-demo` directory run:
    ```
    node scripts/watchAcct.js
    ```
- Refer back to this terminal window to view any trasactions to this account.

## Send Lumen
- Edit `scripts/sendDemo.js` to use `acct1` secret key.
- Also edit `scripts/sendDemo.js` to use `acct2` public key.
- Back in the original terminal window, send 10 Lumens from acct1 to acct2:
    ```
    node scripts/sendDemo.js
    ```

- Check second terminal window to view transaction from watching network.