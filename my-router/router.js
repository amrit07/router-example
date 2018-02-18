/**
 * Created by amrmishr on 2/18/18.
 */

const Router = {
    routes : [],
    mode: '',
    root : '',
    config : function(options){
        if(options && options.mode === 'history'){
            this.mode = 'history'
        }
        else{
            this.mode = 'hash'
        }
        if(options.root){
            this.root = options.root ?  options.root : '/';
        }
    },
    //

    //this function will remove slashes from start and end of a string/path
    clearSlashes: function(path) {
        return path.toString().replace(/\/$/, '').replace(/^\//, '');
    },

    //this function will add  Routes to the application which will call the  handler function
    add: function(route, handler) {
        this.routes.push({ route: route, handler: handler});
        return this;
    },

    /**
     * This function will remove the routes if present in our routes array
     * @param route
     */
    remove : function(route){
        var index = routes.indexOf(route);
        if(index >=0){
            routes.splice(index, 1);
        }
        return this;
    },

    /**
     * This function will get the routes or fragment string present in the address bar
     * @return {*}
     */
    getFragment: function() {
        var fragment = '';
        if(this.mode === 'history') {
            fragment = this.clearSlashes(decodeURI(location.pathname));
        } else {
            var match = window.location.href.match(/#(.*)$/);
            fragment = match ? match[1] : '';
        }
        return this.clearSlashes(fragment);
    },

    /**
     * This method will check if the current routes exist in our array, if it does exist this will call its handler
     */
    check : function(route){
        route = route || this.getFragment();
        var routeObj = this.routes.find((routeObj)=>routeObj.route === route);
        if(routeObj){
            routeObj.handler();
        }
        return this;
    },

    /**
     * This function will navigate to the path supplied
     * @param path
     */
    navigate : function(path){
        if(this.mode === 'history'){
            history.pushState(null, null, this.root + this.clearSlashes(path))
        } else {
            window.location.href = window.location.href.replace(/#(.*)$/, '') + '#' + path;
        }

    },

    /**
     * This function will listen for the browser to change the url, and once the url changes it calls check function which will trigger handler
     */
    listen: function() {
        var self = this;
        var currentRoute = this.getFragment();
        var fn = function(){
            if(currentRoute !== self.getFragment()){
                currentRoute = self.getFragment();
                self.check(currentRoute);
            }
        };
        clearInterval(this.interval);
        this.interval = setInterval(fn,50);
        return this;
    }
};

