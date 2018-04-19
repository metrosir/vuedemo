
new Vue({
	el: "#vue-app",
	data: {
		changeColor: false,
		changeLength: false
	},
	methods: {

	},
	//计算属性
	computed: {
		compClass: function () {
			return {
				changeColor: this.changeColor,
				changeLength: this.changeLength
			}
		}
	}
});

// 动态绑定Css样式
// v-on
// v-bind 绑定

