<script lang="ts">
  import type { valueByCountry } from "src/utils/getValuesByCountry";

  import Bar from "svelte-chartjs/src/Bar.svelte";
  import Loading from "./Loading.svelte";
  export let valuesByCountry: valueByCountry[] = [];
  export let loadingValues: boolean;

  $: dataLine = {
    labels: valuesByCountry.map((value) => value.countryId),
    datasets: [
      {
        label: "Valor/País",
        fill: true,
        lineTension: 0.3,
        backgroundColor: [
          "rgba(255, 134,159,0.4)",
          "rgba(98,  182, 239,0.4)",
          "rgba(255, 218, 128,0.4)",
          "rgba(113, 205, 205,0.4)",
          "rgba(170, 128, 252,0.4)",
          "rgba(255, 177, 101,0.4)",
        ],
        borderWidth: 2,
        borderColor: [
          "rgba(255, 134, 159, 1)",
          "rgba(98,  182, 239, 1)",
          "rgba(255, 218, 128, 1)",
          "rgba(113, 205, 205, 1)",
          "rgba(170, 128, 252, 1)",
          "rgba(255, 177, 101, 1)",
        ],
        borderCapStyle: "butt",
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: "miter",
        pointBorderColor: "rgb(205, 130,1 58)",
        pointBackgroundColor: "rgb(255, 255, 255)",
        pointBorderWidth: 10,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "rgb(0, 0, 0)",
        pointHoverBorderColor: "rgba(220, 220, 220,1)",
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: valuesByCountry.map((value) => value.totalValue),
      },
    ],
  };
</script>

{#if !loadingValues}
  <div>
    <h2>Gráfico según Paises</h2>
    <Bar data={dataLine} options={{ responsive: true }} />
  </div>
{:else}
  <Loading />
{/if}

<style>
  div {
    
    max-width: 650px;
    margin: 0 auto;
  }

  h2{
    text-align: center;
    font-weight: 600;
    font-size: 30px;
    color: #2f5968;
    margin-bottom: 30px;
  }
</style>
