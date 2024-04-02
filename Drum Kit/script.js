let a = new Audio("clap.wav");
let s = new Audio("hihat.wav");
let d = new Audio("kick.wav");
let f = new Audio("openhat.wav");
let g = new Audio("boom.wav");
let h = new Audio("ride.wav");
let j = new Audio("tink.wav");
let k = new Audio("tom.wav");

document.querySelector(".key-a").addEventListener
(   "click" , () => { a.currentTime = 0; a.play(); }   )
document.querySelector(".key-s").addEventListener
(   "click" , () => { s.play(); }   )
document.querySelector(".key-d").addEventListener
(   "click" , () => { d.play(); }   )
document.querySelector(".key-f").addEventListener
(   "click" , () => { f.play(); }   )
document.querySelector(".key-g").addEventListener
(   "click" , () => { g.play(); }   )
document.querySelector(".key-h").addEventListener
(   "click" , () => { h.play(); }   )
document.querySelector(".key-j").addEventListener
(   "click" , () => { j.play(); }   )
document.querySelector(".key-k").addEventListener
(   "click" , () => { k.play(); }   )