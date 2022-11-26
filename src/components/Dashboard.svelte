<script lang="ts">
  import { onMount } from "svelte";

  import { getAllEntries } from "../utils/getEntries";
  import type { valueByCountry } from "../utils/getValuesByCountry";
  import { getValuesByCountry } from "../utils/getValuesByCountry";
  import type { valueByYear } from "../utils/getValuesByYear";
  import { getValuesByYear } from "../utils/getValuesByYear";
  import type { valueTable } from "../utils/getValueTable";
  import { getValueTable } from "../utils/getValueTable";
  import CountryChart from "./CountryChart.svelte";
  import Loading from "./Loading.svelte";
  import Table from "./Table.svelte";
  import YearChart from "./YearChart.svelte";

  let series: {
    serieText: string;
    serieId: string;
  }[] = [];

  let loading = true;

  onMount(async () => {
    series = await getAllEntries();
    loading = false;
  });

  let selected: string;
  let valuesByCountry: valueByCountry[] = [];
  let valuesByYear: valueByYear[] = [];
  let tableValues: valueTable[] = [];
  let loadingValues = false;
  async function selectHandler() {
    loadingValues = true;
    valuesByCountry = await getValuesByCountry(selected);
    valuesByYear = await getValuesByYear(selected);
    tableValues = await getValueTable(selected);
    loadingValues = false;
  }
</script>

{#if !loading}
  <center>
    <select
      bind:value={selected}
      on:change={selectHandler}
      style="margin-top: 150px;"
    >
      <option
        value="default"
        disabled
        selected
        style="background-color: #2f5968; color:white;"
        >Opciones predilectas</option
      >
      <option value="SH.DYN.AIDS"
        >Personas mayores de 15 años, viviendo con VIH</option
      >
      <option value="SP.DYN.SMAM.MA"
        >Edad promedio de hombres, en su primer matrimonio</option
      >
      <option value="SP.DYN.SMAM.FE"
        >Edad promedio de mujeres, en su primer matrimonio.</option
      >
      <option value="SH.STA.DIAB.ZS"
        >Prevalencia de diabetes (%poblacion entre 25 y 79 años)</option
      >
      <option value="SH.MED.BEDS.ZS"
        >Camas de hospital (por cada 1000 personas)</option
      >
      <option value="SH.TBS.INCD"
        >Incidencia de TBC (por cada 1000 personas)</option
      >
      <option value="SP.DYN.LE00.IN">
        Expectativa de vida al nacer (en años)</option
      >

      <option
        value="default"
        disabled
        selected
        style="background-color: #2f5968; color:white;">Otras consultas</option
      >
      {#each series as entry}
        <option value={entry.serieId}>
          {entry.serieText}
        </option>
      {/each}
    </select>
  </center>
  <br /><br />
  <div class="row">
    <div class="col-sm-6"><YearChart {valuesByYear} {loadingValues} /></div>
    <div class="col-sm-6">
      <CountryChart {valuesByCountry} {loadingValues} />
    </div>
  </div>

  <Table {tableValues} {loadingValues} />
{:else}
  <Loading />
{/if}

<style>
  .row {
    margin: 0;
  }
</style>
