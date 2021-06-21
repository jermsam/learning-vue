/**If you do not want the root element of a component to inherit attributes,
 *  you can set inheritAttrs: false in the component’s options. 
 * This can be especially useful in combination with the $attrs instance property, 
 * which contains the attribute names and values passed to a component,
 * With inheritAttrs: false and $attrs, you can manually decide which element you want 
 * to forward attributes to, which is often desirable for base components:
 * */

const CustomOption = {
    name:'custom-option',
    inheritAttrs: false,
    props: {
        option:Object
    },
    // Note that inheritAttrs: false option does not affect style and class bindings.
    template: `
    <option   
    v-bind="$attrs"
    style="display:flex; flex-direction:row; align-items:center;" 
    :value="option.value"
    >
    <slot name="append">#</slot>   
    <div style="{padding:2rem, marginLeft:0.5rem}">
    {{ option.text }}
    </div>
    <!--To make user available to the slot content in the parent,
     we can bind user as an attribute to the <slot> element:-->
     <!--
    <slot name="prepend" v-bind:value="option.value">#</slot> 
    </option>
    -->
    <!--Internally, scoped slots work by wrapping your slot 
    content in a function passed a single argument:
    That means the value of v-slot can actually accept any valid 
    JavaScript expression that can appear in the argument position 
    of a function definition. So in supported environments (single-file components or 
        modern browsers), you can also use ES2015 destructuring to pull out 
        specific slot props,  like so:
    -->
    <slot name="prepend" v-bind:option="{option}">#</slot> 
    </option>
    ` ,
    /**This pattern allows you to use base components more like raw HTML elements, 
     * without having to care about which element is actually at its root: */
}