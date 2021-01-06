import faker from 'faker'


const mount = el => {
    const cartText = `<div>You have ${faker.random.number()} items in you cart</div>`
    el.innerHTML = cartText
}


// Context #1
// We are running this file in development in isolation
// we are using our local index.html file
// which DEFINITELY has an element with an id of 'dev-products'
// we want to immediately render our app into that element
if(process.env.NODE_ENV === 'development') {
    const el = document.querySelector('#dev-cart')

    if(el) {
        mount(el)
    }
}


// Context #2
// we are running this file in development or production
// through the CONTAINER app
// NO GUARANTEE that an element with an id of 'dev-products' exist
// WE DO NOT WANT to immediately render the app
export { mount }