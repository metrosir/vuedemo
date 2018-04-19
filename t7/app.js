new Vue({
	el: "#vue-app",
	data: {
		characters: ["Mario", "Luffy","Yoshi"],
		users: [
			{name: 'zhangsan', age:10},
			{name: 'lisi', age:20},
			{name: 'wangwu', age:30}
		]
	},
	methods: {

	},
	//计算属性
	computed: {

	}
});

//v-for 循环

// v-for="(user, index) in users" 循环出对应的值和下标
// v-for 不光光可以遍历数组，还可以遍历对象