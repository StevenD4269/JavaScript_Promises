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
const errorParagraph = document.getElementById("error");
const hobbitsList = document.getElementById("list");

// TODO: Handle the resolved or rejected states of the promise
// Exercise 2: Handle the Promise
getList()
  .then((result) => {
    console.log(result); // Logging the resolved value to console
    return result; // Return the resolved value for chaining
  })
  .catch((error) => {
    console.log(error); // Logging the resolved failure object to console
    throw error; // Rethrow the error for further handling
  });

// Exercise 3: Update the DOM
getList()
  .then((result) => {
    result.forEach((hobbit) => {
      const li = document.createElement("li");
      li.textContent = hobbit;
      hobbitsList.appendChild(li); // Appending li to the ul
    });
  })
  .catch((error) => {
    errorParagraph.textContent = error.message; // Displaying error message in the paragraph
  });
