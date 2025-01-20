export const toolbox = {
  "kind": "categoryToolbox",
    "contents": [
        {
            "kind": "category",
            "name": "Logic",
            "colour": "#5C81A6",
            "contents": [
                { "kind": "block", "type": "controls_if" },
                { "kind": "block", "type": "logic_compare" },
                { "kind": "block", "type": "logic_operation" },
                { "kind": "block", "type": "logic_negate" },
                { "kind": "block", "type": "logic_boolean" }
            ]
        },
        {
            "kind": "category",
            "name": "Loops",
            "colour": "#5CA65C",
            "contents": [
                { "kind": "block", "type": "controls_repeat_ext" },
                { "kind": "block", "type": "controls_whileUntil" }
            ]
        },
        {
            "kind": "category",
            "name": "Math",
            "colour": "#5CA65C",
            "contents": [
                { "kind": "block", "type": "math_number" },
                { "kind": "block", "type": "math_arithmetic" },
                { "kind": "block", "type": "math_single" }
            ]
        },
        {
            "kind": "category",
            "name": "Variables",
            "colour": "#A65C5C",
            "custom": "VARIABLE" // Special category for variables
        },
        {
            "kind": "category",
            "name": "S_Variables",
            "colour": "#FF00FF",
            "custom": "VARIABLE_DYNAMIC"
        },
        {
            "kind": "category",
            "name": "Functions",
            "colour": "#5C68A6",
            "custom": "PROCEDURE" // Special category for functions
        },
        {
            "kind": "category",
            "name": "Print",
            "colour": "#5CA65C",
            "contents": [
                  { "kind": "block", "type": "text_print" }
            ]
        },
        {
            "kind": "category",
            "name": "Text",
            "colour": "#5C68A6",
            "contents": [
                  { "kind": "block", type: "text" },
                  { "kind": "block", type: "text_print" }
            ]
        },
        {
            "kind": "category",
            "name": "LED Control",
            "colour": "#FFA500",
            "contents": [
              {
                "kind": "block",
                "type": "turn_on_led"
              },
              {
                "kind": "block",
                "type": "turn_off_led"
              },
              {
                "kind": "block",
                "type": "delay"
              }
            ]
        }
      ]
};
