const url = "https://api.pexels.com/v1/search?query="

const headers = {
    "Authorization": "LEOaKbQvov9nx18m4Dy6ACR0NbRjv60gUEkrcQpogzLNVwU3VGeh1Hq3"
    
}

// const getPhotos = function (query) {
//     fetch(url + query, {
//         headers: token
//     })
//     .then(response => response.json())
//     .then(data => {
//         console.log(data)
//         renderPhotos(data.photos)
//         })
// .catch((err) => {
//     console.log(err)
// })
//     }

// const renderPhotos = function (photos) {
//     let row = document.querySelector('.album .container .row')
//     row.innerHTML = ''
//     photos.forEach((photo) =>{
//         let newCol = `<div class="col-md-4">
//         <div class="card mb-4 shadow-sm">
//           <a href="./pexels-details.html?photoId =${photo.id}">
//           <img src= ${photo.src.small} style="width: 100%" /> </a>
//           <div class="card-body">
//           <a href="./pexels-details.html?photoId =${photo.id}">
//           <img src= ${photo.src.small} style="width: 100%" /> <h5 class="card-title">Lorem Ipsum</h5> </a>
            
//             <p class="card-text">
//               This is a wider card with supporting text below as a natural
//               lead-in to additional content. This content is a little bit
//               longer.
//             </p>
//             <div class="d-flex justify-content-between align-items-center">
//               <div class="btn-group">
//                 <button type="button" class="btn btn-sm btn-outline-secondary">
//                   View
//                 </button>
//                 <button type="button" class="btn btn-sm btn-outline-secondary">
//                   Edit
//                 </button>
//               </div>
//               <small class="text-muted">9 mins</small>
//             </div>
//           </div>
//         </div>
//       </div>`
//       row.innerHTML += newCol
//     })
// }





// window.onload = function () {
//     let primaryButton = document.querySelector('.btn-primary')
//     primaryButton.addEventListener('click', () => {
//         getPhotos('lakes')
//     })
// }


const drawCard = image => `<div class="col mb-4">
                          <div class="card mb-4 shadow-sm h-100">
                          <img src=${image.src.large} class="card-img-top" alt=${image.alt} style="height: 200px; object-fit: cover; cursor: pointer" onclick="goToDetails(${image.id})">
                            <div class="card-body d-flex flex-column">
                              <h5 class="card-title" onclick="goToDetails(${image.id})" style="cursor: pointer">${image.alt}</h5>
                                <p class="card-text mt-auto">
                                  <a href=${image.photographer_url} target="_blank">
                                      ${image.photographer}
                                  </a>
                                </p>
                                <div
                                  class="d-flex justify-content-between align-items-center"
                                >
                                  <div class="btn-group">
                                    <button
                                      type="button"
                                      class="btn btn-sm btn-outline-secondary"
                                      onclick="modalLogic(event)"
                                    >
                                      View
                                    </button>
                                    <button
                                      type="button"
                                      class="btn btn-sm btn-outline-secondary"
                                        onclick="hideMe(event)">
                                      Hide
                                    </button>
                                  </div>
                                  <small class="text-muted"></small>
                              </div>
                            </div>
                          </div>
                        </div>`;

    const hideMe = event => {
      // event.currentTarget.parentNode.parentNode.parentNode.parentNode.parentNode.remove(); 
      event.currentTarget.closest(".col").remove();
    };

    const goToDetails = id => {
      window.location.assign("./details.html?picId=" + id);
    };

    const modalLogic = e => {
      const cardImage = e.target.closest(".card").querySelector("img");
      e.target.setAttribute("data-toggle", "modal");
      e.target.setAttribute("data-target", "#exampleModal");

      let modal = document.querySelector(".modal");
      let image = document.createElement("img");
      image.src = cardImage.src;

      image.className = "img-fluid w-100";
      modal.querySelector(".modal-body").innerText = "";
      modal.querySelector(".modal-body").appendChild(image);
    };

    let loadImages = async query => {
      const resp = await fetch("https://api.pexels.com/v1/search?query=" + query, {
        method: "GET",
        headers: {
          Authorization: "LEOaKbQvov9nx18m4Dy6ACR0NbRjv60gUEkrcQpogzLNVwU3VGeh1Hq3"
        }
      })
      const body = await resp.json()

      const grid = document.getElementById("myGrid");

      grid.innerHTML = "";
      body.photos.forEach(photo => {
        grid.innerHTML += drawCard(photo);
      });
    };

    let searchQuery;

    const handleSearchQuery = e => {
      searchQuery = e.target.value.toLowerCase();
    };

    const searchImages = () => {
      loadImages(searchQuery);
    };


    window.onload = () => {
      const loadImagesBtn = document.querySelector(".jumbotron a.btn:first-of-type")
      loadImagesBtn.onclick = () => loadImages('lakes')

      const loadSecondaryImagesBtn = document.querySelector(".jumbotron a.btn:nth-of-type(2)")
      loadSecondaryImagesBtn.onclick = () => loadImages('stars')

      const searchInput = document.querySelector(".jumbotron .form-control")
      searchInput.oninput = (event) => handleSearchQuery(event)

      const searchBtn = document.querySelector(".jumbotron button.btn")
      searchBtn.onclick = () => searchImages()
    }


    