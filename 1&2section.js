new Vue ({
	el:'#app',
  data:{
  title:"Super intro!",
  },
  methods:{
  	reverseTitle:function(){
    	this.title=this.title.split('').reverse().join('')
    }
  }
})