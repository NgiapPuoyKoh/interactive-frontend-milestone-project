/**
 * This function will accept a file url
 * and create an object returned by the promise
 *
 * @param {*} file
 * @param {*} id
 * @returns {object}
 */

function readData(file, id) {
  console.log(
    "Read the data"
  ); /*Returns a Promise Object the eventual result of an asynchronous operation*/
  d3.csv(
    file,
    processData
  ) /*fist line column headings used as property names and every line after that as data*/
    .then((data) =>
      graph(data, id)
    ) /* do something with array of data items collected from processed data*/
    .catch((error) =>
      console.log("Error:", error.message)
    ); /* called when  there is an error anywhere and also takes a callback if there is an error*/
}

/**
 *
 * @param {*} datum
 */
function processData(datum) {
  return datum; /*Array of all objects processed as file is read */
}

function graph(data, id) {
  console.log(id, data);
}
