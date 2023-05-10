function receivesAFunction(thing) {
    return thing();
}

receivesAFunction(function() {return 5 + 5;});

function returnsANamedFunction() {
    return function meow(){};
}

returnsANamedFunction(function meow(){5 * 5;}); 

function returnsAnAnonymousFunction() {
    return function(){};
}
