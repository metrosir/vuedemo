Vue.component("greeting", {
	template: `
	<p>{{name}}:hello world
	<button v-on:click="changeName">改名</button>
	</p>
	`,
	data:function(){
		return {
			name: "张三"
		}
	},
	methods:{
		changeName:function(){
			this.name='李四'
		}
	}
});

new Vue({
	el: "#vue-app-one"
});

new Vue({
	el: "#vue-app-two"
});

