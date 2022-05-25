require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid process orient venture stone random pave punch heavy knee army gaze'; 
let testAccounts = [
"0x1029737dfb9b7a8cb3741fa1aab15943fba8943e504d698bd301b4dda0ad4eb9",
"0xf0ea675a22651a165270ae5d2df84d67872cfeaf9e2c073ffbce4ed50c8fbe8d",
"0x3855d91d2bbcd3d5962b06ea6f3721f65f7d7787d2c13bb68defdb85dd1b8a22",
"0x515463d3689415e0bd538c05014e83cfa0c5904ef3cb974597b96eec4d9102ff",
"0x0eaabec6c340a98af08df17d0b021198e192801724ff2c6d4f391875a209f14b",
"0xe1e840bef89810ddffa79e466b27530d5536087e94081693a824a1d713e184ad",
"0xd284cc5ecc53a37fac1bcc035dbcf797b0620d7eb8e75cf8d3c5d06933bd77a3",
"0xd380e1812e71e5b0dd99c94dca9a57ba6c189a704170f2e58cd57466e8749f23",
"0xf689cac3e17228eced1c41482b31e1bc972481fb3e029597af4017545382ab1b",
"0x1fe07231c784bb5418754fcb0f91096aee2b84ef8e3a66b54bc9bae4247404b3"
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


