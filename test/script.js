

const script = function() {

    return {

        click1() {
            console.log('click');

            const address = document.getElementById('address1').value;
            console.log('value', address);

            const xhttp = new XMLHttpRequest();

            xhttp.onreadystatechange = function() {
                if (this.readyState == 4 && this.status == 200) {
                    document.getElementById("get1").innerHTML = this.responseText;
                } else {
                    console.error( 'error', this );
                }
            };
            xhttp.open("GET", address, true);
            xhttp.send();

        },

        init() {
            this.hw();
            return this;
        },

        hw() {
            console.log('test!');
            return 'test'
        }
    };

}();