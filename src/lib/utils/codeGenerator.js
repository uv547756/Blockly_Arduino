export function generateArduinoCode(workspace, pythonGenerator) {
  if (!workspace || !pythonGenerator) {
    return "Error: Workspace or Python generator not initialized.";
  }

  try {
    let imports = [];
    const blocks = workspace.getAllBlocks(false);
    const hasLEDBlocks = blocks.some(block =>
      block.type === 'turn_on_led' || block.type === 'turn_off_led' || block.type == 'button_led'
    );

    //only import if relevant blocks are used in workspace
    if (hasLEDBlocks) {
      imports = [
        'import pyfirmata\n import Arduino, util\n',
        'import time\n',
        '\n',
        'board = Arduino(\'/dev/ttyUSB0\')\n',
        'it = util.Iterator(board)\n',
        'it.start()\n'
      ];
    }

    const blocklyCode = pythonGenerator.workspaceToCode(workspace);
    return imports.join('') + (hasLEDBlocks ? '\n' : '') + blocklyCode;
  } catch (error) {
    console.error('Code generation Failed: ', error);
    return 'Error generating code: ' + error.message;
  }
}
