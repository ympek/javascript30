# javascript30
Vanilla JavaScript challenge by [@wesbos](https://github.com/wesbos) 

## disclaimer

So [@wesbos](https://github.com/wesbos) created this little [vanilla javascript challenge](https://github.com/wesbos/JavaScript30) so that you write vanilla js every day... whatevs I picked it up cuz it sounds kinda cool so here will be my progress.

# 01 JavaScript Drum Kit
> started & completed: 9/12/2016
> last updated: 9/12/2016

DEMO ONLINE [01 JavaScript Drum Kit](http://ympek.net/js30/01_drumkit/)

Very cool challenge. I started out myself, but consulted few steps with the video.

##### things I learned:

- a little bit of html Media Element API (audio.currentTime)
- kbd tag ;o
- some es6 stuff (backticks - string templates, const/let, arrow functions)

##### differences from original solution
- my buttons are significally uglier
- I ADDED COWBELL!!!!!!!!!!

# 02 JS + CSS Clock
> started & completed: 10/12/2016
> last updated: 10/12/2016

DEMO ONLINE [02 JS + CSS Clock](http://ympek.net/js30/02_clock/)

That was pretty straightforward.

##### things I learned:

- developer tools have cubic-bezier timing function editor - I didn't knew that, VERY cool!

##### differences from original solution
- fixed weird seconds hand transition when starting new cycle

# 03 Playing with CSS Variables and JS
> started & completed: 11/12/2016
> last updated: 11/12/2016

DEMO ONLINE [03 JS + Playing with CSS Variables and JS](http://ympek.net/js30/03_cssvars/)

I already noticed that clearly wesbos does not give a fuck about M$ browsers and he pursues fairly modern web development practices. I stopped to wonder for a while if that's good or a bad thing but eventually I decided to stick with it as it is something I haven't experienced in my day job where I was to care about even poor IE11... so yeah let's learn all this shiny new stuff. This particular excercise got me checking [caniuse](http://caniuse.com) all the time.

##### things I learned:

- CSS variables have fairly good support in modern browsers; unfortunately not in Edge (14)
- CSS variables are updateable from JS
- CSS filters also have already pretty great support. Same goes for color input. Range input is supported even in IE11, I didn't know that.
- NodeList has the forEach method for awhile now, very cool (in modern browsers... I checked Edge and unfortunately there is no support)
- this.dataset ;o
- CSS variables are scoped like normal css properties

##### differences from original solution

- even though the code doesn't differ, the color input in my browser (ff) was not firing mousemove event, so color change in my case was not smooth. I see Safari handles it differently, but I won't investigate it further for now.

# 04 Array Cardio Day
> started & completed: 24/12/2016
> last updated: 24/12/2016

So it's basically a lesson about iterators like map, reduce, filter etc. Cool to see them in action. 

##### things I learned:
- I finally got reduce

##### differences from original solution
- none