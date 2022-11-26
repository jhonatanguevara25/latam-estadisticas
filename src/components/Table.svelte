<script lang="ts">
  import type { valueTable } from "../utils/getValueTable";
  import Loading from "./Loading.svelte";

  export let tableValues: valueTable[] = [];
  export let loadingValues: boolean;

  let years = [];
  let reducedValues = [];

  $: (() => {
    years = tableValues
      .map((value) => value.yearId.substring(2))
      .filter((value, index, self) => self.indexOf(value) === index);

    const values = tableValues.map((value) => {
      return { country: value.countryId, value: value.totalValue };
    });

    const countries = tableValues
      .map((value) => value.countryId)
      .filter((value, index, self) => self.indexOf(value) === index);

    // reducedValues: { value: number[]; country: string }[] = countries.map(
    reducedValues = countries.map((country) => {
      return {
        country,
        value: [],
      };
    });

    values.forEach((value) => {
      const i = reducedValues.findIndex((v) => v.country === value.country);
      reducedValues[i] = {
        country: value.country,
        value: [...reducedValues[i].value, value.value],
      };
    });
  })();
</script>

{#if !loadingValues}
  <div class="container mt-3">
    <h2>Tabla según Años y Países</h2>
    <table class="table table-bordered datagrid">
      <tr>
        <th />
        {#each years as year}
          <th scope="col"> {year}</th>
        {/each}
      </tr>
      {#each reducedValues as value}
        <tr>
          <th scope="row">{value.country}</th>
          {#each value.value as value}
            <td>{value}</td>
          {/each}
        </tr>
      {/each}
    </table>
  </div>
{:else}
  <Loading />
{/if}

<style>
   table {
    margin: 30px 0px 50px 0px ;
     border: #2f5968 solid 2px;
     padding: 5px;
     text-align: center;
     width: 100%;
  }
 
  table th{
    color: rgb(255, 255, 255);
    background-color: #2f5968;
  }

  h2{
    margin-top: 50px;
    text-align: center;
    font-weight: 600;
    font-size: 30px;
    color: #2f5968;
  }

</style>