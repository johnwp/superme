Ext.define('SuperMe.view.Feed', {
    extend: 'Ext.Container',
    xtype: 'feed',
    requires: [
    ],
    config: {
        items: [{
            xtype: 'container',
            name: 'feed',
            cls: 'post'
        }]
    }
});