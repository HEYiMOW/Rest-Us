import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';

import('../DATA.json').then(({
    default: jsonData,
}) => {
    const resto = jsonData.resto;
    console.log(resto);
    let restoList = '';
    resto.forEach((data_resto) => {
        restoList +=
            `
                <div class="col">
                    <div class="card">
                        <div class="card-img">
                            <div class="city-label">
                                <span class="city-label-text">
                                    Kota ${data_resto.city}
                                </span>
                            </div>
                            <img src="${data_resto.pictureId}" alt=" ${data_resto.name}">
                        </div>
                        <div class="card-body">
                            <div class="rating">
                                <span>⭐ ${data_resto.rating}</span>
                            </div>
                            <h3 class="card-title">
                                <a href="./restaurant/${data_resto.id}" title="Link ke halaman detail makanan">${data_resto.name}</a>
                            </h3>
                            <p class="card-text">${data_resto.description}</p>
                        </div>
                    </div>
                </div>
                `;
    });
    document.querySelector('#resto-list').innerHTML = restoList;
});

const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', () =>{
    navbarLinks.classList.toggle('active')
})
