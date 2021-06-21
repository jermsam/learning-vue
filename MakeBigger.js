
const MakeBigger = {
  name:'make-bigger',
  props: {
      size:{
        type:Number,
        default: 0.5
    }
  },
     template: `
    <div :style="{fontSize}">
      <strong >Make Bigger x {{fontSize}}</strong>

      <slot></slot>
    </div>
  `,
  computed:{
      fontSize:function(){
      return `${this.size}rem`;
    }
  },
  
}