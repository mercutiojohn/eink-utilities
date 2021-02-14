    document
    var vm = new Vue({
        el: '#adv-app',
        data: {
            time: '',

            timePreferences: {
                showSecond: false,
                twelveFormat: true,
                twelveLabel: ''
            },
        },
        methods: {
            checkTime(i) {
                if (i < 10) {
                    i = "0" + i
                }
                return i
            },
            getTime() {
                var today = new Date();
                var h = today.getHours();
                var m = today.getMinutes();
                var s = today.getSeconds();
                // add a zero in front of numbers<10 
                m = this.checkTime(m);
                s = this.checkTime(s);

                if (this.timePreferences.twelveFormat) {
                    // h = '下午' + (h % 12);
                    if (h / 12 >= 1) {
                        this.timePreferences.twelveLabel = "下午";
                    } else {
                        this.timePreferences.twelveLabel = "上午";
                    }
                    h = (h % 12);
                    // TODO
                }

                var result = (h + ":" + m);

                if (this.timePreferences.showSecond) {
                    result = (h + ":" + m + ":" + s);
                }
                return result;
            },
        },
        mounted() {
            window.vue = this;
            let _this = this;
            this.timer = setInterval(() => {
                _this.time = _this.getTime();
            }, 1000);
            // TODO
        },
    })