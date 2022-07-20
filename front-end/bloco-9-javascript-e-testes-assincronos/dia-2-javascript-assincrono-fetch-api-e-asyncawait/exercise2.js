const container = document.getElementById('container');
container.innerText = 'texto aqui';

const fetchMoedinha = () => {
  const url =  'https://api.coincap.io/v2/assets';

  const coins = fetch(url)
    .then(response => response.json())
    // .then(data => container.innerText = data.data[0])
    .then(data => data.data)
    .then(data => console.log(data.data[1].priceUsd))

}

console.log(fetchMoedinha())