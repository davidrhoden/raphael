var animation = '';
var paper = Raphael(10, 10, 600, 600);
var ring = paper.circle(200, 200, 150);
ring.attr({stroke:"#000", "stroke-width":5, "stroke-dasharray": "-"});
var circle1 = paper.circle(200, 48, 16);
circle1.attr({"fill":"yellow", "stroke":"#ffff00"}); 
var circle2 = paper.circle(200, 48, 16);
circle2.attr({"fill":"yellow", "stroke":"#ffff00"}); 
var circle3 = paper.circle(200, 48, 16);
circle3.attr({"fill":"yellow", "stroke":"#ffff00"}); 
var circle4 = paper.circle(200, 48, 16);
circle4.attr({"fill":"yellow", "stroke":"#ffff00"}); 
var circle5 = paper.circle(200, 48, 16);
circle5.attr({"fill":"yellow", "stroke":"#ffff00"});

window.onload = function() {
    animation = window.setInterval('animateCircles()', 10);  
};


var counter = 0; 
function animateCircles(){
    if((ring.getTotalLength()/5) <= counter){ 
        clearInterval(animation);
                var honesty = paper.text(200, 100, "Honesty\nIntegrity\nNot Lying").attr({'text-anchor': 'start'});
        var integrity = paper.text(380, 180, "Integrity\nCooperation\nhelpingness").attr({'text-anchor': 'start', 'cursor': 'pointer', 'opacity': '.5'});
        circle2.node.onclick = function(){
    integrity.animate({opacity: 1}, 2000);
};
        return;
    }
        var pos1 = ring.getPointAtLength(counter);   //get the position (see Raphael docs)
        var pos2 = ring.getPointAtLength(counter*2);  
        var pos3 = ring.getPointAtLength(counter*3);  
        var pos4 = ring.getPointAtLength(counter*4); 
        var pos5 = ring.getPointAtLength(counter*5);  
        circle1.attr({cx: pos1.x, cy: pos1.y, "cursor": "pointer"});  
        circle2.attr({cx: pos2.x, cy: pos2.y, "cursor": "pointer"}); 
        circle3.attr({cx: pos3.x, cy: pos3.y, "cursor": "pointer"});
        circle4.attr({cx: pos4.x, cy: pos4.y, "cursor": "pointer"});
        circle5.attr({cx: pos5.x, cy: pos5.y, "cursor": "pointer"});
        counter++;
 }
