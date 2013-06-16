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
    models: [
        'Post',
        'User'
    ],
    stores: [
        'Post',
        'User'
    ],
    onAfterRender: function() {
        var t = new Ext.Template(
            '<div class="post-wrapper">',
                '<div id="" class="post">',
                    '<div class="msg-ctr">',
                        '<div class="mom-ctr">',
                            '<img src="{avatar_loc}" />',
                            '<div class="name">{name}<br/>',
                                '<span class="time-ago">{timestamp}</span>',
                            '</div>',
                        '</div>',
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
            '</div>',
            // a configuration object:
            {
                compiled: true      // compile immediately
            }
        );
        t.compile();

//        console.log('store', this.getPostStore());
//
////        var recs = this.getPostStore().getData();
//        console.log('recs', this.getPostStore().first());

        var me = this;
        this.getPostStore().load(function(records) {
            Ext.Array.each(records, function(postRec) {
//                console.log('rec', postRec.getData(), postRec.getData().user_id, me.getUserStore());

                me.getUserStore().load(function(userRecs) {
                    var userRec = me.getUserStore().findRecord('id', postRec.getData().user_id);
//                console.log('TEST', me.getUserStore(), postRec.getData().user_id);
                    var mergedData = Ext.Object.merge({}, postRec.getData(), userRec.getData());

                    console.log('mergedData', mergedData);
                    t.insertFirst(me.getFeed().getEl(), mergedData);
                });
            })
        }, this);

//        t.insertFirst(this.getFeed().getEl(), {
//            id: 1111,
//            cls: 'sos',
//            name: 'Jane Doe',
//            timestamp: this.timeDifference(1371361541465),
//            message: 'Help! I need a sitter. Anyone able to help?'
//        });
    }
});