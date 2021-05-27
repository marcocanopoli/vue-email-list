var app = new Vue({
    
    el: '#root',
    data: {
        emails: []
    },
    methods: {

        //gets single random email and pushes in emails array
        getPushEmail: function () {
            axios
                .get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then((response) => {
                    this.emails.push(response.data.response);
            });
        },

        //gets and pushes 10 random emails
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