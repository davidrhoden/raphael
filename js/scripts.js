var paper = Raphael(10, 10, 600, 600);
var ring = paper.circle(200, 200, 150);
ring.attr({stroke:"#000", "stroke-width":5, "stroke-dasharray": "-"});
var circle1 = paper.circle(200, 48, 16);
circle1.attr({"fill":"#ffc103", "stroke":"#ffc103"}); 
var circle2 = paper.circle(200, 48, 16);
circle2.attr({"fill":"#ffc103", "stroke":"#ffc103"}); 
var circle3 = paper.circle(200, 48, 16);
circle3.attr({"fill":"#ffc103", "stroke":"#ffc103"}); 
var circle4 = paper.circle(200, 48, 16);
circle4.attr({"fill":"#ffc103", "stroke":"#ffc103"}); 
var circle5 = paper.circle(200, 48, 16);
circle5.attr({"fill":"#ffc103", "stroke":"#ffc103"});
var animation = '';

window.onload = function() {
    animation = window.setInterval(animateCircles, 10);  
};


var counter = 0; 
function animateCircles(){
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

    if((ring.getTotalLength()/5) <= counter){ 
        clearInterval(animation);
        var innovation = paper.text(200, 80, "Innovation").attr({'text-anchor': 'start',  'cursor': 'pointer', 'opacity': '0', 'font-weight': 'bold', 'font-size': '12'});
        var innovationQ = paper.text(200, 105, "Progress\nTransformation\nInspiration").attr({'text-anchor': 'start',  'cursor': 'pointer', 'opacity': '0', 'font-size': '12'});
        var collaboration = paper.text(360, 180, "Collaboration").attr({'text-anchor': 'start', 'cursor': 'pointer', 'opacity': '0', 'font-weight': 'bold', 'font-size': '12'});
        var collaborationQ = paper.text(360, 205, "Teamwork\nCooperation\nSharing").attr({'text-anchor': 'start', 'cursor': 'pointer', 'opacity': '0', 'font-size': '12'});
        var integrity = paper.text(300, 345, "Integrity").attr({'text-anchor': 'start', 'cursor': 'pointer', 'opacity': '0', 'font-weight': 'bold', 'font-size': '12'});
        var integrityQ = paper.text(300, 370, "Ethics\nOpenness\nResponsibilty").attr({'text-anchor': 'start', 'cursor': 'pointer', 'opacity': '0', 'font-size': '12'});
        var respect = paper.text(120, 360, "Respect").attr({'text-anchor': 'start', 'cursor': 'pointer', 'opacity': '0', 'font-weight': 'bold', 'font-size': '12'});
        var respectQ = paper.text(120, 385, "Caring\nProtection\nSafety").attr({'text-anchor': 'start', 'cursor': 'pointer', 'opacity': '0', 'font-size': '12'});
        var excellence = paper.text(75, 180, "Excellence").attr({'text-anchor': 'start', 'cursor': 'pointer', 'opacity': '0', 'font-weight': 'bold', 'font-size': '12'});
        var excellenceQ = paper.text(75, 205, "Efficiency\nResults\nReliability").attr({'text-anchor': 'start', 'cursor': 'pointer', 'opacity': '0', 'font-size': '12'});



innovation.animate({ 'opacity': '.7' }, 500, function() {
            innovationQ.animate({ 'opacity': '.5' }, 500, function() {
                collaboration.animate({  'opacity': '.7'}, 500, function() {
                    collaborationQ.animate({ 'opacity': '.5' }, 500, function() {
                        integrity.animate({  'opacity': '.7'}, 500, function() {
                            integrityQ.animate({ 'opacity': '.5' }, 500, function() {
                                respect.animate({ 'opacity': '.7' }, 500, function() {
                                    respectQ.animate({ 'opacity': '.5' }, 500, function() {
                                        excellence.animate({  'opacity': '.7' }, 500, function() {
                                            excellenceQ.animate({ 'opacity': '.5' }, 500);
                                        });
                                    });
                                }); 
                            });
                        });
                    });
                });
            });
        });
    }
    return;
}
       
       

