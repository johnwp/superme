/*
    This file is generated and updated by Sencha Cmd. You can edit this file as
    needed for your application, but these edits will have to be merged by
    Sencha Cmd when it performs code generation tasks such as generating new
    models, controllers or views and when running "sencha app upgrade".

    Ideally changes to this file would be limited and most work would be done
    in other places (such as Controllers). If Sencha Cmd cannot merge your
    changes and its generated code, it will produce a "merge conflict" that you
    will need to resolve manually.
*/

// DO NOT DELETE - this directive is required for Sencha Cmd packages to work.
//@require @packageOverrides

//<debug>
Ext.Loader.setPath({
    'Ext': 'touch/src'
});
//</debug>

Ext.application({
    name: 'SuperMe',

    requires: [
        'Ext.MessageBox',
        'Ext.Toolbar',
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

    views: [
        'Main',
        'Registration',
        'Login',
        'Personas',
        'Feed',
        'Post',
        'Wires'
    ],

    controllers: [
        'Registration',
        'Feed'
    ],

    icon: {
        '57': 'resources/icons/Icon.png',
        '72': 'resources/icons/Icon~ipad.png',
        '114': 'resources/icons/Icon@2x.png',
        '144': 'resources/icons/Icon~ipad@2x.png'
    },

    isIconPrecomposed: true,

    startupImage: {
        '320x460': 'resources/startup/splash_portrait.png',
        '640x920': 'resources/startup/640x920.png',
        '768x1004': 'resources/startup/768x1004.png',
        '748x1024': 'resources/startup/748x1024.png',
        '1536x2008': 'resources/startup/1536x2008.png',
        '1496x2048': 'resources/startup/1496x2048.png'
    },

    launch: function() {
        // Destroy the #appLoadingIndicator element
        Ext.fly('appLoadingIndicator').destroy();

        // Initialize the main view
        Ext.Viewport.add( {
            xtype : 'toolbar',
            docked: 'top',
            cls: 'title-bar'
        });

        Ext.Viewport.add(Ext.create('SuperMe.view.Main'));
    },

    onUpdated: function() {
        Ext.Msg.confirm(
            "Application Update",
            "This application has just successfully been updated to the latest version. Reload now?",
            function(buttonId) {
                if (buttonId === 'yes') {
                    window.location.reload();
                }
            }
        );
    }
});
