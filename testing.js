
console.log('testingthis')

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
    var indexes = Math.floor(Math.random()*array.length);
    return indexes;

  }
  function randomDegrees(){
    var degrees = Math.floor(Math.random()*100);
    return degrees
  }

  function getWeatherAdvice(arr1 = weatherConditions, arr2 = temperatureScales, arr3 = quirkyAdvice){
    const temp = randomDegrees();
    var moreless = ''
    if(temp > 50){
      moreless = 'with a high of';
    }
    else{
      moreless = 'with a low of';
    }
    return `Today's forecast: ${arr1[randIndex(arr1)]} ${moreless} ${temp} ${arr2[randIndex(arr2)]}! Remember to dress whimsically! ${arr3[randIndex(arr3)]}`;



  }

  console.log(getWeatherAdvice(weatherConditions, temperatureScales, quirkyAdvice));

