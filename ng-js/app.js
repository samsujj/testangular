'use strict';

/* App Module */
var appmodule = angular.module('nodejsdemo', ['ui.router','ngGrid','theme','theme.demos','theme.core.services','angularValidator']);

appmodule.config(function($stateProvider, $urlRouterProvider,$locationProvider) {
    $urlRouterProvider
        .otherwise("/index");


    $stateProvider
        .state('index',{
            url:"/index",
            views: {

                'header': {
                    templateUrl: 'views/header.html' ,
                    controller: 'header'
                },'sidebar': {
                    templateUrl: 'views/sidebar.html' ,
                    controller: 'sidebar'
                },'content': {
                    templateUrl: 'views/index.html' ,
                    controller: 'index'
                },'footer': {
                    templateUrl: 'views/footer.html' ,
                    //controller: 'sidebar'
                },

            }
        }
    )

        .state('form',{
            url:"/form",
            views: {

                'header': {
                    templateUrl: 'views/header.html' ,
                    controller: 'header'
                },'sidebar': {
                    templateUrl: 'views/sidebar.html' ,
                    controller: 'sidebar'
                },'content': {
                    templateUrl: 'views/form.html' ,
                    controller: 'form'
                },'footer': {
                    templateUrl: 'views/footer.html' ,
                    //controller: 'sidebar'
                },

            }
        }
    )


        .state('table',{
            url:"/table",
            views: {

                'header': {
                    templateUrl: 'views/header.html' ,
                    controller: 'header'
                },'sidebar': {
                    templateUrl: 'views/sidebar.html' ,
                    controller: 'sidebar'
                },'content': {
                    templateUrl: 'views/table.html' ,
                    controller: 'table'
                },'footer': {
                    templateUrl: 'views/footer.html' ,
                    //controller: 'sidebar'
                },

            }
        }
    )


        .state('login',{
            url:"/login",
            views: {

                'content': {
                    templateUrl: 'views/login.html' ,
                    controller: 'login'
                },'footer': {
                    templateUrl: 'views/footer.html' ,
                    //controller: 'sidebar'
                },

            }
        }
    )

        .state('signup',{
            url:"/signup",
            views: {

                'content': {
                    templateUrl: 'views/signup.html' ,
                    controller: 'signup'
                },'footer': {
                    templateUrl: 'views/footer.html' ,
                    //controller: 'sidebar'
                },

            }
        }
    )



    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false,
        hashPrefix:'!'
    });
});


appmodule.controller('header', function($scope,$state,$rootScope, $theme, $timeout, $location,progressLoader,$filter) {

    $scope.layoutFixedHeader = $theme.get('fixedHeader');
    $scope.layoutPageTransitionStyle = $theme.get('pageTransitionStyle');
    $scope.layoutDropdownTransitionStyle = $theme.get('dropdownTransitionStyle');
    $scope.layoutPageTransitionStyleList = ['bounce',
        'flash',
        'pulse',
        'bounceIn',
        'bounceInDown',
        'bounceInLeft',
        'bounceInRight',
        'bounceInUp',
        'fadeIn',
        'fadeInDown',
        'fadeInDownBig',
        'fadeInLeft',
        'fadeInLeftBig',
        'fadeInRight',
        'fadeInRightBig',
        'fadeInUp',
        'fadeInUpBig',
        'flipInX',
        'flipInY',
        'lightSpeedIn',
        'rotateIn',
        'rotateInDownLeft',
        'rotateInDownRight',
        'rotateInUpLeft',
        'rotateInUpRight',
        'rollIn',
        'zoomIn',
        'zoomInDown',
        'zoomInLeft',
        'zoomInRight',
        'zoomInUp'
    ];

    $scope.layoutLoading = true;

    $scope.getLayoutOption = function(key) {
        return $theme.get(key);
    };

    $scope.setNavbarClass = function(classname, $event) {
        $event.preventDefault();
        $event.stopPropagation();
        $theme.set('topNavThemeClass', classname);
    };

    $scope.setSidebarClass = function(classname, $event) {
        $event.preventDefault();
        $event.stopPropagation();
        $theme.set('sidebarThemeClass', classname);
    };

    $scope.$watch('layoutFixedHeader', function(newVal, oldval) {
        if (newVal === undefined || newVal === oldval) {
            return;
        }
        $theme.set('fixedHeader', newVal);
    });
    $scope.$watch('layoutLayoutBoxed', function(newVal, oldval) {
        if (newVal === undefined || newVal === oldval) {
            return;
        }
        $theme.set('layoutBoxed', newVal);
    });
    $scope.$watch('layoutLayoutHorizontal', function(newVal, oldval) {
        if (newVal === undefined || newVal === oldval) {
            return;
        }
        $theme.set('layoutHorizontal', newVal);
    });
    $scope.$watch('layoutPageTransitionStyle', function(newVal) {
        $theme.set('pageTransitionStyle', newVal);
    });
    $scope.$watch('layoutDropdownTransitionStyle', function(newVal) {
        $theme.set('dropdownTransitionStyle', newVal);
    });

    $scope.hideHeaderBar = function() {
        $theme.set('headerBarHidden', true);
    };

    $scope.showHeaderBar = function($event) {
        $event.stopPropagation();
        $theme.set('headerBarHidden', false);
    };

    $scope.toggleLeftBar = function() {
        if ($scope.layoutIsSmallScreen) {
            return $theme.set('leftbarShown', !$theme.get('leftbarShown'));
        }
        $theme.set('leftbarCollapsed', !$theme.get('leftbarCollapsed'));
    };

    $scope.toggleRightBar = function() {
        $theme.set('rightbarCollapsed', !$theme.get('rightbarCollapsed'));
    };

    $scope.toggleSearchBar = function($event) {
        $event.stopPropagation();
        $event.preventDefault();
        $theme.set('showSmallSearchBar', !$theme.get('showSmallSearchBar'));
    };

    $scope.chatters = [{
        id: 0,
        status: 'online',
        avatar: 'potter.png',
        name: 'Jeremy Potter'
    }, {
        id: 1,
        status: 'online',
        avatar: 'tennant.png',
        name: 'David Tennant'
    }, {
        id: 2,
        status: 'online',
        avatar: 'johansson.png',
        name: 'Anna Johansson'
    }, {
        id: 3,
        status: 'busy',
        avatar: 'jackson.png',
        name: 'Eric Jackson'
    }, {
        id: 4,
        status: 'online',
        avatar: 'jobs.png',
        name: 'Howard Jobs'
    }, {
        id: 5,
        status: 'online',
        avatar: 'potter.png',
        name: 'Jeremy Potter'
    }, {
        id: 6,
        status: 'away',
        avatar: 'tennant.png',
        name: 'David Tennant'
    }, {
        id: 7,
        status: 'away',
        avatar: 'johansson.png',
        name: 'Anna Johansson'
    }, {
        id: 8,
        status: 'online',
        avatar: 'jackson.png',
        name: 'Eric Jackson'
    }, {
        id: 9,
        status: 'online',
        avatar: 'jobs.png',
        name: 'Howard Jobs'
    }];
    $scope.currentChatterId = null;
    $scope.hideChatBox = function() {
        $theme.set('showChatBox', false);
    };
    $scope.toggleChatBox = function(chatter, $event) {
        $event.preventDefault();
        if ($scope.currentChatterId === chatter.id) {
            $theme.set('showChatBox', !$theme.get('showChatBox'));
        } else {
            $theme.set('showChatBox', true);
        }
        $scope.currentChatterId = chatter.id;
    };

    $scope.hideChatBox = function() {
        $theme.set('showChatBox', false);
    };

    $scope.$on('themeEvent:maxWidth767', function(event, newVal) {
        $timeout(function() {
            $scope.layoutIsSmallScreen = newVal;
            if (!newVal) {
                $theme.set('leftbarShown', false);
            } else {
                $theme.set('leftbarCollapsed', false);
            }
        });
    });
    $scope.$on('themeEvent:changed:fixedHeader', function(event, newVal) {
        $scope.layoutFixedHeader = newVal;
    });
    $scope.$on('themeEvent:changed:layoutHorizontal', function(event, newVal) {
        $scope.layoutLayoutHorizontal = newVal;
    });
    $scope.$on('themeEvent:changed:layoutBoxed', function(event, newVal) {
        $scope.layoutLayoutBoxed = newVal;
    });

    // there are better ways to do this, e.g. using a dedicated service
    // but for the purposes of this demo this will do :P
    $scope.isLoggedIn = true;
    $scope.logOut = function() {
        $scope.isLoggedIn = false;
    };
    $scope.logIn = function() {
        $scope.isLoggedIn = true;
    };

    $scope.rightbarAccordionsShowOne = false;
    $scope.rightbarAccordions = [{
        open: true
    }, {
        open: true
    }, {
        open: true
    }, {
        open: true
    }, {
        open: true
    }, {
        open: true
    }, {
        open: true
    }];

    $scope.$on('$routeChangeStart', function() {
        if ($location.path() === '') {
            return $location.path('/');
        }
        progressLoader.start();
        progressLoader.set(50);
    });
    $scope.$on('$routeChangeSuccess', function() {
        progressLoader.end();
        if ($scope.layoutLoading) {
            $scope.layoutLoading = false;
        }
    });




    /*****************Mesage Controller*****************/
    $scope.messages = [{
        name: 'Polly Paton',
        message: 'Uploaded all the files to server',
        time: '3m',
        class: 'notification-danger',
        thumb: 'assets/demo/avatar/paton.png',
        read: false
    }, {
        name: 'Simon Corbett',
        message: 'I am signing off for today',
        time: '17m',
        class: 'notification-danger',
        thumb: 'assets/demo/avatar/corbett.png',
        read: false
    }, {
        name: 'Matt Tennant',
        message: 'Everything is working just fine here',
        time: '2h',
        class: 'notification-danger',
        thumb: 'assets/demo/avatar/tennant.png',
        read: true
    }, {
        name: 'Alan Doyle',
        message: 'Please mail me the files by tonight',
        time: '5d',
        class: 'notification-danger',
        thumb: 'assets/demo/avatar/doyle.png',
        read: false
    }, {
        name: 'Polly Paton',
        message: 'Uploaded all the files to server',
        time: '3m',
        class: 'notification-danger',
        thumb: 'assets/demo/avatar/paton.png',
        read: false
    }, {
        name: 'Simon Corbett',
        message: 'I am signing off for today',
        time: '17m',
        class: 'notification-danger',
        thumb: 'assets/demo/avatar/corbett.png',
        read: false
    }, {
        name: 'Matt Tennant',
        message: 'Everything is working just fine here',
        time: '2h',
        class: 'notification-danger',
        thumb: 'assets/demo/avatar/tennant.png',
        read: true
    }, {
        name: 'Alan Doyle',
        message: 'Please mail me the files by tonight',
        time: '5d',
        class: 'notification-danger',
        thumb: 'assets/demo/avatar/doyle.png',
        read: false
    }, ];

    $scope.setRead = function(item, $event) {
        $event.preventDefault();
        $event.stopPropagation();
        item.read = true;
    };

    $scope.setUnread = function(item, $event) {
        $event.preventDefault();
        $event.stopPropagation();
        item.read = false;
    };

    $scope.setReadAll = function($event) {
        $event.preventDefault();
        $event.stopPropagation();
        angular.forEach($scope.messages, function(item) {
            item.read = true;
        });
    };

    $scope.unseenCount = $filter('filter')($scope.messages, {
        read: false
    }).length;

    $scope.$watch('messages', function(messages) {
        $scope.unseenCount = $filter('filter')(messages, {
            read: false
        }).length;
    }, true);
    /**********************************/

    /*****************Notification Controller***************/
    $scope.notifications = [{
        text: 'Server #1 is live',
        time: '4m',
        class: 'notification-success',
        iconClasses: 'glyphicon glyphicon-ok',
        seen: true
    }, {
        text: 'New user Registered',
        time: '10m',
        class: 'notification-user',
        iconClasses: 'glyphicon glyphicon-user',
        seen: false
    }, {
        text: 'CPU at 92% on server#3!',
        time: '22m',
        class: 'notification-danger',
        iconClasses: 'glyphicon glyphicon-exclamation-sign',
        seen: false
    }, {
        text: 'Database overloaded',
        time: '30m',
        class: 'notification-warning',
        iconClasses: 'glyphicon glyphicon-warning-sign',
        seen: false
    }, {
        text: 'New order received',
        time: '1h',
        class: 'notification-order',
        iconClasses: 'glyphicon glyphicon-shopping-cart',
        seen: true
    }, {
        text: 'Application error!',
        time: '9d',
        class: 'notification-danger',
        iconClasses: 'glyphicon glyphicon-remove',
        seen: true
    }, {
        text: 'Installation Succeeded',
        time: '1d',
        class: 'notification-success',
        iconClasses: 'glyphicon glyphicon-ok',
        seen: false
    }, {
        text: 'Account Created',
        time: '2d',
        class: 'notification-success',
        iconClasses: 'glyphicon glyphicon-ok',
        seen: false
    }, ];

    $scope.setSeen = function(item, $event) {
        $event.preventDefault();
        $event.stopPropagation();
        item.seen = true;
    };

    $scope.setUnseen = function(item, $event) {
        $event.preventDefault();
        $event.stopPropagation();
        item.seen = false;
    };

    $scope.setSeenAll = function($event) {
        $event.preventDefault();
        $event.stopPropagation();
        angular.forEach($scope.notifications, function(item) {
            item.seen = true;
        });
    };

    $scope.unseenCount = $filter('filter')($scope.notifications, {
        seen: false
    }).length;

    $scope.$watch('notifications', function(notifications) {
        $scope.unseenCount = $filter('filter')(notifications, {
            seen: false
        }).length;
    }, true);
    /********************************/

    $scope.toggleLeftBar2 = function(){

        if(angular.element('body').hasClass('sidebar-collapsed'))
            angular.element('body').removeClass('sidebar-collapsed');
        else
            angular.element('body').addClass('sidebar-collapsed');
    }


    if(angular.element('body').hasClass('focusedform'))
        angular.element('body').removeClass('focusedform');



});

appmodule.controller('sidebar', function($scope,$state,$rootScope, $theme, $timeout, $location,progressLoader,$filter) {

    $scope.menu = [{
        label: 'Overview',
        iconClasses: '',
        separator: true
    }, {
        label: 'Dashboard',
        iconClasses: 'glyphicon glyphicon-home',
        url: '#/'
    }, {
        label: 'Layouts',
        iconClasses: 'glyphicon glyphicon-th-list',
        html: '<span class="badge badge-warning">2</span>',
        children: [{
            label: 'Grids',
            url: '#/layout-grid'
        }, {
            label: 'Horizontal Navigation',
            url: '#/layout-horizontal'
        }, {
            label: 'Horizontal Navigation 2',
            url: '#/layout-horizontal2'
        }, {
            label: 'Fixed Boxed Layout',
            url: '#/layout-fixed'
        }]
    }, {
        label: 'Bonus Apps',
        iconClasses: '',
        separator: true
    }, {
        label: 'Email',
        iconClasses: 'glyphicon glyphicon-inbox',
        html: '<span class="badge badge-indigo">3</span>',
        children: [{
            label: 'Inbox',
            url: '#/inbox'
        }, {
            label: 'Compose',
            url: '#/compose-mail'
        }, {
            label: 'Read',
            url: '#/read-mail'
        }, {
            label: 'Email Templates',
            url: '#/extras-email-templates'
        }]
    }, {
        label: 'Tasks',
        iconClasses: 'glyphicon glyphicon-ok',
        html: '<span class="badge badge-info">7</span>',
        url: '#/tasks'
    }, {
        label: 'Calendar',
        iconClasses: 'glyphicon glyphicon-calendar',
        url: '#/calendar'
    }, {
        label: 'Gallery',
        iconClasses: 'glyphicon glyphicon-th-large',
        url: '#/gallery'
    }, {
        label: 'Features',
        iconClasses: 'fa fa-home',
        separator: true
    }, {
        label: 'UI Kit',
        iconClasses: 'glyphicon glyphicon-random',
        children: [{
            label: 'Typography',
            url: '#/ui-typography'
        }, {
            label: 'Buttons',
            url: '#/ui-buttons'
        }, {
            label: 'Tables',
            url: '#/tables-basic'
        }, {
            label: 'Forms',
            url: '#/form-layout'
        }, {
            label: 'Tiles',
            url: '#/ui-tiles'
        }, {
            label: 'Modals & Bootbox',
            url: '#/ui-modals'
        }, {
            label: 'Progress Bars',
            url: '#/ui-progressbars'
        }, {
            label: 'Pagers & Pagination',
            url: '#/ui-paginations'
        }, {
            label: 'Labels & Badges',
            url: '#/ui-labelsbadges'
        }, {
            label: 'Alerts & Notifications',
            url: '#/ui-alerts'
        }, {
            label: 'Sliders & Ranges',
            url: '#/ui-sliders'
        }, {
            label: 'Tabs & Accordions',
            url: '#/ui-tabs'
        }, {
            label: 'Nestable Lists',
            url: '#/ui-nestable'
        }, {
            label: 'Misc',
            url: '#/ui-misc'
        }]
    }, {
        label: 'Panels',
        iconClasses: 'glyphicon glyphicon-cog',
        url: '#/ui-panels',
        html: '<span class="label label-danger">HOT</span>'
    }, {
        label: 'Tables',
        iconClasses: 'glyphicon glyphicon-unchecked',
        children: [{
            label: 'ngGrid',
            url: '#/tables-data'
        }, {
            label: 'Responsive Tables',
            url: '#/tables-responsive'
        }, {
            label: 'Editable Tables',
            url: '#/tables-editable'
        }]
    }, {
        label: 'Forms',
        iconClasses: 'glyphicon glyphicon-check',
        children: [{
            label: 'Components',
            url: '#/form-components'
        }, {
            label: 'Wizards',
            url: '#/form-wizard'
        }, {
            label: 'Validation',
            url: '#/form-validation'
        }, {
            label: 'Masks',
            url: '#/form-masks'
        }, {
            label: 'Multiple File Uploads',
            url: '#/form-fileupload'
        }, {
            label: 'WYSIWYG Editor',
            url: '#/form-wysiwyg'
        }, {
            label: 'Inline Editor',
            url: '#/form-xeditable'
        }, {
            label: 'Image Cropping',
            url: '#/form-imagecrop'
        }]
    }, {
        label: 'Charts',
        iconClasses: 'glyphicon glyphicon-stats',
        hideOnHorizontal: true,
        children: [{
            label: 'Flot',
            url: '#/charts-flot'
        }, {
            label: 'Morris.js',
            url: '#/charts-morrisjs'
        }, {
            label: 'Chart.js',
            url: '#/charts-chartjs'
        }, {
            label: 'nvd3 Charts',
            url: '#/charts-nvd3'
        }, {
            label: 'Sparklines',
            url: '#/charts-sparklines'
        }]
    }, {
        label: 'Maps',
        iconClasses: 'glyphicon glyphicon-map-marker',
        hideOnHorizontal: true,
        children: [{
            label: 'Google Maps',
            url: '#/maps-google'
        }, {
            label: 'Vector Maps',
            url: '#/maps-vector'
        }]
    }, {
        label: 'Pages',
        iconClasses: 'glyphicon glyphicon-file',
        hideOnHorizontal: true,
        children: [{
            label: 'Blank Page',
            url: '#/extras-blank'
        }, {
            label: 'Timeline Split',
            url: '#/extras-timeline2'
        }, {
            label: 'Invoice',
            url: '#/extras-invoice'
        }, {
            label: 'Profile',
            url: '#/extras-profile'
        }, {
            label: 'Search Page',
            url: '#/extras-search'
        }, {
            label: 'Registration',
            url: '#/extras-registration'
        }, {
            label: 'Sign Up',
            url: '#/extras-signupform'
        }, {
            label: 'Password Reset',
            url: '#/extras-forgotpassword'
        }, {
            label: 'Login 1',
            url: '#/extras-login'
        }, {
            label: 'Login 2',
            url: '#/extras-login2'
        }, {
            label: '404 Page',
            url: '#/extras-404'
        }, {
            label: '500 Page',
            url: '#/extras-500'
        }]
    }, {
        label: 'Font Icons',
        iconClasses: 'glyphicon glyphicon-fire',
        hideOnHorizontal: true,
        children: [{
            label: 'Font Awesome',
            url: '#/icons-fontawesome'
        }, {
            label: 'Glyphicons',
            url: '#/icons-glyphicons'
        }]
    }, {
        label: 'Unlimited Level Menu',
        iconClasses: 'glyphicon glyphicon-align-left',
        hideOnHorizontal: true,
        children: [{
            label: 'Menu Item 1'
        }, {
            label: 'Menu Item 2',
            children: [{
                label: 'Menu Item 2.1'
            }, {
                label: 'Menu Item 2.1',
                children: [{
                    label: 'Menu Item 2.1.1'
                }, {
                    label: 'Menu Item 2.1.2',
                    children: [{
                        label: 'And Deeper Yet!'
                    }]
                }]
            }]
        }
        ]
    }];


    var setParent = function(children, parent) {
        angular.forEach(children, function(child) {
            child.parent = parent;
            if (child.children !== undefined) {
                setParent(child.children, child);
            }
        });
    };

    $scope.findItemByUrl = function(children, url) {
        for (var i = 0, length = children.length; i < length; i++) {
            if (children[i].url && children[i].url.replace('#', '') === url) {
                return children[i];
            }
            if (children[i].children !== undefined) {
                var item = $scope.findItemByUrl(children[i].children, url);
                if (item) {
                    return item;
                }
            }
        }
    };

    setParent($scope.menu, null);

    $scope.openItems = []; $scope.selectedItems = []; $scope.selectedFromNavMenu = false;

    $scope.select = function(item) {
        // close open nodes
        if (item.open) {
            item.open = false;
            return;
        }
        for (var i = $scope.openItems.length - 1; i >= 0; i--) {
            $scope.openItems[i].open = false;
        }
        $scope.openItems = [];
        var parentRef = item;
        while (parentRef !== null) {
            parentRef.open = true;
            $scope.openItems.push(parentRef);
            parentRef = parentRef.parent;
        }

        // handle leaf nodes
        if (!item.children || (item.children && item.children.length < 1)) {
            $scope.selectedFromNavMenu = true;
            for (var j = $scope.selectedItems.length - 1; j >= 0; j--) {
                $scope.selectedItems[j].selected = false;
            }
            $scope.selectedItems = [];
            parentRef = item;
            while (parentRef !== null) {
                parentRef.selected = true;
                $scope.selectedItems.push(parentRef);
                parentRef = parentRef.parent;
            }
        }
    };

    $scope.highlightedItems = [];
    var highlight = function(item) {
        var parentRef = item;
        while (parentRef !== null) {
            if (parentRef.selected) {
                parentRef = null;
                continue;
            }
            parentRef.selected = true;
            $scope.highlightedItems.push(parentRef);
            parentRef = parentRef.parent;
        }
    };

    var highlightItems = function(children, query) {
        angular.forEach(children, function(child) {
            if (child.label.toLowerCase().indexOf(query) > -1) {
                highlight(child);
            }
            if (child.children !== undefined) {
                highlightItems(child.children, query);
            }
        });
    };

    // $scope.searchQuery = '';
    $scope.$watch('searchQuery', function(newVal, oldVal) {
        var currentPath = '#' + $location.path();
        if (newVal === '') {
            for (var i = $scope.highlightedItems.length - 1; i >= 0; i--) {
                if ($scope.selectedItems.indexOf($scope.highlightedItems[i]) < 0) {
                    if ($scope.highlightedItems[i] && $scope.highlightedItems[i] !== currentPath) {
                        $scope.highlightedItems[i].selected = false;
                    }
                }
            }
            $scope.highlightedItems = [];
        } else
        if (newVal !== oldVal) {
            for (var j = $scope.highlightedItems.length - 1; j >= 0; j--) {
                if ($scope.selectedItems.indexOf($scope.highlightedItems[j]) < 0) {
                    $scope.highlightedItems[j].selected = false;
                }
            }
            $scope.highlightedItems = [];
            highlightItems($scope.menu, newVal.toLowerCase());
        }
    });

    $scope.$on('$routeChangeSuccess', function() {
        if ($scope.selectedFromNavMenu === false) {
            var item = $scope.findItemByUrl($scope.menu, $location.path());
            if (item) {
                $timeout(function() {
                    $scope.select(item);
                });
            }
        }
        $scope.selectedFromNavMenu = false;
        $scope.searchQuery = '';
    });

});

appmodule.controller('index', function($scope,$state,$rootScope, $theme, $timeout, $location,$window) {


});

appmodule.controller('form', function($scope,$state,$rootScope, $theme, $timeout, $location,$window,$http) {

    $scope.getBrandColor = function(color) {
        return $theme.getBrandColor(color);
    };
    $scope.switchStatus = 1;
    $scope.switchStatus2 = 1;
    $scope.switchStatus3 = 1;
    $scope.switchStatus4 = 1;
    $scope.switchStatus5 = 1;
    $scope.switchStatus6 = 1;

    $scope.getLocation = function(val) {
        return $http.get('http://maps.googleapis.com/maps/api/geocode/json', {
            params: {
                address: val,
                sensor: false
            }
        }).then(function(res) {
            var addresses = [];
            angular.forEach(res.data.results, function(item) {
                addresses.push(item.formatted_address);
            });
            return addresses;
        });
    };

    $scope.colorPicked = '#fa4d4d';

    $scope.tagList = ['tag1', 'tag2'];
    $scope.select2TaggingOptions = {
        'multiple': true,
        'simple_tags': true,
        'tags': ['tag1', 'tag2', 'tag3', 'tag4'] // Can be empty list.
    };

    $scope.clear = function() {
        $scope.person.selected = undefined;
        $scope.address.selected = undefined;
        $scope.country.selected = undefined;
    };

    $scope.someGroupFn = function(item) {

        if (item.name[0] >= 'A' && item.name[0] <= 'M') {
            return 'From A - M';
        }

        if (item.name[0] >= 'N' && item.name[0] <= 'Z') {
            return 'From N - Z';
        }
    };

    // ui-select stuff
    $scope.availableColors = ['Red', 'Green', 'Blue', 'Yellow', 'Magenta', 'Maroon', 'Umbra', 'Turquoise'];

    $scope.multipleDemo = {};
    $scope.multipleDemo.colors = ['Blue', 'Red'];
    $scope.multipleDemo.colors2 = ['Blue', 'Red'];

    $scope.address = {};
    $scope.refreshAddresses = function(address) {
        var params = {
            address: address,
            sensor: false
        };
        return $http.get(
            'http://maps.googleapis.com/maps/api/geocode/json', {
                params: params
            }
        ).then(function(response) {
                $scope.addresses = response.data.results;
            });
    };

    $scope.selectedCountry = {};
    $scope.selectedCountries = {};
    $scope.countries = [
        {'id':1,title:'country 1'},
        {'id':2,title:'country 2'},
        {'id':3,title:'country 3'},
        {'id':4,title:'country 4'},
        {'id':5,title:'country 5'},
    ];




    /***************DatePicker*************************/
    $scope.today = function() {
        $scope.dt = new Date();
    };
    $scope.today();

    $scope.clear = function() {
        $scope.dt = null;
    };

    // Disable weekend selection
    $scope.disabled = function(date, mode) {
        return (mode === 'day' && (date.getDay() === 0 || date.getDay() === 6));
    };

    $scope.toggleMin = function() {
        $scope.minDate = $scope.minDate ? null : new Date();
    };
    $scope.toggleMin();

    $scope.open = function($event) {
        $event.preventDefault();
        $event.stopPropagation();

        $scope.opened = true;
    };

    $scope.dateOptions = {
        formatYear: 'yy',
        startingDay: 1
    };

    $scope.initDate = new Date('2016-15-20');
    $scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
    $scope.format = $scope.formats[0];
    /****************************************/




    /******************Time Picker************************/
    $scope.mytime = new Date();

    $scope.hstep = 1;
    $scope.mstep = 15;

    $scope.options = {
        hstep: [1, 2, 3],
        mstep: [1, 5, 10, 15, 25, 30]
    };

    $scope.ismeridian = true;
    $scope.toggleMode = function() {
        $scope.ismeridian = !$scope.ismeridian;
    };

    $scope.update = function() {
        var d = new Date();
        d.setHours(14);
        d.setMinutes(0);
        $scope.mytime = d;
    };

    $scope.changed = function() {
        console.log('Time changed to: ' + $scope.mytime);
    };

    $scope.clear = function() {
        $scope.mytime = null;
    };
    /******************************************/


    /***********************Date Range************************/
    var moment = $window.moment;
    $scope.drp_start = moment().subtract(1, 'days').format('MMMM D, YYYY');
    $scope.drp_end = moment().add(31, 'days').format('MMMM D, YYYY');
    $scope.drp_options = {
        ranges: {
            'Today': [moment(), moment()],
            'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
            'Last 7 Days': [moment().subtract(6, 'days'), moment()],
            'Last 30 Days': [moment().subtract(29, 'days'), moment()],
            'This Month': [moment().startOf('month'), moment().endOf('month')],
            'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
        },
        opens: 'left',
        startDate: moment().subtract(29, 'days'),
        endDate: moment()
    };
    /***********************************************/


});


appmodule.controller('table', function($scope,$state,$rootScope, $theme, $timeout, $location,$window,$filter,$http) {
    $scope.filterOptions = {
        filterText: '',
        useExternalFilter: true
    };
    $scope.totalServerItems = 0;
    $scope.pagingOptions = {
        pageSizes: [25, 50, 100],
        pageSize: 25,
        currentPage: 1
    };
    $scope.setPagingData = function(data, page, pageSize) {
        var pagedData = data.slice((page - 1) * pageSize, page * pageSize);
        $scope.myData = pagedData;
        $scope.totalServerItems = data.length;
        if (!$scope.$$phase) {
            $scope.$apply();
        }
    };
    $scope.getPagedDataAsync = function(pageSize, page, searchText) {
        setTimeout(function() {
            var data;
            if (searchText) {
                var ft = searchText.toLowerCase();
                $http.get('assets/demo/ng-data.json').success(function(largeLoad) {
                    data = largeLoad.filter(function(item) {
                        return JSON.stringify(item).toLowerCase().indexOf(ft) !== -1;
                    });
                    $scope.setPagingData(data, page, pageSize);
                });
            } else {
                $http.get('assets/demo/ng-data.json').success(function(largeLoad) {
                    $scope.setPagingData(largeLoad, page, pageSize);
                });
            }
        }, 100);
    };

    $scope.getPagedDataAsync($scope.pagingOptions.pageSize, $scope.pagingOptions.currentPage);

    $scope.$watch('pagingOptions', function(newVal, oldVal) {
        if (newVal !== oldVal) {
            $scope.getPagedDataAsync($scope.pagingOptions.pageSize, $scope.pagingOptions.currentPage, $scope.filterOptions.filterText);
        }
    }, true);
    $scope.$watch('filterOptions', function(newVal, oldVal) {
        if (newVal !== oldVal) {
            $scope.getPagedDataAsync($scope.pagingOptions.pageSize, $scope.pagingOptions.currentPage, $scope.filterOptions.filterText);
        }
    }, true);

    $scope.gridOptions = {
        data: 'myData',
        enablePaging: true,
        showFooter: true,
        totalServerItems: 'totalServerItems',
        pagingOptions: $scope.pagingOptions,
        filterOptions: $scope.filterOptions
    };

});

appmodule.controller('login', function($scope,$state,$rootScope, $theme, $timeout, $location,$window) {

    /*$theme.set('fullscreen', true);

     $scope.$on('$destroy', function() {
     $theme.set('fullscreen', false);
     });*/


    if(!angular.element('body').hasClass('focusedform'))
        angular.element('body').addClass('focusedform');

});

appmodule.controller('signup', function($scope,$state,$rootScope, $theme, $timeout, $location,$window) {

    if(!angular.element('body').hasClass('focusedform'))
        angular.element('body').addClass('focusedform');

    $scope.countrylist = [
        {
            id:1,
            name:'USA'
        },
        {
            id:2,
            name:'Canada'
        },
        {
            id:3,
            name:'Australia'
        },
        {
            id:4,
            name:'Mexico'
        },
        {
            id:5,
            name:'UK'
        },
        {
            id:6,
            name:'France'
        },
    ]


    $scope.submitsignUpForm = function(){
        console.log($scope.form);
    }

});

