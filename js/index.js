var x = ["<p>“Be yourself; everyone else is already taken.”</p>",
    "<p>“So many books, so little time.”</p>",
    "<p>“A room without books is like a body without a soul.”</p>",
    "<p>“You only live once, but if you do it right, once is enough.”</p>",
    "<p>“Be the change that you wish to see in the world.”</p>",
    "<p>“If you tell the truth, you don't have to remember anything.”</p>"
];
var y;
var w;
function display() {
    y = Math.floor(Math.random() * 6);
    while (w == y) {
        y = Math.floor(Math.random() * 6);
    }
    w = y;
    document.getElementById("data").innerHTML = x[y];
}