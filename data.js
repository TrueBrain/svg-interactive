data = {
  "comp1": {
    "shape": [
      {
        "rect": {
          "text": "Comp1-1",
          "position": {
            "x": 0,
            "y": 0
          },
          "size": {
            "width": 150,
            "height": 40
          }
        }
      },
      {
        "rect": {
          "text": "Comp1-2",
          "position": {
            "x": 20,
            "y": 20
          },
          "size": {
            "width": 150,
            "height": 40
          }
        }
      }
    ],
    "actions": [
      {
        "name": "New comp",
        "description": "Install the new comp via \"apt\"\nReload the comp\n",
        "consequences": [
          "Active lists will become two"
        ]
      },
      {
        "name": "Comp upgrade",
        "description": "Install the new comp via \"apt\"\nRestart the comp\n",
        "consequences": [
          "Temporary no new stuff is picked up",
          "Active lists will become two"
        ]
      }
    ],
    "events": [
      {
        "name": "Missing lists",
        "checklist": [
          {
            "name": "Is all stuff in the thingy?",
            "method": "Use tcpdump to see if you can spot the stuff in the thingy",
            "action": "Talk to c"
          },
          {
            "name": "Is there missing stuff?",
            "method": "Use qasniff to validate quality of thingy",
            "action": "Talk to c"
          },
          {
            "name": "Comp not configured correctly?",
            "method": "Stuff is there by in multiple lists",
            "action": "Talk to d"
          }
        ]
      }
    ]
  },
  "comp2": {
    "shape": [
      {
        "rect": {
          "text": "Comp2",
          "position": {
            "x": 0,
            "y": 0
          },
          "size": {
            "width": 150,
            "height": 40
          }
        }
      }
    ],
    "actions": [
      {
        "name": "Comp upgrade",
        "description": "Install the new comp via \"apt\"\nRestart the comp\n",
        "consequences": [
          "Temporary no new stuff is picked up",
          "Active lists will become two"
        ]
      }
    ],
    "events": []
  }
}
;