document.getElementById("consulta").addEventListener("click", async () => {
	const moneda = document.getElementById("moneda_a_convertir").value;
	const res = await fetch(`https://mindicador.cl/api/${moneda}`);
	const data = await res.json();

	// Toma los últimos 10 días
	const serie = data.serie.slice(0, 10).reverse();  // metodo slice: devuelve una copia de una parte del array dentro de un nuevo array empezando por inicio hasta fin . reverse= invierte el orden de los elementos de una matriz y modifica la matriz original directamente
  
  //eje horizontal
	const labels = serie.map((item) => item.fecha.split("T")[0]); // metodo split: divide una cadena de texto en un array de subcadenas usando un delimitador especificado. separador: El carácter o patrón que se usará como punto de corte.
  
  //eje vertical
	const valores = serie.map((item) => item.valor);
	
  const chartData = {
		labels,
		datasets: [
			{
				label: `Historial últimos 10 días (${moneda.toUpperCase()})`,
				borderColor: "rgb(47, 154, 248)",
				data: valores,
			},
		],
	};

	const config = {
		type: "line",
		data: chartData,
	};

	const myChart = document.getElementById("myChart");
	myChart.style.backgroundColor = "white";

	// Destruir gráfico anterior si existe
	if (window.graficoMoneda) {
		window.graficoMoneda.destroy();
	}
	window.graficoMoneda = new Chart(myChart, config);
});
