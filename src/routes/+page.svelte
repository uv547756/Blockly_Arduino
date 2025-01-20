<script>
  import * as Blockly from 'blockly';
  import 'blockly/python';
  import {pythonGenerator} from 'blockly/python';
  import * as En from 'blockly/msg/en';
  import { onMount } from 'svelte';
  import { ledBlocks } from '$lib/blocks/ledBlocks';
  import { setupPythonGenerators } from '$lib/generators/pythonGenerators';
  import { toolbox } from '$lib/config/toolbox';
  import { generateArduinoCode } from '$lib/utils/codeGenerator';
  import '../styles/global.css';
  
  // import { getPorts } from '$lib/utils/ports';

  let blocklyDiv;
  let workspace;
  let codeOutput;
  
  // chal ja bhai

  let selectedPort = '/dev/ttyUSB0';
  let availPorts = [
    '/dev/ttyUSB0',
    '/dev/ttyUSB1',
    '/dev/ttyACM0',
    '/dev/ttyACM1',
    'COM1',
    'COM2',
    'COM3',
    'COM4'
  ];

  // Initialize blocks and generators
  Blockly.common.defineBlocksWithJsonArray(ledBlocks);
  setupPythonGenerators(pythonGenerator);

  function generateCode() {
    codeOutput = generateArduinoCode(workspace, pythonGenerator);
  }
 
  onMount(() => {
    Blockly.setLocale(En);
    workspace = Blockly.inject(blocklyDiv, {
      toolbox,
      zoom: {
        controls: true,
        wheel: true,
        startScale: 1,
        maxScale: 3,
        minScale: 0.3,
        scaleSpeed: 1.2
      },
      move: {
        scrollbars: true,
        drag: true,
        wheel: true
      },
      grid: {
        spacing: 20,
        length: 3,
        colour: '#ccc',
        snap: true
      },
      trashcan: true
    });
  });
</script>

<style>
</style>

<div class="container">
  <h1 class="header">Blockly Arduino LED Control</h1>
  
  <!-- Port selection -->
  <div class="port-selector">
    <label for="port_select">Select Arduino Port: </label>
    <select
      id="port-select"
      bind:value={selectedPort}
      class="port-select"
    >
      {#each availPorts as port}
        <option value={port}>{port}</option>
      {/each}
    </select>
  </div>
  
  <div id="blockly-container" bind:this={blocklyDiv}></div>
  <div class="button-container">
    <button on:click={generateCode}>Generate Code</button>
  </div>
  {#if codeOutput}
    <div class="code-display">
      <div class="code-header">Generated Python Code:</div>
      {codeOutput}
    </div>
  {/if}
</div>
