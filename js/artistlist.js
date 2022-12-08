//fetch database

async function getData() {
  let result = await fetch(
    "https://johannela.dk/wp-kune/wp-json/wp/v2/artist?_embed"
  );
  dataReceived(await result.json());
}
function dataReceived(data) {
  //do something with the data
  console.log(data);

  data.forEach(showArtistCover);
  //   postMessage.forEach((post) => {
  //   console.log(hello, post);
}

function showArtistCover(artist) {
  //   //template
  const template = document.querySelector("template").content;
  //   //clone
  const clone = template.cloneNode(true);
  console.log(artist);
  //   //put the content into it
  clone.querySelector("h3").textContent = artist.title.rendered;
  //   //append it to the dom
  clone.querySelector("img").src =
    artist._embedded[
      "wp:featuredmedia"
    ][0].media_details.sizes.large.source_url;

  const parent = document.querySelector("main");
  parent.appendChild(clone);
}

getData();
