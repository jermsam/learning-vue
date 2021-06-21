/***
 * Unlike components and props, event names don’t provide any automatic case transformation.
 *  Instead, the name of an emitted event must exactly match the name used to listen 
 * to that event. 
 * Unlike components and props, event names will never be used as variable or property names
 *  in JavaScript, so there’s no reason to use camelCase or PascalCase. Additionally, 
 * v-on event listeners inside DOM templates will be automatically transformed 
 * to lowercase (due to HTML’s case-insensitivity), so v-on:myEvent would 
 * become v-on:myevent – making myEvent impossible to listen to.
 * For these reasons, we recommend you always use kebab-case for event names.
 */
const BaseInput = {
    name:'base-input',
    inheritAttrs: false,
    props: ['label', 'value'],
    /**There may be times when you want to listen directly to a native event 
     * on the root element of a component. In these cases, you can use the .native
     *  modifier for v-on: 
     * This can be useful sometimes, but it’s not a good idea when you’re trying 
     * to listen on a very specific element, like an <input>. For example, the <base-input> 
     * component here might refactor so that the root element is actually a <label> element:
     * In that case, the .native listener in the parent would silently break. 
     * There would be no errors, but the onFocus handler wouldn’t be called when we expected it to.
     * To solve this problem, Vue provides a $listeners property containing an object of 
     * listeners being used on the component. For example:
     * {
     *  focus: function (event) {  ...  }
     * input: function (value) { ...  },
     * }
     * ***********************************************************************************************
     * Using the $listeners property, you can forward all event listeners on the 
     * component to a specific child element with v-on="$listeners".
     *  For elements like <input>, that you also want to work with v-model, 
     * it’s often useful to create a new computed property for listeners, like inputListeners below
     * ***********************************************************************************************
     * */
    template:`
    <label>
      {{ label }}
    <!--  <input
        v-bind="$attrs"
        :value="value"
        :input="$emit('input', $event.target.value)"
      > -->
      <input
      class="w3-input w3-margin-top w3-margin-bottom"
        v-bind="$attrs"
        v-bind:value="value"
        v-on="inputListeners"
      >
    </label>
    `,
    /**Note that inheritAttrs: false 
     * option does not affect style and class bindings. */
     computed: {
    inputListeners: function () {
      var vm = this
      // `Object.assign` merges objects together to form a new object
      return Object.assign({},
        // We add all the listeners from the parent
        this.$listeners,
        // Then we can add custom listeners or override the
        // behavior of some listeners.
        {
          // This ensures that the component works with v-model
          input: function (event) {
            vm.$emit('input', event.target.value)
          }
        }
      )
    }
  },
  /**
   * Now the <base-input> component is a fully transparent wrapper, meaning 
   * it can be used exactly like a normal <input> element: 
   * all the same attributes and listeners will work, without the .native modifier.
   */
}