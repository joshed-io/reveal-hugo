// pattern inspired by https://github.com/RealOrangeOne/hugo-theme-revealjs
var revealHugoPageParams = JSON.parse(document.getElementById('reveal-hugo-page-params').innerHTML);
var revealHugoSiteParams = JSON.parse(document.getElementById('reveal-hugo-site-params').innerHTML);
var revealHugoDefaults = JSON.parse(document.getElementById('reveal-hugo-defaults').innerHTML);

// See all options - https://github.com/hakimel/reveal.js#configuration
Reveal.initialize(Object.assign(
  revealHugoDefaults,
  revealHugoSiteParams,
  revealHugoPageParams,
  revealHugoDependencies));
