<script>
  import Calculator from './components/calculator.svelte';

  let result = 0;
</script>

<style type="text/scss">
  div {
    border: 1px solid #0000ff;
    padding: 7px;
  }
</style>

<template type="text/pug">
  div
    <Calculator bind:value="{result}" />
    span &nbsp;=&nbsp;
    b {result.toString()}
</template>
