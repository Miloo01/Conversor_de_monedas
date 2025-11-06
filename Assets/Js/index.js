async function getRandomUser() {

    try {
        const urlBase = await fetch("https://mindicador.cl/api/");
        console.log(urlBase);
        const data = await urlBase.json();

        console.log(data);

        const inputCantidad = document.querySelector("#cantidad_clp")
        const selectMoneda = document.querySelector("#moneda_a_convertir")
        const btnConsulta = document.querySelector("#consulta")
        const pResultado = document.querySelector("#resultado")


       

       pResultado.textContent = `${data.dolar.valor}`
        




    } catch (error) {
        alert(error);
    }
   

}

getRandomUser();



const ctx = document.getElementById('myChart');

  new Chart(ctx, {
    type: 'line',
    data: {
      labels: ['2025-10-27', '2025-10-28', '2025-10-29', '2025-10-30', '2025-10-31', '2025-11-01', '2025-11-02', '2025-11-03','2025-11-04', '2025-11-05'],
      datasets: [{
        label: 'Historial ultimos 10 días',
        data: [900, 910, 920, 930, 940, 955,960,975,982,990,],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
});