/*--------------------------------------------------------------------------------------
 This is an Example file, it should contain a specific function / interaction of the project
 --------------------------------------------------------------------------------------*/
 function testFunc1() {
	console.log('Calling from example.js');
 }

  function testFunc2() {
	console.log('Second call from example.js');
 }





 /*--------------------------------------------------------------------------------------
 Exports
 --------------------------------------------------------------------------------------*/
// Exposes the function to a require in another file
module.exports = { 
	testFunc,
	testFunc2
	// add more functions...
}
