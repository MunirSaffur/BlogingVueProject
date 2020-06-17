import Vue from "vue";

Vue.filter('shorten', function(value, length){
    return value.substring(0, length) + ' ...';
})

