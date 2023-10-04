let restaurants = [
    {
      name: 'Silver Rice Sushi 🍣',
      priceBracket: '2',
      deliveryTimeMinutes: 40,
      openHour: '12',
      closeHour: '23',
      distance: '5',
    },
    {
      name: 'Nikko\'s Rotisserie Chicken 🍗',
      priceBracket: '1',
      deliveryTimeMinutes: 20,
      openHour: '12',
      closeHour: '21',
      distance: '8',
    },
    {
      name: 'Aita Trattoria 🍝',
      priceBracket: '3',
      deliveryTimeMinutes: 60,
      openHour: '18',
      closeHour: '22',
      distance: '1',
    },
    {
      name: 'Lula Bagel 🥯',
      priceBracket: '1',
      deliveryTimeMinutes: 20,
      openHour: '0',
      closeHour: '12',
      distance: '2',
    },
    {
      name: 'Golden Chopstick 🥢',
      priceBracket: '1',
      deliveryTimeMinutes: 20,
      openHour: '15',
      closeHour: '23',
      distance: '12',
    },
  ];
  
  const dollarSigns = '$$';
  const deliveryTimeMax = '90';
  const maxDistance = 10;
  let result;
  const priceBracket: number = dollarSigns.length;
  const filteredRestaurants = restaurants.filter((restaurant) => {
    if (restaurant.priceBracket > priceBracket) {
      return false;
    }
    if (restaurant.deliveryTimeMinutes > deliveryTimeMax) {
      return false;
    }
    if (restaurant.distance > maxDistance) {
      return false;
    }
    return restaurant;
  });
  if (filteredRestaurants.length === 0) {
    result = 'There are no restaurants available right now.';
  } else {
    result = `We found ${filteredRestaurants.length} restaurants, the first is ${filteredRestaurants[0].restaurantName}.`;
  }
  console.log(result);