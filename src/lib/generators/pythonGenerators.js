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

  pythonGenerator.forBlock['button_led'] = function(block) {
    const buttonPIN = block.getFieldValue("BUTTON_PIN");
    const ledPIN = block.getFieldValue("LED_PIN");
    const state = block.getFieldValue("STATE");

    return `
      board.digital[${buttonPIN}].mode = pyfirmata.INPUT
      while True:
          button_state == TRUE: 
          if board.digital[${ledPIN}].write(${state})
            board.digital[${ledPIN}].write(${state})
          time.sleep(0.1)
      `;
    };

  pythonGenerator.addReservedWords('board');
}

