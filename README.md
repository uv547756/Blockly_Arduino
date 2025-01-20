# Blockly Arduino LED Control

A web-based visual programming interface for controlling Arduino LEDs using Blockly and SvelteKit.

## Features

- Visual block-based programming interface
- Custom blocks for LED control
- Real-time Python code generation
- Arduino integration via PyFirmata
- Intuitive drag-and-drop interface

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Arduino board
- Python with PyFirmata installed

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/uv547756/Blockly_Arduino.git

2. Install Dependencies:
   ```bash
   cd Blockly_Arduino
   npm install  

3. Start the server
   ```bash
   npm run dev

4. Open http://localhost:5173 in your browser

## Project Structure

## Project Structure

```text
src/
├── lib/
│   ├── blocks/
│   │   └── ledBlocks.js
│   ├── generators/
│   │   └── pythonGenerators.js
│   ├── config/
│   │   └── toolbox.js
│   └── utils/
│       └── codeGenerator.js
├── routes/
│   └── +page.svelte
└── styles/
    └── global.css
```

## Usage
```text
 1.Connect your Arduino board
 2.Use the Blockly interface to create your LED control program
 3.Click "Generate Code" to see the Python code
 4.Run the generated code to control your Arduino
```

## License
MIT

