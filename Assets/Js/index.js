async function getIndicadores() {

    try {
        const urlBase = await fetch("https://mindicador.cl/api/");
        console.log(urlBase);
        const data = await urlBase.json();

        console.log(data);

        const inputCantidad = document.querySelector("#cantidad_clp")
        const selectMoneda = document.querySelector("#moneda_a_convertir")
        const btnConsulta = document.querySelector("#consulta")
        const pResultado = document.querySelector("#resultado")


       
        btnConsulta.addEventListener("click", () => {
            const cantidad = (inputCantidad.value);
            const moneda = selectMoneda.value;

            pResultado.textContent = "";
            
            if (moneda === "dolar"){
                pResultado.textContent = `Resultado:$ ${cantidad/data.dolar.valor} `
            } else if (moneda === "uf"){
                pResultado.textContent = `Resultado:$ ${cantidad/data.uf.valor}`
            } else if (moneda === "utm"){
                pResultado.textContent = `Resultado:$ ${cantidad/data.utm.valor}`
            }
            
        });
    
    } catch (error){

        console.log (error);
    }
}

getIndicadores();


