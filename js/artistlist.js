//fetch database
function init() {
  getData();
  buildFilters();
}

function buildFilters() {
  const buttons = document.querySelectorAll("button");
  buttons.forEach((button) => {
    button.addEventListener("click", filter);
  });
}

function filter(e) {
  console.log(e.target.className);
  let currentCat = e.target.className;
  const artists = document.querySelectorAll(".artist");
  if (currentCat === "all") {
    artists.forEach((artistEl) => {
      artistEl.classList.remove("hidden");
    });
  } else {
    artists.forEach((element) => {
      if (element.classList.contains(currentCat)) {
        element.classList.remove("hidden");
      } else {
        element.classList.add("hidden");
      }
    });
  }
}

async function getData() {
  let result = await fetch(
    "https://johannela.dk/wp-kune/wp-json/wp/v2/artist?_embed&per_page=100"
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

// button.addEventListener("click", showOnlyAudio);
// button.addEventListener("click", showOnlyArt);
// button.addEventListener("click", showOnlyActivities);

// function showOnlyAudio() {
//   const all = document.querySelectorAll("article.artist");
//   all.forEach((artists) => {
//     if (artists.classList.contains("audio")) {
//       artists.classList.remove("hidden");
//     } else {
//       artists.classList.add("hidden");
//     }
//   });
// }
// function showOnlyArt() {
//   const all = document.querySelectorAll("article.artist");
//   all.forEach((artists) => {
//     if (artists.classList.contains("art")) {
//       artists.classList.remove("hidden");
//     } else {
//       artists.classList.add("hidden");
//     }
//   });
// }
// function showOnlyActivities() {
//   const all = document.querySelectorAll("article.artist");
//   all.forEach((artists) => {
//     if (artists.classList.contains("activities")) {
//       artists.classList.remove("hidden");
//     } else {
//       artists.classList.add("hidden");
//     }
//   });
// }
// copy.querySeelector("article").classList.add(data.category);

function showArtistCover(artist) {
  //   //template
  const template = document.querySelector("template").content;
  //   //clone
  const clone = template.cloneNode(true);
  console.log(artist._embedded["wp:term"][0][0].name);
  clone
    .querySelector("article")
    .classList.add(artist._embedded["wp:term"][0][0].name);

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

init();
