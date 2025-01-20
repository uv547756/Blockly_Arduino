export const ledBlocks = [
  {
    "type": "turn_on_led",
    "message0": "Turn on LED at GPIO %1",
    "args0": [
      {
        "type": "field_dropdown",
        "name": "PIN",
        "options": [
          ["13", "13"], ["12", "12"], ["11", "11"],
          ["10", "10"], ["9", "9"], ["8", "8"],
          ["7", "7"], ["6", "6"], ["5", "5"],
          ["4", "4"], ["3", "3"], ["2", "2"]
        ]
      }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 230,
    "tooltip": "Turn on an LED connected to the specified GPIO pin.",
    "helpUrl": ""
  },
  {
    "type": "turn_off_led",
    "message0": "Turn off LED at GPIO %1",
    "args0": [
      {
        "type": "field_dropdown",
        "name": "PIN",
        "options": [
          ["13", "13"], ["12", "12"], ["11:workspace", "11"],
          ["10", "10"], ["9", "9"], ["8", "8"],
          ["7", "7"], ["6", "6"], ["5", "5"],
          ["4", "4"], ["3", "3"], ["2", "2"]
        ]
      }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 230,
    "tooltip": "Turn on an LED connected to the specified GPIO pin.",
    "helpUrl": ""
  },
  {
    "type": "delay",
    "message0": "Delay for %1 seconds",
    "args0": [
      {
        "type": "field_number",
        "name": "DELAY",
        "value": 1,
        "min": 0,
        "precision": 0.1
      }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 230,
    "tooltip": "Pause execution for specified milliseconds",
    "helpUrl": ""
  }
];
