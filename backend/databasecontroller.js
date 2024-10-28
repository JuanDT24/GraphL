const {Client} = require('pg')

const client = new Client({
    host: "test-projects-databases-projects.b.aivencloud.com",
    user: "avnadmin",
    port: 14420, 
    password:"AVNS_GxIJiNsCvfbaAC1v2Zf",
    database:"defaultdb",
    ssl: {
        rejectUnauthorized: true,
        ca: `-----BEGIN CERTIFICATE-----
MIIEQTCCAqmgAwIBAgIUYK+4kmHSdCIZNRpyeIEpc+KU5yYwDQYJKoZIhvcNAQEM
BQAwOjE4MDYGA1UEAwwvZGY5ZTU2NzUtMmVhMC00NGFlLTk2ZjAtMDBlMDMyNGYz
ZjM2IFByb2plY3QgQ0EwHhcNMjQxMDI3MTgyMjE0WhcNMzQxMDI1MTgyMjE0WjA6
MTgwNgYDVQQDDC9kZjllNTY3NS0yZWEwLTQ0YWUtOTZmMC0wMGUwMzI0ZjNmMzYg
UHJvamVjdCBDQTCCAaIwDQYJKoZIhvcNAQEBBQADggGPADCCAYoCggGBAKTZ+AHr
XVsoiZMW32Pyf0unZO1cVV3iwscG7dmhiMHVMYFnN4QtnoQtnuYFMWPHA22V61UK
W5XXlp9IylClA7wdTOUWasG9p+modBLfI/VtvoiliNO5KuBXGOGV5Y8cPsexo12C
j9ZQUVozwNZkvsOeReG1DZ/jdP6QLIJwsstbFxvYFwr6kzBbJHOn30TStX+JYWSW
wlKTrpljb7iILXuHly7JPhPuyfPKgp1bJZ9ux+rFuBCflb/iHNbKtuu5+BFglejh
p6UPqKFTcvIJjsi7Kj5Si7D8td908WxlXfNdx/7ncRPuchag8Zj7Dqh9u7Be+quS
vy9q4jrtH9qs4RQb9NIFvnyPIhYV5xnnc3j+dL4oDCaCoO7KHrQdhZSiInZUykxs
AIwkl9xqszjXBQ3gKxkLw14yGMdGvXgg/RxLQNweaHR9GducWY2jVuNgQp4f+8WF
lXPABIhy3FvZp/UO4XDlpMcLDlV6GN4hoCalyX2rmGcdGqKC2k3QOrGF1QIDAQAB
oz8wPTAdBgNVHQ4EFgQUirLReZwCjYKsoLgHokBQEWqILGMwDwYDVR0TBAgwBgEB
/wIBADALBgNVHQ8EBAMCAQYwDQYJKoZIhvcNAQEMBQADggGBAKC7lPswXooBk8oc
NuHS7Rj9eTyWkcWIecVtxBJC1DN8dhyfmZ+E9oxf59HNXR0dFkYjSt+3jMQ95shR
HbjTp1c0bPr4d5hxfiboX5FqUYa0D5SheSuhqG5xLCzbeTa4i+PuzgCZRKYqRr1L
siTOZdeZqfQiDyM8xP9xb6CeWQGikcZlr/KAr+czLJAZ05cMwpLJa91cJnqIUsnf
dNm0QPnbOtY7E6OCdjdxX3HyupSig/rJPNb/BWfD3L66WZMmFVmi1eCEUchXFP8y
4ukJzGlBiGxO/ehBYtWDw/9Sq6+ABzJboxwe+BrGPU21gvcpNOG5YwEzrP5xnLvj
ttRM7mvw3rxosqD+kLd8e3mvsfZ4sFmXuhNSJtJr8w/tLOdLR7Y7ZXqrY1N0dEwx
xV7nU53+kQ9JGs66QIkPjjZfbsbnzkJqTiC0hD3g4iihv3f7iHBX9ooSW+pXN3wb
xmHvVwo0rJgJjfqBJacM9KFbvwJjsm7RhtYYpcIxV3C5PIJVbg==
-----END CERTIFICATE-----`,
    },
})

client.connect()
    .then(() => console.log('Conexión a la base de datos establecida.'))
    .catch(err => console.error('Error al conectar a la base de datos', err));

module.exports= client;