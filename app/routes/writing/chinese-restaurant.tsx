import Back from "../../mods/back";
import type { Route } from "../writing/+types/chinese-restaurant";

export function meta({}: Route.MetaArgs) {
    return [
        { title: "Chinese Restaurant | Henry Wandover" },
        {
            name: "description",
            content:
                "A personal site made by Henry Wandover, for Henry Wandover",
        },
        { name: "keywords", content: "Computer Science, Writing, Blog" },
        { name: "author", content: "Henry Wandover" },
    ];
}

export default function ChineseRestuarant() {
    return (
        <div className="content">
            <Back />

            <div className="centered">
                <h2>Chinese Restaurant</h2>
                <br />
                <p>
                    Tears in a Chinese restaurant,
                    <br />
                    Sodium droplets mixing with MSG.
                    <br />
                    The chemical reaction in her head, is
                    <br />
                    Much more interesting than
                    <br />
                    The watercolor appearing on her plate.
                    <br />
                    What man? Or woman?
                    <br />
                    What cliche?
                    <br />
                    While dull, still
                    <br />
                    Can cut and mange the foolhardy.
                </p>
            </div>
        </div>
    );
}
