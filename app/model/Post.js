Ext.define('SuperMe.model.Post', {
    extend: 'Ext.data.Model',
    config: {
        fields: [
            {name: 'id',        type: 'auto'},
            {
                name: 'timestamp',
                type: 'auto',
                convert: function(previous) {
                    var msPerMinute = 60 * 1000;
                    var msPerHour = msPerMinute * 60;
                    var msPerDay = msPerHour * 24;
                    var msPerMonth = msPerDay * 30;
                    var msPerYear = msPerDay * 365;

                    var elapsed = new Date().getTime() - previous;

                    if (elapsed < msPerMinute) {
                        return Math.round(elapsed/1000) + ' seconds ago';
                    }

                    else if (elapsed < msPerHour) {
                        return Math.round(elapsed/msPerMinute) + ' minutes ago';
                    }

                    else if (elapsed < msPerDay ) {
                        return Math.round(elapsed/msPerHour ) + ' hours ago';
                    }

                    else if (elapsed < msPerMonth) {
                        return 'approximately ' + Math.round(elapsed/msPerDay) + ' days ago';
                    }

                    else if (elapsed < msPerYear) {
                        return 'approximately ' + Math.round(elapsed/msPerMonth) + ' months ago';
                    }

                    else {
                        return 'approximately ' + Math.round(elapsed/msPerYear ) + ' years ago';
                    }
                }
            },
            {name: 'type',      type: 'auto'},
            {name: 'message',   type: 'auto'},
            {name: 'user_id',   type: 'auto'},
            {name: 'high_fives',   type: 'auto'}
        ]
    }
});