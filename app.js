/**
 * Created by amrmishr on 2/18/18.
 */
// configuration
Router.config({ mode: 'history'});
var root = document.getElementById('root');


// adding routes
Router
    .add('About', {
        templateUrl : 'templates/about.html'
    })
    .add('Contact', {
        templateUrl : 'templates/contactus.html'
    })
    .add('Home',{
        templateUrl :'templates/home.html'
    })
    .check('Home').listen();

// forwarding
Router.navigate('/About');
var menuItem = document.getElementsByClassName('menuitem');

$('.menuitem').on('click',function(ele){
    var route = ele.target.innerHTML;
    Router.navigate('/'+route);
});
