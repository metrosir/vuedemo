
new Vue({
	el: "#vue-app",
	data: {
		a: 0,
		b: 0,
		age: 20
	},
	// methods: {
	// 	addToA: function() {
	// 		console.log('Add to A');
	// 		return this.a + this.age;
	// 	},
	// 	addToB: function() {
	// 		console.log('Add to B');
	// 		return this.b + this.age
	// 	}
	// },
	//计算属性 和computed 不同， computed
	computed: {
		addToA: function() {
			console.log('Add to A');
			return this.a + this.age;
		},
		addToB: function() {
			console.log('Add to B');
			return this.b + this.age
		}
	}
});

//计算属性 Computed，耗时以及大量搜索的时候可以用 computed计算属性，来减少支出优化项目。

