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

  let blocklyDiv;
  let workspace;
  let codeOutput;

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
  .container {
    display: flex;
    flex-direction: column;
    padding: 20px;
    max-width: 1200px;
    margin: 0 auto;
  }

  #blockly-container {
    height: 60vh;
    margin: 20px 0;
    border: 1px solid #ddd;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  .button-container {
    text-align: center;
    margin: 20px 0;
  }

  button {
    padding: 10px 20px;
    font-size: 16px;
    cursor: pointer;
    background-color: #007acc;
    color: white;
    border: none;
    border-radius: 5px;
    transition: background-color 0.3s ease;
  }

  button:hover {
    background-color: #005f99;
  }

  .header {
    text-align: center;
    margin: 20px 0;
    color: #333;
  }

  .code-display {
    background-color: #f5f5f5;
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 20px;
    margin-top: 20px;
    font-family: 'Courier New', Courier, monospace;
    white-space: pre-wrap;
    max-height: 300px;
    overflow-y: auto;
  }

  .code-header {
    font-size: 1.2em;
    margin-bottom: 10px;
    color: #333;
  }

</style>

<div class="container">
  <h1 class="header">Blockly Arduino LED Control</h1>
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
