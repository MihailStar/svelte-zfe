<!--
  @component
  Operation
-->

<script>
  import { operations } from '../helpers/calculate';

  let currentOperation = operations[0];

  export { currentOperation as value };
</script>

<style>
  select {
    border: 1px solid #777777;
    color: inherit;
    font: inherit;
    padding: 3px 7px;
  }
</style>

<template>
  <select bind:value="{currentOperation}">
    {#each operations as operation}
      <option value="{operation}">{operation}</option>
    {/each}
  </select>
</template>
