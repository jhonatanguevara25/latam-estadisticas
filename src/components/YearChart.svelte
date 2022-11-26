<script lang="ts">
  import type { valueByYear } from "src/utils/getValuesByYear";

  import Line from "svelte-chartjs/src/Line.svelte";
  import Loading from "./Loading.svelte";
  export let valuesByYear: valueByYear[] = [];
  export let loadingValues: boolean;

  $: dataLine = {
    labels: valuesByYear.map((value) => value.yearId.substring(2)),
    datasets: [
      {
        label: "Valor/Año",
        fill: true,
        lineTension: 0.3,
        backgroundColor: "rgba(225, 204,230, .3)",
        borderColor: "rgb(205, 130, 158)",
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
        data: valuesByYear.map((value) => value.totalValue),
      },
    ],
  };
</script>


{#if !loadingValues}
  <div>
    <h2>Gráfico según Años</h2>
    <Line data={dataLine} options={{ responsive: true }} />
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
