let colorList = {
    "colors": [
      {                   //index 0
        "color": "black",
        "category": "hue",
        "type": "primary",
        "code": {
          "rgba": [255, 255, 255, 1],
          "hex": "#000"
        }
      },
      {                   //index 1
        "color": "white",
        "category": "value",
        "code": {
          "rgba": [0, 0, 0, 1],
          "hex": "#FFF"
        }
      },
      {                   //index 2
        "color": "red",
        "category": "hue",
        "type": "primary",
        "code": {
          "rgba": [255, 0, 0, 1],
          "hex": "#FF0"
        }
      },
      {                   //index 3
        "color": "blue",
        "category": "hue",
        "type": "primary",
        "code": {
          "rgba": [0, 0, 255, 1],
          "hex": "#00F"
        }
      },
      {                   //index 4
        "color": "yellow",
        "category": "hue",
        "type": "primary",
        "code": {
          "rgba": [255, 255, 0, 1],
          "hex": "#FF0"
        }
      },
      {                   //index 5
        "color": "green",
        "category": "hue",
        "type": "secondary",
        "code": {
          "rgba": [0, 255, 0, 1],
          "hex": "#0F0"
        }
      },
    ]
  }
  
for ( let color in colorList){
  console.log(colorList[color]);
  console.log(color);
}
for (let c of colorList.colors){
  console.log(c);
  console.log(c.color,c.category,c.code);
}