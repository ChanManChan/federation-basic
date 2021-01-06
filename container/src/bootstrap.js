// if webpack cannot find a products dependency inside node_modules, it will then look into the ModuleFederationPlugin .. remotes
import { mount as productsMount } from 'products/ProductsIndex'
import { mount as cartMount } from 'cart/CartShow'

console.log('Container..')

productsMount(document.querySelector('#my-products'))
cartMount(document.querySelector('#my-cart'))