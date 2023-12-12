const token = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTc4MmM1NmMwNTgzNTAwMTg1MjJkZTYiLCJpYXQiOjE3MDIzNzQ0ODYsImV4cCI6MTcwMzU4NDA4Nn0.rh9ckj0X2izoP_x9c5ALxf1Wr78dNgDxMOvx3EwH74A"
const url = "https://striveschool-api.herokuapp.com/api/product/"



let products = []

const getProducts = () => {
    fetch(url, {
        headers: {
                      "Authorization": token,
                       "Content-Type": "application/json"
                   }
    })
    .then(response => response.json())
    .then(data => {
        products = data
        createCards(data);
    })
    .catch(err => alert(err))
}

window.onload = () => {
       getProducts();
    
}

const sendData = (action, id) => {
    const newProduct =  { 
        "name": "Nokia 55",
        "description": "Indestructible cellphone",
        "brand": "Nokia",
        "imageUrl": "https://cdn.pixabay.com/photo/2018/01/23/01/24/cellphone-3100428_1281.png",
        "price": 99
        }

    const finalUrl = action === 'edit' ? url + id : url

    fetch(finalUrl, {
        method: action === 'edit' ? "PUT" : "POST",
        headers: {
            "Authorization": token,
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newProduct)
    })
    .then((response) => response.json())
    .then(data => {
        if (action === 'edit') {
            products.splice(products.findIndex(element => element._id === id), 1, data)
            createCards(products)
        } else {
            products.push(data)
            createCards(products)
        }
        setAlert(action, 200)
    })
    .catch(() => {
        setAlert(action, 400)
})
}

function createCards (products) {
    console.log(products);
    let cards = document.getElementById('row');
    cards.innerHTML = '';
    products.forEach(product => {
        let card = `<div class="col mb-4">
        <div class="card mb-4 shadow-sm h-100">
        <img src=${product.imageUrl} class="card-img-top" width="30" height="500" ; object-fit: cover; cursor: pointer" onclick="goToDetails(${product._id})">
          <div class="card-body d-flex flex-column">
            <h5 class="card-title" onclick="goToDetails(${product._id})" style="cursor: pointer">${product.name}</h5>
              <p class="card-text mt-auto">
                ${product.brand}
              </p>
              <p class="card-text mt-auto">
                Prezzo: ${product.price}€
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
                    Modifica
                  </button>
                  <button
                    type="button"
                    class="btn btn-sm btn-outline-secondary"
                      onclick="showDetails('${product._id}')">
                    Scopri di più
                  </button>
                </div>
                <small class="text-muted"></small>
            </div>
          </div>
        </div>
      </div>`;
 cards.innerHTML += card;
    })
}

// Dettagli
function showDetails(productId) {
    window.location.href = `./details.html?id=${productId}` ;
}


// JS Back office