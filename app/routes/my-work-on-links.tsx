import journey_to_the_ivory_tower from "/sproj_files/Journey_to_the_Ivory_Tower__Making_Links__Polymorphism_Ad_Hoc.pdf";
import poster from "/sproj_files/JttIT-Poster.jpg";
import Back from "../mods/back";
import type { Route } from "./+types/my-work-on-links";

export function meta({}: Route.MetaArgs) {
    return [
        { title: "My Work on Links | Henry Wandover" },
        {
            name: "description",
            content: "A refernce for the Hasqtan language.r",
        },
        {
            name: "keywords",
            content:
                "Programming Languages, Computer Science, The Links Programming Language",
        },
        { name: "author", content: "Henry Wandover" },
    ];
}

export default function Links() {
    return (
        <div className="content">
            <Back />

            <h2>Senior Project (SPROJ) at Bard College</h2>

            <p>
                {" "}
                Check out my paper:{" "}
                <a
                    href={journey_to_the_ivory_tower}
                    target="_blank"
                    rel="noreferrer noopener"
                    title="Bard Senior Project"
                >
                    Journey to the Ivory Tower: Making Links' Polymorhpism Ad
                    Hoc
                </a>
                .
            </p>

            <p>
                For the sake of archiving my work, I have also attached the{" "}
                <a
                    href={poster}
                    target="_blank"
                    rel="noreferrer noopener"
                    title="Bard Senior Project Poster"
                >
                    poster
                </a>{" "}
                I put together for the final presentation. It's too large to
                properly view on this page.
            </p>
            <p>
                I do plan to finish my subkind classes and perhaps work on an
                additional, shorter, paper detailing more in depth the theory
                and their place in the functional world. When I have time I
				will update this page with more information on subkind classes
				or further work I commit towards the Links project.
            </p>
        </div>
    );
}
