/**
 * Created by amrmishr on 2/18/18.
 */
// configuration
Router.config({ mode: 'history'});
var root = document.getElementById('root');


// adding routes
Router
    .add('About', function() {
        root.innerHTML =  'Hey I am an about us page';
    })
    .add('Contact', function() {
        root.innerHTML = 'Plz contact me at the following address';
    })
    .check('About').listen();

// forwarding
Router.navigate('/About');
var menuItem = document.getElementsByClassName('menuitem');

$('.menuitem').on('click',function(ele){
    var route = ele.target.innerHTML;
    Router.navigate('/'+route);
});
