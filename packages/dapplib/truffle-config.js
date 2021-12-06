require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'kidney clog tackle venture strong rival noise arrow include cloth equal gate'; 
let testAccounts = [
"0xc5e197c701caf79513203116db12ea195b1a005e8fa7f45ec85ac7756c176361",
"0x13186b0d16d42a4a0028073afcae7ebcd2d7d8ca433589a3300cb6a2fbf0d78d",
"0x13f4b9e90e1027d0d5f1dd5b778a85815faaa887af65f0003eaa86a338a7fdd2",
"0x2042777149a2ce7f6d3a13469c0822a65856414db85e2bc5798e92332e0e22c7",
"0x508bd241f8894faceadf269ccb6c56d261ba9275175fc8f8cc53f800b7dd8cde",
"0x5c4b2cae55832c1dfcc472d1cde0448cd4cbb7b11ba9bf046b503c9aeb965fb3",
"0x104181c423578766729e97b94b84f3fa582ea55b7f35e164c8f1d700b007bd80",
"0x939fd133220f3019c0a597e335ec6b37f60b4ac4b11cc4449d6fc631f83044af",
"0xf90e05b6424400cfaa432c2df607090bbd7e7e5a016af806b083d268fae08fd6",
"0x87199a6caec8becbbb62ab472b7181b0d583821abee06dd551c5dad1a168971b"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


