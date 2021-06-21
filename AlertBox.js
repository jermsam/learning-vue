
/**
 * Global registration often isn’t ideal. For example, if you’re using a build system like Webpack, 
 * globally registering all components means that even if you stop using a component, 
 * it could still be included in your final build.
 *  This unnecessarily increases the amount of JavaScript your users have to download.
 * 
*/

/** Vue’s custom <slot> element:*/

const AlertBox = {
  name:'alert-box', // component name: (all-lowercase, must contain a hyphen =>  kebab-case, or PascalCase)
  template: `
    <div class="w3-panel w3-green">
      
      <h3>Success!</h3>
  
      <slot></slot>
    </div>
  `
}