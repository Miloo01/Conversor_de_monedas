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
            const cantidad = parseFloat(inputCantidad.value);
            const moneda = selectMoneda.value;

            pResultado.textContent = "";

            let valorConversion;
            
            if (moneda === "dolar"){
                valorConversion = cantidad/data.dolar.valor;
            } else if (moneda === "uf"){
                valorConversion = cantidad/data.uf.valor;
            } else if (moneda === "utm"){
                valorConversion = cantidad/data.utm.valor;
            }

            const resultadoFinal = parseFloat(valorConversion.toFixed(2));
            pResultado.textContent = `Resultado: $${resultadoFinal}`;

            
            
        });
    
    } catch (error){

        console.log (error);
    }
}

getIndicadores();


