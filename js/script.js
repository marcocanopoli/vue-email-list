var app = new Vue({
    
    el: '#root',
    data: {
        emails: []
    },
    methods: {
        getPushEmail: function () {
            axios
                .get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then((response) => {
                    this.emails.push(response.data.response);
                    console.log(this.emails);
            });
        },
        get10Emails: function () {
            for (let i = 0; i < 10; i++) {
                this.getPushEmail();
            }
        }
    },
    mounted () {
        this.get10Emails();
    }
}); 