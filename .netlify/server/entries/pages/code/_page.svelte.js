import { Q as head } from "../../../chunks/index.js";
function _page($$payload) {
  head($$payload, ($$payload2) => {
    $$payload2.title = `<title>Programming Projects | Henry Wandover</title>`;
    $$payload2.out += `<meta name="title" content="Henry Wandover's Programs"> <meta name="description" content="A personal site made by Henry Wandover, for Henry Wandover"> <meta name="keywords" content="Computer Science, Writing, Blog"> <meta name="author" content="Henry Wandover">`;
  });
  $$payload.out += `<h1>Projects Highlight</h1> <h3 style="padding-bottom: 3%;">I have been working on a few projects, while an undergraduate at Bard...</h3> <ol class="bullet"><li><p>Mainly for my personal usage, <a href="https://yung-turabian.github.io/xtralib/" target="_blank" rel="noreferrer noopener" title="View Doxygen pages for my lib">xtralib</a>, is a extension for C/C++ programming. The link takes you to its Doxygen pages.</p></li> <li><p>Starting in a programming languages class, <a href="https://github.com/yung-turabian/hasktan/" target="_blank" rel="noreferrer noopener" title="Git repository">hasktan</a>, was the culmination of that class's work. However, I still tinker with it.</p></li> <li><p><a href="https://yung-turabian.itch.io/turbulenttrader" target="_blank" rel="noreferrer noopener" title="Game">Turbulent Trader</a> is a game orginating from a game jam, one of my first game projects that is playable!</p></li></ol>`;
}
export {
  _page as default
};
