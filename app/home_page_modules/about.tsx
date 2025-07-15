import Resume from "/documents/WebResume.pdf";

export function About() {
    return (
        <div id="projects">
            <h2>About Me</h2>
            <p>
                Hey there, welcome to my site! I'm Henry, a recent graduate of
                Bard College with a degree in Computer Science and Politics.
                Currently residing in Philadelphia, I work on software projects
                related to programming languages and desktop, developer tools.
                Along with what I do in my free time, I am also looking for
                work, ideally, either in backend software or game development.
                If you have an opportunity, or know of one, feel free to check
                out my{" "}
                <a
                    href={Resume}
                    hrefLang="en"
                    target="_blank"
                    rel="noreferrer noopener"
                    type="application/pdf"
                >
                    résumé
                </a>
                , as well as the rest of my site.
            </p>
            <p>
                The ideal way of getting in contact is by email:{" "}
                <b>henrywandover[at]gmail[dot]com</b>. I don't really have much
                in the way of social media aside from{" "}
                <a
                    aria-label="Social media link"
                    href="https://www.linkedin.com/in/henrywandover/"
                    target="_blank"
                    rel="noreferrer noopener"
                    title="LinkedIn"
                >
                    LinkedIn
                </a>
                . There are more programming-related things on{" "}
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
                . For more artistic endeavours refer to my{" "}
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

            <h2>Quick Links</h2>

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
                <li>
                    I was out on a walk and got{" "}
                    <a
                        aria-label="News article"
                        href="https://www.audacy.com/kywnewsradio/news/local/philly-union-members-join-nationwide-protest-against-ice"
                        target="_blank"
                        rel="noreferrer noopener"
                        title="New article where I was quoted"
                    >
                        interviewed
                    </a>{" "}
                    (check the end of the article)
                </li>
            </ul>
        </div>
    );
}
