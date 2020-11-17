<!--
  @component
  Calculator
-->

<script>
  import calculate from '../helpers/calculate';
  import Operation from './operation.svelte';

  let values = [0];
  let operations = [];
  let result = 0;

  function add() {
    values = [...values, 0];
  }

  $: result = calculate(values, operations);

  export { result as value };
</script>

<style>
  div {
    border: 1px solid #ff0000;
    padding: 7px;
  }

  input {
    border: 1px solid #777777;
    color: inherit;
    font: inherit;
    padding: 3px 7px;
  }
</style>

<template>
  <div>
    {#each values as value, index}
      {#if index > 0}
        <Operation bind:value="{operations[index - 1]}" />
      {/if}
      <input bind:value type="number" />
    {/each}
    <button on:click="{add}" type="button">Add value</button>
    <span>&nbsp;=&nbsp;</span>
    <b>{result.toString()}</b>
  </div>
</template>
