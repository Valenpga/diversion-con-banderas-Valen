/*const listaDePaises = document.getElementById('countries-list');

const getInformacion = async () => {
    try{
        const response = await fetch('https://restcountries.com/v3/all');
        if(!response.ok) {
            throw new Error ('Hay un  error' , response.status);
        }
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log('Error al obtener datos ',error);
    }
    
};

getInformacion().then((data) => {
    const Paises = data 
    listaDePaises.innerHTML = ''
    Paises.forEach(data => {
        listaDePaises.innerHTML += `
        <ul>
            <img src= ${data.flags}/>
                <li>${data.capital}</li>
                <li>${data.population}</li>
                <li>${data.car}</li>
        </ul>`
    })
})
const listaDePaises = document.getElementById('countries-list');

const getInformacion = async () => {
    try{
        const response = await fetch('https://restcountries.com/v3/all');
        if(!response.ok) {
            throw new Error ('Hay un  error' , response.status);
        }
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log('Error al obtener datos ',error);
    }
    
};
*/
window.onload = function() {
    const listaDePaises = document.getElementById('countries-list');

    const getInformacion = async () => {
      try{
        const response = await fetch('https://restcountries.com/v3/all');
        if(!response.ok) {
          throw new Error ('Hay un  error' , response.status);
        }
        const data = await response.json();
        console.log(data);
        return data;
      } catch (error) {
        console.log('Error al obtener datos ',error);
      }

    };

    getInformacion().then((data) => {
      listaDePaises.innerHTML = ''
      data.forEach(element => {
        listaDePaises.innerHTML += `
      <ul>
          <img src= ${element.flags}/>
          <li>${element.capital}</li>
          <li>${element.population}</li>
          <li>${element.car}</li>
      </ul>`
      })
    })
  }