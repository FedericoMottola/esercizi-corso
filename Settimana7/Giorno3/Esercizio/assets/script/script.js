const url = 'https://striveschool-api.herokuapp.com/books';

        fetch(url)
        .then(response => response.json()
        .then(data => populateHomePage(data)))


        function populateHomePage(data) {
            data.forEach(book => {
                let card = document.createElement('div');
                card.classList.add('card');
                card.style.width = '18rem';
                card.style.height = '40rem';
                card.style.margin = '10px';
                card.style.display = 'inline-block';
                

                let img = document.createElement('img');
                img.src = book.img;
                img.classList.add('card-img-top');
                img.alt = '...';

                let cardBody = document.createElement('div');
                cardBody.classList.add('card-body');

                let cardTitle = document.createElement('h5');
                cardTitle.classList.add('card-title');
                cardTitle.innerText = book.title;

                let cardText = document.createElement('p');
                cardText.classList.add('card-text');
                cardText.innerText = book.price + '€';

                let cardLink = document.createElement('a');
                cardLink.classList.add('btn', 'btn-primary', 'me-2');

               
            
                cardLink.href = '#';
                cardLink.innerText = 'Scarta';

                

                cardBody.appendChild(cardTitle);
                cardBody.appendChild(cardText);
                cardBody.appendChild(cardLink);
               

                card.appendChild(img);
                card.appendChild(cardBody);

                document.querySelector('#root').appendChild(card);
                
               
                cardLink.onclick = function() {nascondiCard(card)};
                
            })
        }


function nascondiCard (card) {
           
        card.style.display = 'none';

    }