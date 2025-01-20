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
  },
  {
    "type": "button_led",
    "message0": "When button on pin %1 is pressed, set LED on pin %2 to %3",
    "args0": [
      {
        "type": "field_dropdown",
        "name": "Button_PIN",
        "options": [
          ["2","2"],["3", "3"], ["4", "4"],
          ["5", "5"], ["6", "6"], ["7", "7"],
          ["8", "8"], ["9", "9"], ["10", "10"],
          ["11", "11"], ["12", "12"], ["13", "13"]
        ]
      },
      {
        "type": "field_dropdown",
        "name": "LED_PIN",
        "options": [
          ["13", "13"], ["12", "12"], ["11", "11"],
          ["10", "10"], ["9", "9"], ["8", "8"],
          ["7", "7"], ["6", "6"], ["5", "5"],
          ["4", "4"], ["3", "3"], ["2", "2"]
        ]
      },
      {
        "type": "field_dropdown",
        "name": "STATE",
        "options": [
          ["ON","1"],
          ["OFF","0"]
        ]
      }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 90,
    "tooltip": "Control LED based on button press",
    "helpUrl": ""
  }
];
