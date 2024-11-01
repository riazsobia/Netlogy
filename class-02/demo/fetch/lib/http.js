'use strict';

class HTTP {

    fetch(opts) {
        if (opts) {
            // simulate API call
            let fakeResult = {
                counts: 2,
                results: [
                    {name: 'pokemon1'},
                    {name: 'pokemon2'}
                ]
            }
            this.render(fakeResult);
        }
    }

    render(data) {
        console.log(data);
    }
}

module.exports = HTTP;
