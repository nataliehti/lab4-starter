/**
 * 
 * @param {*} num1, first number to add. 
 * @param {*} num2, second number to add. 
 * @param {*} add, boolean value to tell the function what to do. 
 * @returns The sum of the two numbers if add is true and false otherwise.
 */
function sumValues(num1, num2, add) {
    if (add && Number.isInteger(num1) && Number.isInteger(num2)) { //making sure num1 and num2 are valid
        let result = 0; //changed const to let bc result is changed
        result = num1 + num2;

        return result;
    }
    else {
        return false; //!add when add=false would become true
    }
}

/**
 * 
 * @param {*} prices, an array of the original price.
 * @param {*} discount, a number between 0-1 to represent the discount. 
 * @returns An array of each price's new price, after the discount is applied. Or false, if prices array is empty.
 */
function discountPrices(prices, discount) {
    const discounted = []
    const length = prices.length;

    if(length == 0){ //checking that prices array isn't empty
        return false;
    }
    let discountedPrice = 0
    for(let i = 0; i < length; i++) {
        if(!Number.isInteger(prices[i])){ //checking if arg is invalid
            return false;
        }
        discounted.push(prices[i] * (1 - discount)); //removed discountedPrice var, pushes int directly
    }

    return discounted;
}

module.exports = {sumValues, discountPrices};