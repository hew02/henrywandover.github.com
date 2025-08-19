import type { Route } from "./+types/home";
import { About } from "../home_page_modules/about";
import { Projects } from "../home_page_modules/projects";
import { Writing } from "../home_page_modules/writing";

import Resume from "/documents/WebResume.pdf";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Henry Wandover" },
    {
      name: "description",
      content: "A personal site made by Henry Wandover, for Henry Wandover",
    },
    { name: "keywords", content: "Computer Science, Writing, Blog" },
    { name: "author", content: "Henry Wandover" },
  ];
}

export default function Home() {
  return (
    <div className="content">
      <h1>The Home Page of Henry Wandover</h1>

      <br />

      <div className="home-description">
        <div>
          <p>
            Hey there, welcome to my site. I'm Henry, a recent graduate of Bard
            College with a degree in computer science and politics. I currently
            reside in Philadelphia. My interests in computing are programming
            languages and desktop, developer tools. Along with software, I also
            enjoy writing and video editing. I'm currently job hunting, if you
            stumble across this page and are hiring please check out my{" "}
            <a
              href={Resume}
              hrefLang="en"
              target="_blank"
              rel="noreferrer noopener"
              type="application/pdf"
            >
              résumé
            </a>
            .
          </p>
          <p>
            You can reach me at <img src="/myemail.png" height="24px" />. In
            addtion to what can be found on this site, my software projects are
            additionally hosted on{" "}
            <a
              aria-label="External GitHub link"
              href="https://github.com/hew02"
              target="_blank"
              rel="noreferrer noopener"
              title="GitHub"
            >
              GitHub
            </a>{" "}
            and{" "}
            <a
              aria-label="External Codeberg link"
              href="https://codeberg.org/yung-turabian"
              target="_blank"
              rel="noreferrer noopener"
              title="GitHub"
            >
              Codeberg
            </a>
            . I have produced/edited short documentaries and worked on other
            videos that are on my{" "}
            <a
              aria-label="Social media link"
              href="https://www.youtube.com/@yungturabian"
              target="_blank"
              rel="noreferrer noopener"
              title="YouTube"
            >
              YouTube
            </a>
            .
          </p>

          <h3>Quick links</h3>

          <ul>
            <li>
              My favorite{" "}
              <a href="/links" title="A page linking to external sites">
                sites
              </a>
            </li>
            <li>
              <a
                aria-label="Text file"
                href="/pgp.txt"
                target="_blank"
                rel="noreferrer noopener"
                title="PGP/GPG public key"
              >
                My PGP pubkey
              </a>
            </li>
          </ul>

          <br />

          <h2>Fun facts</h2>
          <ul>
            <li>
              Did some color correction, editing and audio mixing for my friend's{" "}
              <a
                aria-label="External YouTube link."
                href="https://www.youtube.com/watch?v=PkWONztyGvw"
                target="_blank"
                rel="noreferrer noopener"
                title="short retrocative trailer for my friend's Hamlet production."
              >
                video
              </a>
              {""}.
            </li>
            <li>
              I gave a small{" "}
              <a
                aria-label="External news article link"
                href="https://www.audacy.com/kywnewsradio/news/local/philly-union-members-join-nationwide-protest-against-ice"
                target="_blank"
                rel="noreferrer noopener"
                title="kywnewsradio article"
              >
                interview
              </a>{" "}
              during a Philly SEIU protest (hint: check the end of the article)
            </li>
          </ul>
        </div>

        <img src="/pfp.png" height="200px" width="200px" />
      </div>

      <hr />

      <h2>What I tinker on in my free time</h2>

      <ul>
        <li>
          <a href="https://github.com/yung-turabian/libreis/">libreis</a>
          <br />
          <small>
            A general-purpose C/C++ library;{" "}
            <a
              href="https://libreis.henrywandover.com/"
              title="View Doxygen pages for my lib"
            >
              docs here
            </a>
          </small>
        </li>
        <li>
          <a
            href="/hasqtan"
            target="_blank"
            rel="noreferrer noopener"
            title="Git repository"
          >
            Hasqtan
          </a>
          <br />
          <small>Toy functional language</small>
        </li>
        <li>
          <a
            href="https://yung-turabian.itch.io/turbulenttrader"
            target="_blank"
            rel="noreferrer noopener"
            title="Game"
          >
            Turbulent Trader
          </a>
          <br />
          <small>Game jam game about bargaining</small>
        </li>
        <li>
          <a href="/my-work-on-links" title="Links">
            Subkind Classes for Links
          </a>
          <br />
          <small>My senior project at Bard College</small>
        </li>
        <li>
          <a
            href="https://github.com/yung-turabian/porter"
            target="_blank"
            rel="noreferrer noopener"
            title="Daemon"
          >
            porter
          </a>
          <br />
          <small>A GNU daemon for an organized filesystem</small>
        </li>
        <li>
          <a
            href="https://github.com/PunchSoftware/cscript"
            target="_blank"
            rel="noreferrer noopener"
            title="Embedded C language"
          >
            cscript
          </a>
          <br />
          <small>Embedded, dynamic C-like language</small>
        </li>
      </ul>

      <br />

      <h2>Past Projects</h2>
      <ul>
        <li>
          <p>Designed and implemented a webapp portfolio for my friend.</p>
          <p>
            It can be viewed{" "}
            <a
              href="https://franciskaragodins.com"
              target="_blank"
              rel="noreferrer noopener"
              title="My friend's site that I designed"
            >
              here
            </a>
            .
          </p>
        </li>
      </ul>

      {/*<div className="responsive-container">
        <div className="left-column">
          <About />
        </div>
        <div className="right-column">
          <Projects />
          <br />
          <Writing />
          <h2>Blog Posts</h2>
              <ol>
                {#each data.posts as post}
                  <li class="post-item">
                    <a
                      href={`/blog/${post.slug}`}
                      target="_self"
                      rel="noreferrer noopener"
                      class="post-title"
                      title={post.title}
                      data-sveltekit-preload-data
                    >
                      {post.title}
                    </a>
                    <br />
                    <small>{post.date}</small>
                  </li>
                {/each}
              </ol>
        </div>
      </div>*/}
    </div>
  );
}
