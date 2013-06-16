Ext.define('SuperMe.controller.Feed', {
    extend: 'Ext.app.Controller',

    config: {
        control: {
            'feed': {
                activate: 'onAfterRender'
            }
        },
        refs: {
            feed: 'feed container[name="feed"]'
        }
    },

    onAfterRender: function() {
        console.log('tryna load feed');

        var t = new Ext.Template(
            '<div id="{id}" class="post {cls}">',
                '<div class="msg-ctr">',
                    '<div class="name">{name:trim}</div>',
                    '<div class="time-ago">{timestamp}</div>',
                    '<div class="message">{message}</div>',
                '</div>',
                '<div class="control-bar">',
                    '<span>High Five</span>',
                    '<span>Reply</span>',
                    '<div class="right-ctrl-ctr">',
                        '<img src="/resources/images/sm_icon_hiFive_hand.png" />',
                        '<img src="/resources/images/sm_icon_speech_bubble_outline.png" />',
                    '</div>',
                '</div>',
            '</div>',
            // a configuration object:
            {
                compiled: true      // compile immediately
            }
        );
        t.compile();

        t.insertFirst(this.getFeed().getEl(), {
            id: 1111,
            cls: 'sos',
            name: 'Jane Doe',
            timestamp: this.timeDifference(1371361541465),
            message: 'Help! I need a sitter. Anyone able to help?'
        })
    },
    timeDifference: function(previous) {
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
});