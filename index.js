'use strict';

// YOU KNOW WHAT TO DO //

/**
 * each: Designed to loop over a collection, Array or Object, and applies the 
 * action Function to each value in the collection.
 * 
 * @param {Array or Object} collection: The collection over which to iterate.
 * @param {Function} action: The Function to be applied to each value in the 
 * collection
 */
 
 
function each(collection, action) {
    if(Array.isArray(collection)) {
        for(var i = 0; i < collection.length; i++) {
            action(collection[i], i, collection);
        }
    } else {
        for (var key in collection) {
            action(collection[key], key, collection);
        }
    }
}
module.exports.each = each;


/**
 * identity: Takes a value and returns it unchanged.
 * 
 * @param: {Any Datatype} value: Can be any datatype / value
 * 
 * @return: {Any Datatype}: Will be the same value as our input value
 */
 
function identity(value) {
    return value;
}

module.exports.identity = identity;

/**
 * typeof: takes a value and returns the datatype
 * 
 * @param: {Any Datatype} value: Can be any datatype / value
 * 
 * @return: {string}: will be a string of the datatype
 */
 
function typeOf(value) {
   if (value === null){
        return 'null';
    } else if (Array.isArray(value)) {
        return 'array';
    } else if (value instanceof Date){
        return 'date';
    } else if (typeof value === 'object'){
        return 'object';
    } else {
        return typeof value;
    }
}

module.exports.typeOf = typeOf;

/**
 * first: Takes a given array and returns its values up to the given number. If it is a negative 
 *        number or not an array, the function will return an empty array. 
 * 
 * @param: {array} array: Can be any array. 
 * 
 * @param: {number} number: Can be any number, cannot be negative numbers
 *                              or undefined
 * 
 * @return: {array}: Returns an array of the values up to the given number, If 
 *                   no number is given then return the first element of the
 *                   array.
 */


function first(array, number) {
    if (!Array.isArray(array) || number < 0) {
        return [];}
    if (number === undefined || typeof(number) != 'number' ) {
        return array[0];
        }
        return array.slice(0, number);
}

module.exports.first = first;


/**
 * last: Takes a given array and returns the values counting down from the end to the given
 *       number. If you are not given an array the function will return an empty array. If
 *       the you are given is negative the function will also return an array. 
 * 
 * @param: {array} array: Can be any array
 * 
 * @param: {number} number: Can be any number, cannot be negative numbers
 *                              or undefined
 * 
 * @return: {array}: Returns an array of the values up to the given number counting 
 *                   down from the end.
 *                   
 */
 
 function last(array, number){
    if (!Array.isArray(array) || number < 0) {
        return [];}
    if (number === undefined || typeof(number) != 'number' ) {
        return array[array.length - 1];
        }
        return array.slice(-number, array.length);
}

module.exports.last = last;


/**
 * indexOf: Takes an array and a value then returns the index of the first
 *          occurance of the value. If the value is a negative number, undefined
 *          or not in the array: The function will return a negative number. 
 * 
 * @param: {array} array: Can be any array
 * 
 * @param: {value} value: Can be a number or a string, cannot be negative numbers
 *                            or undefined
 * 
 * @return: {number}: returns the index from array where the value appears first
 */
 

function indexOf (array, value) {
    if (array === undefined){ return -1 }
    
    for (let i = 0; i < array.length; i++) {
        if (array[i] === value){ return i; }
    }
    return -1;
}

module.exports.indexOf = indexOf;

/**
 * contains: Takes an array and a value and returns true if that value is in
 *           the array
 * 
 * @param: {array} array: can be any array
 * 
 * @param: {number or string} value: can be a number or a string
 * 
 * @return: {boolean}: returns true or false based on if that array
 *                     contains the given value
 */
 
function contains (array, value) {
    return indexOf(array,value) >= 0 ? true : false; 
}  

module.exports.contains = contains;



/**
 * unique:  Given an array, return a new array with all of 
 *          the duplicates removed. If there is no array given 
 *          then the function will return undefined.
 * 
 * @param: {array} array: can be any array
 * 
 * 
 * @return: {array} arr: Return the given array with the duplicate elements removed
 * 
 */

function unique (array){
    if (array === undefined || array === null){ return 'undefined' }
    var arr = [];
    for (var i = 0; i < array.length; i++){
      if (indexOf(array, array[i]) >= 0 && indexOf(arr,array[i]) === -1){
        arr.push(array[indexOf(array, array[i])]);
      }
    }
    return arr;
    }
    
module.exports.unique = unique;


   
/**
 * filter: Filter will loop through an array and run the given function on the element, 
 *         the index, and the collection. If the function returns true on the element 
 *         then that element will be pushed into a new array. By the end of the function 
 *         filter the new array of true elemenets will be returned.
 * 
 * @param: {array} array: Can be any array
 * 
 * @param: {function} fun: Can be any function
 * 
 * @return: {array} newArray: This array holds the elements from the given array
 *                            that have returned true.
 */   
   
function filter (array, fun) {
    if (array === undefined || array === null){ return 'There is no spoon' }
    let newTFArray = map(array, fun);
    let newArray = [];
   for (let i = 0; i < array.length; i++){
       if (newTFArray[i] === true) {
           newArray.push(array[i]);
       }
   }
   return newArray;
}
    
module.exports.filter = filter;



/**
 * reject: Reject will loop through an array and run the given function on the element,
 *         the index, and the collection. If the function returns false on the element 
 *         then that element will be pushed into a new array. By the end of the function
 *         a new array of fasle elemenets will be returned.
 * 
 * @param: {array} array: Can be any array
 * 
 * @param: {function} fun: Can be any function
 * 
 * @return: {array} falseElements: This array holds the elements from the given array
 *                                 that have returned false.
 */ 

function reject (array, fun) {
    
    if (array === undefined || array === null){ return 'There is no spoon' }
    // Make an array of all the true returned elements from .filter()
    let trueElements = filter(array,fun);
    
    // Make an array of all the elements that will return false
    let falseElements = [];
    
    // Loop through the given array
    for (let i = 0; i < array.length; i++) {
        
        // check if each element that is in array is in trueElements
        if (contains(trueElements, array[i])){
            
            // if false returns, then push that element into falseElements
            falseElements.push(array[i]);
            
        }
    }
        return falseElements;
}

module.exports.reject = reject;



/**
 * partition: Partition will run the given function on elements, indexs, and collection. 
 *            It will create a new array of two nested arrays (newArray). One of the arrays in
 *            newArray will hold the elements that returned something truthy from
 *            the given function. The second array will hold the elements that 
 *            returned something falsy.
 * 
 * @param: {array} array: Any array
 * 
 * @param: {function} fun: A function that will return values, preferably truthy or
 *                         falsy values. 
 * 
 * @return: {array} newArray: An array of two arrays. One of truthy returned elemenets
 *                            and another of falsy returned elements.
 * 
 */ 

function partition (array, fun) {
    if (array === undefined || array === null){ return 'There is no spoon' }
    // A new array to hold our two arrays
    let newArray = [];
    
    // Add the true array to newArray
    newArray.push(filter(array, fun));
    
    // Add the false array to newArray
    newArray.push(reject(array, fun));
    
    // Done, return the new array
    return newArray;


module.exports.partition = partition;



/**
 * map: The map function takes a collection and a function, then runs the given 
 *      function on the element, the index, and the collection, for objects it will run the
 *      function on the value, key, and collection. Map will then push 
 *      the results of each function into newArray. Then return newArray. 
 * 
 * @param: {collection} collection: The collection can be an array or an object
 * 
 * @param: {function} fun: A function, preferably a function that returns a value. 
 * 
 * @return: {array} newArray: map returns an array of the functioned elements 
 * 
 */ 

function map (collection,fun){
    if (collection === undefined || collection === null){ return 'There is no spoon' }
    let newArray = [];
    each(collection, (element, index, collection) => newArray.push(fun(element, index, collection))); 
    return newArray;
}

module.exports.map = map;



/**
 * pluck: Pluck will take an array of objects and a string, it will look for
 *        keys in the given object that match the given string, the function
 *        will then return an array of values from each key that matches the
 *        string. 
 * 
 * @param: {array} array: An array of objects
 * 
 * @param: {string} property: A 'key' you would like to look for in each object.
 * 
 * @return: {array} newArray: An array containing the values of each key from each
 *                            object that matches the given string
 */

function pluck (array, property) {
    if (array === undefined || array === null){ return 'There is no spoon' }
    console.log(array);
    // create newArray to hold the values of the given property
    var newArray = [];
    
    // run the array though _.map while creating a function that returns the value of property
    newArray = map(array, function (element, index, collection){ return element[property]; } );
  
    // Done, return the new array. 
    return newArray;

}

module.exports.pluck = pluck;



/**
 * every: The every() function will run the given function on the elements, indexs, and
 *        collection, returning the true or false outcomes into a new array using map()
 *        every() will then check if every element of the true/false array is true. If so
 *        return true, otherwise fasle. If no function is given. Then every() will check
 *        the given collection to see if every element is truthy
 * 
 * @param: {collection} collect: The collection argument can be an array or an object
 *
 * @param: {function} fun: The function argument should return a true or false value
 *
 * @return: {boolean} : true or false, true if all elements return true from the function
 *                      false if at least one element returns false. 
 */
 
function every (collect, fun) {
    
    if (collect === undefined || collect === null){ return 'There is no spoon' }
   
   // If fun is not provided or is not a function then...
   if (typeof(fun) !== 'function') {
      return !contains(collect, false); 
   }
    var newArray = [];
    
    newArray = map(collect, fun);
    
    return !contains(newArray, false);
}

module.exports.every = every;



/**
 * some: The some() function will run the given function on elements, indexs, and the
 *        given collection. Returning the true or false outcomes into a new array using map().
 *        some() will then check if at least one element of the true/false array is true. 
 *        If so - return true, otherwise fasle. If no function is given, then some() will
 *        check if at least one element in the given collection is truthy.
 * 
 * @param: {collection} collect: The collection argument can be an array or an object
 *
 * @param: {function} fun: The function argument should return a true or false value
 *
 * @return: {boolean} : true or false, true if at least one element of the function
 *                      returns true, false if no elements are truthy
 */
 
function some (collect, fun){
    
    if (collect === undefined || collect === null){ return 'There is no spoon' }
    // If no function is provided then..
    if (typeof(fun) !== 'function') {
      // run _.contains on the collection and see if the elements are truthy
      return contains(collect, true); 
   }
   
    // Create a new array to hold the returned trues and falses
    var newArray = [];
    
    // use the _.map function to run fun on each element and return the 
    // values to newArray
    newArray = map(collect, fun);
    
    // Now that we have our array of trues and falses we can check if at least 
    // one of the values are true
    return contains(newArray, true);
}

module.exports.some = some;



/**
 * reduce: The reduce() function will take an array, a function, and a seed. It will
 *         loop through the array and will perform the given function on each element
 *         and index in the array. But unlike each() or map(), reduce() will accumulate a value 
 *         after each pass. Returning the final accumulated value as the end return.
 *         If a seed is given reduce() will begin with the seed as the accumulator, 
 *         if no seed is given reduce() will begin with the first element in the array
 *         as the accumulator. 
 * 
 * @param: {array} array: Can be an array of any data type, even an array of arrays or
 *                        objects
 * 
 * @param: {function} rFun: Any function that will be able to access the element, index, 
 *                          and array. You can get as creative as you want with this function
 *                          but you should return your accumulator at the end.  
 * 
 * @param: {any datatype} seed: This is the element the function will begin at. It can
 *                              be a number, string, array, or object. If no seed is provided 
 *                              then start at element index 0.
 * 
 * @return: {any datatype} accumulator: This can be any datatype and it will be the accumulation of 
 *                                      of running reduce on each element.   
 * 
 */
  
function reduce (array, rFun, seed){
    if (array === undefined || array === null){ return 'There is no spoon' }
    // Our accumulator
    var accumulator;
    
    // accumulator will hold the correct value even if there is no seed. 
    seed == undefined ?  accumulator = array[0] : accumulator = rFun(seed, array[0], 0);
    
    // call back each, pass the return of rFun into accumulator starting at index 1. 
    each(array, (element, index, collection) => { if (index != 0) {accumulator = rFun(accumulator, element, index )}}); 
    
    // Done, return accumulator 
    return accumulator;  
    
    
}

module.exports.reduce = reduce;

/**
 * extend: My extend function will take an array of objects. And combine and assign
 *         the key value pairs from the second and later objects, into the fist
 *         object. If the key allready exists the first object extend() will replace
 *         the value with the one from the later object
 * 
 * @param: {array} ...array: This can be an array of any size. An array of objects. 
 * 
 * return: {object} object: This object will be the result of assigning and replacing
 *                          the key value pairs together. 
 */ 

function extend (...array){
   
  if (array === undefined || array === null){ return 'There is no spoon' }
   // loop through the array of Objects
   for (let i = 1; i < array.length; i++){
       
         // use the assign method to replace the first object the others
         Object.assign(array[0], array[i]);
     }
     
     // Done, return the first array.
     return array[0];
   }
   
module.exports.extend = extend;