export function setupPythonGenerators(pythonGenerator) {
  pythonGenerator.forBlock['turn_on_led'] = function(block) {
    const pin = block.getFieldValue('PIN');
    return `board.digital[${pin}].write(1)\n`;
  };

  pythonGenerator.forBlock['turn_off_led'] = function(block) {
    const pin = block.getFieldValue('PIN');
    return `board.digital[${pin}].write(0)\n`;
  };

  pythonGenerator.forBlock['delay'] = function(block) {
    const delay = block.getFieldValue('DELAY');
    return `time.sleep(${delay})\n`;
  };

  pythonGenerator.addReservedWords('board');
}


