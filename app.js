/**
 *
 * @returns A promise that is designed to resolve with a list of hobbits, or potentially fail with an failure object. The failure object includes a boolean success property and a string message property.
 */
function getList() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let potentialFail = Math.round(Math.random() * 100) < 10;
      if (potentialFail) {
        reject({ success: false, message: "Failed to get list of hobbits." });
      } else {
        resolve(["Bilbo", "Frodo", "Sam", "Merry", "Pippin"]);
      }
    }, 10);
  });
}

// Exercise 1: Select the Needed DOM Elements
const errorPara = document.getElementById("error");
const hobbitsList = document.getElementById("list");

// Exercise 2: Handle the Promise
// getList is the promise, the .then and .catch are now telling it when to return those promises and which one to return
// ex: getList().then().catch() is the template
getList() //You dont need to write function here because it exists already
  .then((result) => {
    //(result) => {} is the callback function
    console.log(result); // Logging the result to console
    return result; // Return the resolved value
  })
  .catch((error) => {
    console.log(error); // console logging the value
    throw error; // "Rethrow" the error for further handling
  });

// Exercise 3: Update the DOM
// .forEach will iterate through the array
getList()
  .then((result) => {
    result.forEach((hobbit) => {
      const li = document.createElement("li");
      li.textContent = hobbit;
      hobbitsList.appendChild(li); // Appending li to the ul using the hobbitsList I created
    });
  })
  .catch((error) => {
    errorPara.textContent = error.message; // Displaying error message in the paragraph
  });
