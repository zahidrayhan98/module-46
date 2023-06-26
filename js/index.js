const allCountries=()=>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res=>res.json())
    .then (data=>displayCountry(data))
}
 const displayCountry=countries=>{
    // console.log(countries);
    const allCountryHtml=countries.map(country=>countryHtml(country))
    // console.log(allCountryHtml[0]);
    const container =document.getElementById('countries');
    container.innerHTML=allCountryHtml.join(' ');

 }
 const countryHtml=country=>{
    return`

   <div class="country">
   <h2>${country.name.common} </h2>
    <img src="${country.flags.png}" alt="">

   </div>
    
    `
 }
allCountries();