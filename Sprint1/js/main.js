@import url('https://fonts.googleapis.com/css2?family=Dosis:wght@200;300;400;500;600;700;800&display=swap');
*,
*:after,
*:before{
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}
:active,
:hover,
:focus{
    outline: 0 !important;
    outline-offset: 0;
}
a,
a:hover{
    text-decoration: none;
}
a:hover {
    color: var(--primary-color) !important;
}
ul,
ol{
    margin: 0;
    padding: 0;
}
/*====Variable Define===*/
:root {
    --primary-color: #ff553e;
    --secondary-color: #333;
    --white-color: #fff;
    --black-color: #000;
}
html{
    scroll-behavior: smooth;

}
body {
    font-size: 100%;
    font-weight: 400;
    font-family: 'Dosis', sans-serif;
}

/*
==========================
     Custom Scrollbar
==========================
*/

::-webkit-scrollbar {
    width: 0.3125rem;
}
::-webkit-scrollbar-track {
    background: var(--white-color);
}
::-webkit-scrollbar-thumb {
    background: var(--primary-color);
}

/*
===================
Custom CSS design
===================
*/
h1 {
    font-size: 3rem;
    font-weight: 400;
    margin-bottom: 1rem;
    text-transform: uppercase;
    color: var(--white-color);
}

h2 {
    font-weight: 600;
    font-size: 1.5625rem;
    text-transform: capitalize;
    color: var(--white-color);
    line-height: 2.5rem;
    
}
h4 {
    color: var(--white-color);
    text-transform: capitalize;
    font-size: 1.125rem;
    font-weight: 400;
    margin-bottom: 0.9375rem;
    transition: all .3s linear;
}

h5{
    color: var(--white-color);
    text-transform: capitalize;
    font-size: 0.875rem;
    font-weight: 400;
    margin-bottom: 10px;
}
p {
    font-size: 1rem;
    color: var(--white-color);
    font-weight: 400;
    line-height: 40px;
    letter-spacing: 0.0625rem;
    opacity: 0.8;
}
.main-btn {
    height: 40px;
    line-height: 40px;
    font-size: 1.125rem;
    display: inline-block;
    color: var(--white-color);
    font-weight: 700;
    text-transform: uppercase;
    padding: 0 30px;
    position: relative;
}

.main-btn::after,
.main-btn::before {
    position: absolute;
    top: 50%;
    background-color: rgba(255, 255, 255, .3);
    left: 0;
    width: 100%;
    height: 1px;
    content: "";
    transition: all .5s ease-out 0s;
    -webkit-transition: all .5s ease-out 0s;
    transform: translateY(-20px);
    -webkit-transform: translateY(-20px);
}
.main-btn::after {
    transform: translateY(20px);
    -webkit-transform: translateY(20px);
}

.main-btn::before{
    transform: rotate(20deg);
    -webkit-transform: rotate(20deg);
    background-color: var(--primary-color);
}

.main-btn:hover::after {
    transform: rotate(-20deg);
    -webkit-transform: rotate(-20deg);
    background-color: var(--primary-color);

}

.main-btn:hover {
    color: var(--primary-color) !important;
}

.wrapper {
    padding-top: 4rem;
    padding-bottom: 4rem;
    background-color: var(--secondary-color);

}
.text-content {
    width: 60%;
    margin: auto;
}
/*
=========================
Header Design
=========================
*/
.top-header {
    background-color: var(--secondary-color);
}
.top-header span{
    font-size: 0.875rem;
    color: var(--white-color);
    letter-spacing: 0.1062rem;
}

.navigation-wrap {
    position: fixed;
    width: 100%;
    left: 0;
    z-index: 1000;
    -webkit-transition:  all 0.3s ease-out;
    transition: all 0.3s ease-out;
}

.navigation-wrap .nav-item {
    padding: 0 0.5rem;
    transition: all 200ms linear;
}

/* Change navbar styling on scroll*/




/*
=============================
  top-banner design
=============================