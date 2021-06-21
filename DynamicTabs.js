const DynamicTabs = {
    name:'dynamic-tabs',
    props:['tabs'],
    template:`
   
    <div class="w3-container">
    <div class="w3-bar w3-black">
    <slot 
    class="w3-bar-item w3-button tablink w3-red"
    v-for="({name},index) in tabs"
    name="label"
    v-bind:label="{name}"
    @click="$emit('openCity',name)"
    >
   
    </slot>
   
  </div>
  
  <slot 
  v-for="(tab,index) in tabs"
  :id="index" 
  class="w3-container w3-border city" 
  name="content"
  v-bind:content="{tab}"
  >
  </slot>
   <slot>
    </slot>
</div>

    `,
    
}