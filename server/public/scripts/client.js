let myApp = angular.module('myApp', []);

myApp.controller('divController', function() {
    console.log('divController has loaded.');
    let self = this;
    self.saying = "hey there."
})