//Shopping cart and ambassadors - BuildTime #2

/*
Details:    Today you are in charge of building the shopping cart logic for a website that supports ambassadors. 
            Your job is to build a program flow that will elaborate a list of prices, a user and a shipping cost to calculate the correct cart total. 

            If the user is an ambassador, the cart should be discounted of 30% BEFORE shipping cost (ambassadors still pay shipping)
            If the user is NOT an ambassador, the cart should NOT be discounted
            Either way, if the cart goes over 100, shipping cost should be 0.

            Some users as examples are already provided.
            
           
*/

const marco = {
  name: "Marco",
  lastName: "Rossi",
  isAmbassador: true,
};

const paul = {
  name: "Paul",
  lastName: "Flynn",
  isAmbassador: false,
};

const amy = {
  name: "Amy",
  lastName: "Reed",
  isAmbassador: false,
};

const prices = [34, 5, 2, 2];
const shippingCost = 50;

function cartLogic (user, prices, shippingCost) {
  let cartTotal = 0;

  for (let i = 0; i < prices.length; i++) {
    cartTotal += prices[i]
  }
  
  if (user.isAmbassador) {
    cartTotal = cartTotal - (30 * cartTotal / 100);
  }

  if (cartTotal > 100) {
    shippingCost = 0
  }

  cartTotal += shippingCost
  
  return cartTotal
}

//Execute Function with different users
console.log(cartLogic(amy, prices, shippingCost))
console.log(cartLogic(paul, prices, shippingCost))
console.log(cartLogic(marco, prices, shippingCost))
