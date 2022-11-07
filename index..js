const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "49c653ec64msh4623804764cb599p1d9fa9jsn8c40a37d5ec1",
    "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
  },
};

const firstAlbum = () => {
  const firstContainer = document.querySelector(".row1");
  console.log(firstContainer);

  fetch(
    "https://deezerdevs-deezer.p.rapidapi.com/search?q=justin-beiber",
    options
  )
    .then((response) => response.json())
    .then((songList) => {
      const songData = songList.data;
      console.log(songData);

    
      for (song of songData) {
        firstContainer.innerHTML += `
                                <div class="col-sm-4 col-md-4 col-lg-3 mb-3">
                                <div class="card mt-2 "style="height: 500px;">
                                    <img src= ${song.album.cover_big} class="card-img-top" alt="...">
                                    <div class="card-body">
                                      <h5 class="card-title">${song.title_short}</h5>
                                      <p class="card-text">Album: ${song.album.title}<br>
                                      Song Duration: ${song.duration}s</p>
                                      <a href="${song.link}" class="btn btn-primary">Listen on Deezer </a>
                                    </div>
                                  </div>
                                  </div>`;
      }
    })
    .catch(() => console.log("error"));
};

const secondAlbum = () => {
  const secondContainer = document.querySelector(".row2");
  fetch("https://deezerdevs-deezer.p.rapidapi.com/search?q=barbie", options)
    .then((response) => response.json())
    .then((songList) => {
      const songData = songList.data;
      console.log(songData);

      // console.log(songData)
      for (song of songData) {
        secondContainer.innerHTML += `<div class="col-sm-4 col-md-4 col-lg-3 mb-3">
    <div class="card "style="height: 500px;" >
        <img src= ${song.album.cover_big} class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${song.title_short}</h5>
          <p class="card-text">Album: ${song.album.title}<br>
          Song Duration: ${song.duration}s</p>
          <a href="${song.link}" class="btn btn-primary">Listen on Deezer </a>
        </div>
      </div>
      </div>`;
      }
    })
    .catch(() => console.log("error"));
};

const thirdAlbum = () => {
  const thirdContainer = document.querySelector(".row3");
  console.log(thirdContainer);
  fetch("https://deezerdevs-deezer.p.rapidapi.com/search?q=sclub-7", options)
    .then((response) => response.json())
    .then((songList) => {
      const songData = songList.data;

      for (song of songData) {
        thirdContainer.innerHTML += `
        <div class="col-sm-4 col-md-4 col-lg-3 mb-3"3>
        <div class="card " style="height: 500px;">
            <img class=img-fluid src= ${song.album.cover_big} class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${song.title_short}</h5>
              <p class="card-text">Album: ${song.album.title} <br>
              Song Duration: ${song.duration}s</p>
              <a href="${song.link}" class="mb-auto btn btn-primary">Listen on Deezer </a>
            </div>
          </div>
          </div>`;
      }
    })
    .catch(() => console.log("error"));
};

window.onload = () => {
  firstAlbum();
  secondAlbum();
  thirdAlbum();
};
