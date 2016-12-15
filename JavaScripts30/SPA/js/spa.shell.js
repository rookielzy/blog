spa.shell = (function() {
    // BEGIN MODULE SCOPE VARIABLES
    var configMap = {
        anchor_schema_map: {
            chat: { open: true, closed: true }
        },
        main_html: String()
        + '<div class="spa-shell-head">'
            + '<div class="spa-shell-head-logo"></div>'
            + '<div class="spa-shell-head-acct"></div>'
            + '<div class="spa-shell-head-search"></div>'
        + '</div>'
        + '<div class="spa-shell-main">'
            + '<div class="spa-shell-main-nav"></div>'
            + '<div class="spa-shell-main-content"></div>'
        + '</div>'
        + '<div class="spa-shell-foot"></div>'
        + '<div class="spa-shell-chat"></div>'
        + '<div class="spa-shell-modal"></div>',
        chat_extended_time: 1000,
        chat_retracted_time: 300,
        chat_extended_height: 450,
        chat_retracted_height: 15,
        chat_extended_title: 'Click to retract',
        chat_retracted_title: 'Click to extend'
    },
    stateMap = {
        $container: null,
        anchor_map: {},
        is_chat_retracted: true
    },
    jqueryMap = {},
    copyAnchorMap, changeAnchorPart, onHashchange,
    setJqueryMap, toggleChat, onClickChat, initModule;
    // END MODULE SCOPE VARIABLES

    // BEGIN UTILITY METHODS
    // Returns copy of stored anchor map; minimizes overhead
    copyAnchorMap = function() {
        return $.extend(true, {}, stateMap.anchor_map);
    };
    // END UTILITY METHODS

    // BEGIN DOM METHODS
    // Begin DOM method /setJqueryMap/
    setJqueryMap = function() {
        var $container = stateMap.$container;
        jqueryMap = {
            $container: $container,
            $chat: $container.find('.spa-shell-chat') 
        };
    };
    // END DOM method /setJqueryMap/

    // Begin DOM method /toggleChat/
    // Purpose: Extends or retracts chat slider
    // Arguments:
        // * do_extend - if true, extends slider; if false retracts
        // callback - optional function to execute at end of animation
    // Setting:
        // * chat_extended_time, chat_retracted_time
        // * chat_extended_height, chat_retracted_height
    // Returns: boolean
        // * true - slider animation activated
        // * false - slider animation not activated
    // State: sets stateMap.is_chat_retracted
        // * true - slider is retracted
        // * false - slider is extended
    toggleChat = function(do_extend, callback) {
        var px_chat_ht = jqueryMap.$chat.height(),
            is_open = px_chat_ht === configMap.chat_extended_height,
            is_closed = px_chat_ht === configMap.chat_retracted_height,
            is_sliding = !is_open && !is_closed;
        
        // avoid race condition
        if (is_sliding) {return false;}

        // Begin extend chat slider
        if (do_extend) {
            jqueryMap.$chat.animate(
                { height: configMap.chat_extended_height },
                configMap.chat_extended_time,
                function() {
                    jqueryMap.$chat.attr(
                        'title', configMap.chat_extended_title
                    );
                    stateMap.is_chat_retracted = false;
                    if (callback) {
                        callback(jqueryMap.$chat);
                    }
                }
            );
            return true;
        }
        // End extend chat slider
        
        // Begin retract chat slider
        jqueryMap.$chat.animate(
            { height: configMap.chat_retracted_height },
            configMap.chat_retracted_time,
            function() {
                jqueryMap.$chat.attr(
                    'title', configMap.chat_retracted_title
                );
                stateMap.is_chat_retracted = true;
                if (callback) { callback(jqueryMap.$chat); }
            }
        );
        return true;
        // End retract chat slider
    };

    // Begin DOM method /changeAnchorPart/
    // Purpose: Changes part of the URI anchor component
    // Arguments
        // * arg_map - The map describing what part of the URI anchor
        //   we want changed
    // Returns: boolean
    // * true - the Anchor portion of the URI was update
    // * false - the Anchor portion of the URI could not be updated
    // Action: 
        // The current anchor rep stored in stateMap.anchor_map.
        // See uriAnchor for a discussion of encoding
        // This method
            // * Creates a copy of this map using copyAnchorMap().
            // * Modifies the key-values using arg_map.
            // * Manages the distinction between independent
            //   and dependent values in the encoding.
            // * Attempts to change the URI using uriAnchor.
            // * Returns true on success, and false on failure.
    changeAnchorPart = function(arg_map) {
        var anchor_map_revise = copyAnchorMap(),
            bool_return = true,
            key_name, key_name_dep;
        // Begin merge changes into anchor map
        KEYVAL:
        for (key_name in arg_map) {
            if (arg_map.hasOwnProperty(key_name)) {
                // skip dependent keys during iteration
                if (key_name.indexOf('_') === 0) {
                    continue KEYVAL;
                }
                // update independent key value
                anchor_map_revise[key_name] = arg_map[key_name];

                // update matching dependent key
                key_name_dep = '_' + key_name;
                if (arg_map[key_name_dep]) {
                    anchor_map_revise[key_name_dep] = arg_map[key_name_dep];
                } else {
                    delete anchor_map_revise[key_name_dep];
                    delete anchor_map_revise['_s' + key_name_dep];
                }
            }
        }
        // End merge changes into anchor map        

        // Begin attempt to update URI; revert if not successful
        try {
            $.uriAnchor.setAnchor(anchor_map_revise);
        }
        catch (error) {
            // replace URI with existing state
            $.uriAnchor.setAnchor(stateMap.anchor_map, null, true);
            bool_return = false;
        }
        // End attempt to update URI
        return bool_return;
    };
    // End DOM method /changeAnchorPart/    
    // END DOM METHODS

    // BEGIN EVENT HANDLERS
    onClickChat = function(event) {
        if (toggleChat(stateMap.is_chat_retracted)) {
            $.uriAnchor.setAnchor({
                chat: ( stateMap.is_chat_retracted ? 'open' : 'closed')
            });
        }
        return false;
    }

    // Begin Event handler /onHashchange/
    // Purpose: Handles the hashchange event
    // Arguments:
        // * event - jQuery event object.
    // Settings: none
    // Returns: false
    // Action:
        // * Parses the URI anchor component
        // * Compares proposed application state with current
        // * Adjust the application only where proposed state
        //   differs from existing

        onhashchange = function(event) {
            var anchor_map_previous = copyAnchorMap(),
                anchor_map_proposed,
                _s_chat_previous, _s_chat_proposed,
                s_chat_proposed;
            // attempt to parse anchor
            try { anchor_map_proposed = $.uriAnchor.makeAnchorMap(); }
            catch(error) {
                $.uriAnchor.setAnchor(anchor_map_previous, null, true);
                return false;
            }
            stateMap.anchor_map = anchor_map_proposed;

            // convenience vars
            _s_chat_previous = anchor_map_previous._s_chat;
            _s_chat_proposed = anchor_map_proposed._s_chat;

            // Begin adjust chat component if changed
            if (!anchor_map_previous || _s_chat_previous !== _s_chat_proposed) {
                s_chat_proposed = anchor_map_proposed.chat;
                switch (s_chat_proposed) {
                    case 'open':
                        toggleChat(true);
                        break;
                    case 'closed':
                        toggleChat(false);
                        break;
                    default:
                        toggleChat(false);
                        delete anchor_map_proposed.chat;
                        $.uriAnchor.setAnchor(anchor_map_proposed, null, true);
                }
            }
            // End adjust chat component if changed
            return false;
        };
    // End Event handler /onHashchange/  
    // END EVENT HANDLERS

    // BEGIN PUBLIC METHODS
    // Begin Public method /initModule/
    initModule = function($container) {
        // load HTML and map jQuery collections
        stateMap.$container = $container;
        $container.html(configMap.main_html);
        setJqueryMap();

        // initilize chat slider and bind click handler
        stateMap.is_chat_retracted = true;
        jqueryMap.$chat
            .attr('title', configMap.chat_retracted_title)
            .click(onClickChat);
        // configure uriAnchor to use our schema
        $.uriAnchor.configModule({
            schema_map: configMap.anchor_schema_map
        });

        // configure and initialize feature modules
        spa.chat.configModule( { } );
        spa.chat.initModule( jqueryMap.$chat );
        // Handle URI anchor change events.
        // This is done /after/ all feature modules are configured
        // and initialized, otherwise they will not be ready to handle
        // the trigger event, which is used to ensure the anchor
        // is considered on-load

        $(window)
            .bind('hashchange', onHashchange)
            .trigger('hashchange');
    };
    // End Public method /initModule/
    return { initModule: initModule };
    // END PUBLIC METHODS
}());