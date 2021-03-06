var e;
var myPath;
var animation;  //make the variables global, so you can access them in the animation function


window.onload = function() {

    var r = Raphael("holder", 620, 420),
        discattr = {
            fill: "#666",
            stroke: "none"
        };

    function curve(x, y, zx, zy, colour) {
        var ax = Math.floor(Math.random() * 200) + x;
        var ay = Math.floor(Math.random() * 200) + (y - 100);
        var bx = Math.floor(Math.random() * 200) + (zx - 200);
        var by = Math.floor(Math.random() * 200) + (zy - 100);
        e = r.circle(x, y, 5, 5).attr({
            stroke: "none",
            fill: colour
        });
        var path = [["M", x, y], ["C", ax, ay, bx, by, zx, zy]];
            myPath = r.path(path).attr({
                stroke: colour,
                "stroke-width": 2,
                "stroke-linecap": "round",
                "stroke-opacity": 0.2
            });
        controls = r.set(
            r.circle(x, y, 5).attr(discattr), r.circle(zx, zy, 5).attr(discattr));
    }
    curve(100,100,200,300,"red");

    animation = window.setInterval("animate()", 10);  //execute the animation function all 10ms (change the value for another speed)
};

var counter = 0;    // a counter that counts animation steps
function animate(){
    if(myPath.getTotalLength() <= counter){   //break as soon as the total length is reached
        clearInterval(animation);
        return;
    }
    var pos = myPath.getPointAtLength(counter);   //get the position (see Raphael docs)
    e.attr({cx: pos.x, cy: pos.y});  //set the circle position
    
    counter++; // count the step counter one up
};
