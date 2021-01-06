// this give webpack the opportunity to realise that before executing the bootstrap.js 
// file, we have to go and fetch some code from the 'products' project

// when we actually execute the contents of the bootstrap.js file the expectation is that 
// we will have access to this module and all the different dependencies that it requires

// going directly into bootstrap.js file will end up with an error
import('./bootstrap')