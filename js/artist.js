// fetch the data

getData();

async function getData() {
  let result = await fetch(
    "https://johannela.dk/wp-kune/wp-json/wp/v2/artist/81?_embed"
  );

  let data = await result.json();

  showData(data);
}

// display artist description

function showData(data) {
  console.log(data);
  document.querySelector(".artist_description").textContent = data.description;
  document.querySelector(".artist_title").textContent = data.title.rendered;
  document.querySelector(".artist_country").textContent = data.country;
  document.querySelector(".artist_location_input").textContent = data.stage;
  document.querySelector(".artist_when_input").textContent = data.when;
  document.querySelector(".artist_image").src =
    data._embedded["wp:featuredmedia"][0].media_details.sizes.large.source_url;
  if (data.soundcloud) {
    document.querySelector(".input__soundcloud").href = data.soundcloud;
    document.querySelector(".input__soundcloud").classList.add("dark_some");
    document
      .querySelector(".input__soundcloud")
      .classList.remove("bright_some");
  } else {
    document.querySelector(".input__soundcloud").classList.add("bright_some");
    document.querySelector(".input__soundcloud").classList.remove("dark_some");
  }
  if (data.instagram) {
    document.querySelector(".input__instagram").href = data.instagram;
    document.querySelector(".input__instagram").classList.add("dark_some");
    document.querySelector(".input__instagram").classList.remove("bright_some");
  } else {
    document.querySelector(".input__instagram").classList.add("bright_some");
    document.querySelector(".input__instagram").classList.remove("dark_some");
  }
  if (data.vimeo2) {
    document.querySelector(".input__vimeo").href = data.vimeo2;
    document.querySelector(".input__vimeo").classList.add("dark_some");
    document.querySelector(".input__vimeo").classList.remove("bright_some");
  } else {
    document.querySelector(".input__vimeo").classList.add("bright_some");
    document.querySelector(".input__vimeo").classList.remove("dark_some");
  }
  if (data.youtube) {
    document.querySelector(".input__youtube").href = data.youtube;
    document.querySelector(".input__youtube").classList.add("dark_some");
    document.querySelector(".input__youtube").classList.remove("bright_some");
  } else {
    document.querySelector(".input__youtube").classList.add("bright_some");
    document.querySelector(".input__youtube").classList.remove("dark_some");
  }
}
