Ext.define('SuperMe.controller.Feed', {
    extend: 'Ext.app.Controller',

    config: {
        control: {
            'post button[name="postBtn"]': {
                activate: 'onPost'
            }
        },
        refs: {
            messageField: 'post textareafield[name="message"]',
            feed: 'feed'
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

    onPost: function() {
        var msg = this.getMessageField().getValue();
        Ext.Ajax.request({
            url: '/services/post',
            method: 'POST',
            params: {
                message: msg
            },
            success: function() {
                this.getFeed().activate();
            }
        });
    }
});