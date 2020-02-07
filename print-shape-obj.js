/*
    JavaScript– working with simple JS objects and
    function properties:
    TODO #1: Modify this so that the printShapes function will work
    TODO #2: Modify this so that each object in the shapes array can calculate its area
    TODO #3: Include the area when writing shapes
*/

function createShapes() {
    var shapes = [];
    for (var i = 0; i < 5; ++i) {
        let rectangle = {
            width: Math.floor((Math.random() * 100) + 1),
            height: Math.floor((Math.random() * 100) + 1),
        };
    // Bug can't do this directly b/c will take last iteration of loop
    // rectangle.area = rectangle.width * rectangle.height;
    rectangle.area = () => {
        return rectangle.width * rectangle.height;
    }  
shapes.push(rectangle);

let circle = {
radius: Math.floor((Math.random() * 50) + 1)
};
// Bug can't do this directly b/c will take last iteration of loop
// circle.area = 3.14 * (circle.radius * circle.radius);

circle.area = () => {
return Math.PI * (circle.radius * circle.radius);
} 
shapes.push(circle);
}

return shapes;
}
​
function printShapes(shapes) {
for (var i = 0; i < shapes.length; ++i) {
console.log(shapes[i], shapes[i].area());
}
}

var shapes = createShapes();
printShapes(shapes);
