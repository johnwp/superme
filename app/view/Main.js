Ext.define('SuperMe.view.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'main',
    requires: [
        'Ext.TitleBar',
        'Ext.Video',
        'Ext.form.Panel',
        'Ext.tab.Panel',
        'Ext.form.FieldSet',
        'Ext.field.Email',
        'Ext.dataview.List',
        'Ext.carousel.Carousel',
        'SuperMe.view.Registration',
        'SuperMe.view.Login',
        'SuperMe.view.Personas',
        'SuperMe.view.Feed',
        'SuperMe.view.Post',
        'SuperMe.view.Wires'
    ],
    config: {
        fullscreen: true,
        tabBarPosition: 'bottom',
        defaults: {
            styleHtmlContent: true
        },
        items: [{
            title: 'Registration',
            xtype: 'registration'
        }, {
            title: 'Login',
            xtype: 'login'
        }, {
            title: 'Personas',
            xtype: 'personas'
        }, {
            title: 'Feed',
            xtype: 'feed'
        }, {
            title: 'Post',
            xtype: 'post'
        }]
    }
});