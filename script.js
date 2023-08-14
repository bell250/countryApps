function showC() {
    const continent = document.querySelector('.choice');
    continent.style.display = 'block';
}
const mode = document.querySelector('h3');
const body = document.querySelector('body');
const header = document.querySelector('.header1')
mode.addEventListener("click", () => {
    document.body.classList.toggle("dark");
});

async function countries() {
    const url = await fetch("https://restcountries.com/v3.1/all");
    const res = await url.json();
    console.log(res);
    res.forEach(element => {
        displayCountry(element);
    });
}
function displayCountry(data) {
    let main = document.querySelector('.main');
    let div = document.createElement('div');
    div.classList.add("country");
    const flag = data.flags.png;
    div.innerHTML = `
<div class="img">
    <img src="${flag}" class="img"></img>
</div>
<div class="country-info">
            <h5 class="countryName">${data.name.common}</h5>
            <p><strong>Population:</strong> ${data.population}</p>
            <p class="regionName"><strong>Region:</strong> ${data.region}</p>
            <p><strong>Capital:</strong> ${data.capital}</p>
        </div>`;
        main.appendChild(div);
}
countries();