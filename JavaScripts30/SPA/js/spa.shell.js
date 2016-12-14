spa.shell = (function() {
    // BEGIN MODULE SCOPE VARIABLES
    var configMap = {
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
        is_chat_retracted: true
    },
    jqueryMap = {},
    setJqueryMap, toggleChat, onClickChat, initModule;
    // END MODULE SCOPE VARIABLES

    // BEGIN UTILITY METHODS
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
    // END DOM METHODS

    // BEGIN EVENT HANDLERS
    onClickChat = function(event) {
        toggleChat(stateMap.is_chat_retracted);
        return false;
    }
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
    };
    // End Public method /initModule/
    return { initModule: initModule };
    // END PUBLIC METHODS
}());