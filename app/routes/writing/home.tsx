import React, { useState, useEffect } from 'react';
import Back from "../../mods/back";
import type { Route } from "../writing/+types/home";

import how_to_create_surveillance_state from
'/documents/How_to_Create_a_Surveillance_State__And_How_Librarians_Attempted_to_Dismantle_It.pdf';
import journey_to_the_ivory_tower from
'/sproj_files/Journey_to_the_Ivory_Tower__Making_Links__Polymorphism_Ad_Hoc.pdf';

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Writing | Henry Wandover" },
    { name: "description", content: "A personal site made by Henry Wandover, for Henry Wandover" },
    { name: "keywords", content: "Computer Science, Writing, Blog" },
    { name: "author", content: "Henry Wandover" },
  ];
}


export default function Writing() {
		const bday = new Date('2002-10-28T16:00:00Z');
    const [yearsSince, setYearsSince] = useState(0);

  useEffect(() => {
    const calculateYearsSince = () => {
				setYearsSince( (new Date() - bday) / (1000 * 60 * 60 * 24 * 365.25) );
    };
    calculateYearsSince();
    const interval = setInterval(calculateYearsSince, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="content">
            <h2>Writing</h2>

						<p>Cataloging what is the <em>most</em> decent of my writing over the past {yearsSince.toString().substring(0, 2)}<small>{yearsSince.toString().substring(2, 12)}</small> years.</p>

            <ol className="none">
                <li>
                    <a
                        href={journey_to_the_ivory_tower}
                        target="_blank"
                        rel="noreferrer noopener"
                        title="Bard Senior Project"
                    >
                        Journey to the Ivory Tower: Making Links' Polymorhpism
                        Ad Hoc
                    </a>
                    <br />
                    <small>Spring '25</small>
                </li>

                <li>
                    <a
                        href="./writing/chinese-restaurant"
                        rel="noreferrer noopener"
                        title="Poem"
                    >
                        Chinese Restaurant
                    </a>
                    <br />
                    <small>Spring '25</small>
                </li>
                <li>
                    <a
                        href="./writing/some-poems"
                        rel="noreferrer noopener"
                        title="Poem"
                        dir="rtl"
                        data-sveltekit-preload-data
                    >
                        כמה שירים (Some Poems)
                    </a>
                    <br />
                    <small>Winter '24</small>
                </li>
                <li>
                    <a
                        href="./writing/the-final-fumes-of-the-rutgers-teachers-strike"
                        rel="noreferrer noopener"
                        title="Article"
                    >
                        The Final Fumes of the Rutgers Teachers Strike
                    </a>
                    <br />
                    <small>Spring '23</small>
                </li>

                <li>
                    <a
                        href={how_to_create_surveillance_state}
                        target="_blank"
                        rel="noreferrer noopener"
                        title="PDF attachment"
                    >
                        On Creating a Surveillance State
                    </a>
                    <br />
                    <small>Fall '23</small>
                </li>
            </ol>
    </div>
  );
}
