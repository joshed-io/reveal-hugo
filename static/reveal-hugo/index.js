// pattern inspired by https://github.com/RealOrangeOne/hugo-theme-revealjs
var revealParams = JSON.parse(document.getElementById('reveal-hugo-params').innerHTML);
var revealDefaults = JSON.parse(document.getElementById('reveal-hugo-defaults').innerHTML);

// More info https://github.com/hakimel/reveal.js#configuration
Reveal.initialize(Object.assign(revealDefaults, revealParams, revealDependencies));
