

// import loader from './loader';

// function main() {
//
//     return (
//     <React.Suspense fallback={<loader/>}>
//     </React.Suspense>
//     )
// }
//
// export default main

// setTimeout(() => {loader()}, 3000)

крутящиеся буквы

<div className="page-preloader">
    <div className="preloader">
        <b>S</b><b>I</b><b>B</b><b>T</b><b>R</b><b>A</b><b>N</b><b>S</b><b>S</b><b>E</b><b>R</b><b>V</b><b>I</b><b>S</b>
    </div>
</div>

* {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
}
/*body {*/
/*    font-size: 14px;*/
/*    line-height: 28px;*/
/*    font-family: 'Open Sans', sans-serif;*/
/*    -webkit-font-smoothing: antialiased;*/
/*    -moz-osx-font-smoothing: grayscale;*/
/*}*/
.page-preloader {
    background: -webkit-linear-gradient(to bottom right, #50a3a2 0%, #53e3a6 100%);
    background-image: linear-gradient(to bottom right, #50a3a2 0%, #53e3a6 100%);
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    align-content: center;
    justify-content: center;
    overflow: auto;
}

.preloader {
    width: 100%;
    text-align: center;
}
.preloader>b {
    display: inline-block;
    font-size: 30px;
    line-height: 15;
    -webkit-animation: flip 3s ease-out infinite;
    animation: flip 3s ease-out infinite;
    /* text-shadow: 4px 4px 8px rgba(0, 0, 0, 0.45); */
    text-shadow: 4px 4px 8px red;
}

.preloader>b:first-of-type {
    -webkit-animation-delay: 0s;
    animation-delay: 0s
}

.preloader>b:nth-of-type(2) {
    -webkit-animation-delay: .1s;
    animation-delay: .1s
}

.preloader>b:nth-of-type(3) {
    -webkit-animation-delay: .2s;
    animation-delay: .2s
}

.preloader>b:nth-of-type(4) {
    -webkit-animation-delay: .3s;
    animation-delay: .2s
}

.preloader>b:nth-of-type(5) {
    -webkit-animation-delay: .4s;
    animation-delay: .4s
}

.loader>b:nth-of-type(6) {
    -webkit-animation-delay: .5s;
    animation-delay: .5s
}

.preloader>b:last-of-type {
    -webkit-animation-delay: .6s;
    animation-delay: .6s
}
@keyframes flip {
    0% {
        color: black;
        font-weight: 400;
    letter-spacing: -.1em
}

    30%,70% {
        color: black;
        font-weight: 400
}

    35%,65% {
        color: black;
        /* color: #444; */
        font-weight: 700;
    -webkit-transform: rotateY(0);
    -moz-transform: rotateY(0);
    -ms-transform: rotateY(0);
    transform: rotateY(0)
}

    40% {
        color: red
        /* color: #f75353 */
    }

    45% {
        color: red
        /* color: #51d466 */
    }

    50% {
        color: black;
        /* color: #fcd419; */
        font-weight: 700;
    letter-spacing: .3em;
    -webkit-transform: rotateY(360deg);
    -moz-transform: rotateY(360deg);
    -ms-transform: rotateY(360deg);
    transform: rotateY(360deg)
}

    55% {
        color: black
        /* color: #cb79e6 */
    }

    60% {
        color: black
        /* color: #609cec */
    }

    100% {
        color: black;
        /* color: #444; */
        letter-spacing: -.1em;
    font-weight: 400
}
}


крутящиеся слова по орбите
<div className="preloader">
<div className="preloader__ring">
<div className="preloader__sector">Т</div>
<div className="preloader__sector">е</div>
<div className="preloader__sector">л</div>
<div className="preloader__sector">е</div>
<div className="preloader__sector">ф</div>
<div className="preloader__sector">о</div>
<div className="preloader__sector">н</div>
<div className="preloader__sector">н</div>
<div className="preloader__sector">ы</div>
<div className="preloader__sector">й</div>
<div className="preloader__sector"></div>
<div className="preloader__sector">с</div>
<div className="preloader__sector">п</div>
<div className="preloader__sector">р</div>
<div className="preloader__sector">а</div>
<div className="preloader__sector">в</div>
<div className="preloader__sector">о</div>
<div className="preloader__sector">ч</div>
<div className="preloader__sector">н</div>
<div className="preloader__sector">и</div>
<div className="preloader__sector">к</div>
</div>
<div className="preloader__ring">
<div className="preloader__sector">С</div>
<div className="preloader__sector">И</div>
<div className="preloader__sector">Б</div>
<div className="preloader__sector" STYLE="color: red">Т</div>
<div className="preloader__sector" style="color: red">Р</div>
<div className="preloader__sector" style="color: red">А</div>
<div className="preloader__sector" style="color: red">Н</div>
<div className="preloader__sector" style="color: red">С</div>
<div className="preloader__sector">С</div>
<div className="preloader__sector">Е</div>
<div className="preloader__sector">Р</div>
<div className="preloader__sector">В</div>
<div className="preloader__sector">И</div>
<div className="preloader__sector">С</div>
</div>
</div>



* {
border: 0;
box-sizing: border-box;
margin: 0;
padding: 0;
}

:root {
font-size: calc(16px + (24 - 16)*(100vw - 320px)/ (1280 - 320));
}

body, .preloader {
display: flex;
}

body {
background: white;
color: black;
font: 1em Dosis, sans-serif;
height: 100vh;
line-height: 1.5;
perspective: 40em;
}

.preloader {
animation: tiltSpin 10s linear infinite;
flex-direction: column;
justify-content: center;
align-items: center;
margin: auto;
width: 17em;
height: 17em;
}
.preloader, .preloader__ring {
transform-style: preserve-3d;
}
.preloader__ring {
animation-name: spin;
animation-duration: 6s;
animation-timing-function: inherit;
animation-iteration-count: inherit;
font-size: 2em;
position: relative;
height: 3rem;
width: 1.5rem;
}
.preloader__ring:nth-child(even) {
animation-direction: reverse;
}
.preloader__sector {
font-weight: 600;
position: absolute;
top: 0;
left: 0;
text-align: center;
text-transform: uppercase;
transform: translateZ(7rem);
}
.preloader__sector, .preloader__sector:empty:before {
display: inline-block;
width: 100%;
height: 100%;
}
.preloader__sector:empty:before {
background: linear-gradient(transparent 45%, currentColor 45% 55%, transparent 55%);
content: "";
}
.preloader__sector:nth-child(2) {
transform: rotateY(12deg) translateZ(7rem);
}
.preloader__sector:nth-child(3) {
transform: rotateY(24deg) translateZ(7rem);
}
.preloader__sector:nth-child(4) {
transform: rotateY(36deg) translateZ(7rem);
}
.preloader__sector:nth-child(5) {
transform: rotateY(48deg) translateZ(7rem);
}
.preloader__sector:nth-child(6) {
transform: rotateY(60deg) translateZ(7rem);
}
.preloader__sector:nth-child(7) {
transform: rotateY(72deg) translateZ(7rem);
}
.preloader__sector:nth-child(8) {
transform: rotateY(84deg) translateZ(7rem);
}
.preloader__sector:nth-child(9) {
transform: rotateY(96deg) translateZ(7rem);
}
.preloader__sector:nth-child(10) {
transform: rotateY(108deg) translateZ(7rem);
}
.preloader__sector:nth-child(11) {
transform: rotateY(120deg) translateZ(7rem);
}
.preloader__sector:nth-child(12) {
transform: rotateY(132deg) translateZ(7rem);
}
.preloader__sector:nth-child(13) {
transform: rotateY(144deg) translateZ(7rem);
}
.preloader__sector:nth-child(14) {
transform: rotateY(156deg) translateZ(7rem);
}
.preloader__sector:nth-child(15) {
transform: rotateY(168deg) translateZ(7rem);
}
.preloader__sector:nth-child(16) {
transform: rotateY(180deg) translateZ(7rem);
}
.preloader__sector:nth-child(17) {
transform: rotateY(192deg) translateZ(7rem);
}
.preloader__sector:nth-child(18) {
transform: rotateY(204deg) translateZ(7rem);
}
.preloader__sector:nth-child(19) {
transform: rotateY(216deg) translateZ(7rem);
}
.preloader__sector:nth-child(20) {
transform: rotateY(228deg) translateZ(7rem);
}
.preloader__sector:nth-child(21) {
transform: rotateY(240deg) translateZ(7rem);
}
.preloader__sector:nth-child(22) {
transform: rotateY(252deg) translateZ(7rem);
}
.preloader__sector:nth-child(23) {
transform: rotateY(264deg) translateZ(7rem);
}
.preloader__sector:nth-child(24) {
transform: rotateY(276deg) translateZ(7rem);
}
.preloader__sector:nth-child(25) {
transform: rotateY(288deg) translateZ(7rem);
}
.preloader__sector:nth-child(26) {
transform: rotateY(300deg) translateZ(7rem);
}
.preloader__sector:nth-child(27) {
transform: rotateY(312deg) translateZ(7rem);
}
.preloader__sector:nth-child(28) {
transform: rotateY(324deg) translateZ(7rem);
}
.preloader__sector:nth-child(29) {
transform: rotateY(336deg) translateZ(7rem);
}
.preloader__sector:nth-child(30) {
transform: rotateY(348deg) translateZ(7rem);
}

/* Animations */
@keyframes tiltSpin {
from {
transform: rotateY(0) rotateX(30deg);
}
to {
transform: rotateY(1turn) rotateX(30deg);
}
}
@keyframes spin {
from {
transform: rotateY(0);
}
to {
transform: rotateY(1turn);
}
}

//лоадер дым
<div className="smoke">
<ul>
<li>С</li>
<li>И</li>
<li>Б</li>
<li>Т</li>
<li>Р</li>
<li>А</li>
<li>Н</li>
<li>С</li>
<li>С</li>
<li>Е</li>
<li>Р</li>
<li>В</li>
<li>И</li>
<li>С</li>
</ul>
</div>

body {
margin: 0;
padding: 0;
font-family: Verdana, Geneva, sans-serif;
background: url(http://images.vfl.ru/ii/1513151627/86f4810d/19788129.jpg
) no-repeat center top / cover;
height: 100vh;
}
.smoke {
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
}
.smoke ul {
margin: 0;
padding: 0;
display: flex;
}
.smoke ul li {
list-style: none;
color: #fff;
font-size: 6em;
font-weight: bold;
letter-spacing: 10px;
}
.smoke ul:hover li {
animation: animate 2s linear forwards;
}

@keyframes animate {
0% {
transform: rotate(0deg) translateY(0px);
opacity 1;
filter: blur(1px);
}
100% {
transform: rotate(45deg) translateY(-200px);
opacity: 0;
filter: blur(20px);
}
}

.smoke ul li:nth-child(1) {
animation-delay: 0s;
}
.smoke ul li:nth-child(2) {
animation-delay: .4s;
}
.smoke ul li:nth-child(3) {
animation-delay: .8s;
}
.smoke ul li:nth-child(4) {
animation-delay: 1.2s;
}
.smoke ul li:nth-child(5) {
animation-delay: 1.6s;
}
