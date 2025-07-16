import Presentation from "/documents/hasqtan_letrec.pdf";
import type { Route } from "./+types/hasqtan";
import Back from "../mods/back";

export function meta({}: Route.MetaArgs) {
    return [
        { title: "The Hasqtan Language" },
        {
            name: "description",
            content: "A refernce for the Hasqtan language.r",
        },
        { name: "keywords", content: "Programming Languages" },
        { name: "author", content: "Henry Wandover" },
    ];
}

export default function Links() {
    return (
        <div className="content">
			<Back />
            <h2>Hasqtan</h2>

            <p>
                A very basic page for the toy language I started hacking on at
                Bard. Lazy and functional just like Haskell.
            </p>

            <h3>Related</h3>
            <br />

            <ul>
                <li>
                    <a
                        href="https://github.com/yung-turabian/hasqtan/"
                        target="_blank"
                        rel="noreferrer noopener"
                        title="Git repository"
                    >
                        Git repository for Hasqtan
                    </a>
                </li>

                <li>
                    <p>
                        {" "}
                        A{" "}
                        <a
                            href={Presentation}
                            hrefLang="en"
                            target="_blank"
                            rel="noreferrer noopener"
                            type="application/pdf"
                        >
                            presentation
                        </a>{" "}
                        on the implementation of Hasqtan's recursive let
                    </p>
                </li>
            </ul>
        </div>
    );
}
