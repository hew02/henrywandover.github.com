import Resume from "/documents/WebResume.pdf";

export function About() {
    return (
        <div id="projects">
            <h2>Who Am I?</h2>
            <p>
                Hey there, welcome to my site. I'm Henry, a recent graduate of
                Bard College with a degree in Computer Science and Politics. I
                currently reside in Philadelphia. My interests, in terms of
                programming, are the development of programming languages and
                desktop, developer tools. Along with software, I also enjoy
                writing and video editing. I'm currently job hunting, if you
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
                You can reach me at <b>henrywandover[at]gmail[dot]com</b>. In
                addtion to this site, more programming-related things can be
                found on my{" "}
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

            <h3>Quick Links</h3>

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

            <h2>Fun Facts</h2>
            <ul>
                <li>
                    Did some color correction/editing/audio mixing for my
                    friend's{" "}
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
                    during a Philly SEIU protest (hint: check the end of the
                    article)
                </li>
            </ul>
        </div>
    );
}
