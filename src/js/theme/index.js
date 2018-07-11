var dropdown =   require('./dropdown');
var keyboard =   require('./keyboard');
var navigation = require('./navigation');
var sidebar =    require('./sidebar');
var platform = require('./platform');
//var toolbar =    require('./toolbar');

var gitbook = window.gitbook;

function init() {
    // Init sidebar
    sidebar.init();

    // Init keyboard
    keyboard.init();

    // Bind dropdown
    dropdown.init();

    // Init navigation
    navigation.init();

    checkSmallScreen();
    $(window).resize(checkSmallScreen);

    // Add action to toggle sidebar
    //toolbar.createButton({
    //    index: 0,
    //    icon: 'fa fa-align-justify',
    //    onClick: function(e) {
    //        e.preventDefault();
    //        sidebar.toggle();
    //    }
    //});
}

gitbook.events.on('start', init);

gitbook.keyboard = keyboard;
gitbook.navigation = navigation;
gitbook.sidebar = sidebar;
//gitbook.toolbar = toolbar;


function checkSmallScreen(){
    if(platform.isSmallScreen()){
        $(".book").removeClass("with-summary with-header");
        $(".subnav-box").hide();


        $(document).on("click", function(){
            platform.isSmallScreen() && $(".book").removeClass('with-summary')
        })

        $(document).on('click', '.book-summary li.chapter a', function(e) {
            platform.isSmallScreen() && $(".book").removeClass("with-summary")
        });

    }else{
        $(".subnav-box").show();

        $(".book").addClass("with-summary with-header")
    }
}

