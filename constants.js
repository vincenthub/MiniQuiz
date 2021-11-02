
export const apikey = "N4Y5MAIIQWIMMSGRGV8VWAHU1GYD2QUEHQ"
export const givenAddress = "0xaEdd8BC2c9AbC2F7887fF4bbb33cA00874dB05A5"

export const accountEndpoint = `https://api.etherscan.io/api?module=account&action=balancemulti&address=${givenAddress}&tag=latest&apikey=${apikey}`
export const addressTransactionsEndpoint = `https://api.etherscan.io/api?module=account&action=txlist&address=${givenAddress}&startblock=0&endblock=99999999&page=1&offset=10&sort=desc&apikey=${apikey}`
