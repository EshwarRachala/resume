# Website with Vue 2.0 and page routing 

> A grocery store is a retail store that primarily sells food. 
A grocer is a bulk seller of food. Grocery stores often offer non-perishable
 food that is packaged in cans, bottles and boxes, with some also having fresh
  produce, butchers, delis, and bakeries.

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

 //"test": "karma start build/karma.conf.js",
    //"predeploy": "npm run build",
   // "deploy": "surge --project . --domain vue-2-simple-routing-example.surge.sh"



     // example testing with a mock
  it('should render with mocked message', function () {
    // inject-loader gives us a factory that can create instances
    // of the module with different injected dependencies.
    // make sure to use the require() syntax here.
    // for webpack loader string syntax, see:
    // - https://webpack.github.io/docs/loaders.html
    const inject = require('!!vue?inject!../../src/components/A.vue')
    // create an instance of the component module,
    // injecting a mocked "../services/message" dependency
    const ComponentAWithMock = inject({
      '../services/message': {
        getMessage () {
          return 'Hello from mock'
        }
      }
    })
    // now we can test it!
    const vm = new Vue({
      template: '<div><test></test></div>',
      components: {
        'test': ComponentAWithMock
      }
    }).$mount()
    expect(vm.$el.querySelector('h2.red').textContent).toBe('Hello from mock')
  })