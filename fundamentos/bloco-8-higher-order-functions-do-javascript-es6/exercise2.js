// escreva sum abaixo

const sumFunction = (...values) => values.reduce(((a, b) => a + b), 0)

console.log(sumFunction(...[1, 5]));