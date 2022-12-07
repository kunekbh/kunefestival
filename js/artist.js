// fetch the data

async function getData() {
  let result = fetch(
    "https://johannela.dk/wp-kune/wp-json/wp/v2/artist?_embed"
  );
  dataReceived(result.json());
}

function dataReceived(data) {
  //do something with the data
  console.log(data);
}
