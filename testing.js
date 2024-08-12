const weatherConditions = [
    "Raining cats and dogs",
    "Cloudy with a chance of meatballs",
    "Sunny with a sprinkle of fairy dust",
    "Partly cloudy with a hint of unicorn tears",
    "Misty with a touch of enchantment"
  ];
  
  const temperatureScales = [
    "degrees of silliness",
    "units of whimsy",
    "notches of nonsense",
    "levels of absurdity",
    "measures of mischief"
  ];
  
  const quirkyAdvice = [
    "Don't forget your umbrella made of dreams!",
    "Pack a picnic basket filled with imagination!",
    "Wear sunglasses that reflect your inner sparkle!",
    "Carry a map to navigate through the clouds of wonder!",
    "Bring a jacket woven with threads of laughter!"
  ];

  function randIndex(array){
    var indexes = Math.random()*array.length;
    return indexes -1;

  }

  function getWeatherAdvice(){

  }

  console.log(randIndex(weatherConditions));