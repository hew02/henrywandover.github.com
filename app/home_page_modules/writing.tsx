import how_to_create_surveillance_state from
'/documents/How_to_Create_a_Surveillance_State__And_How_Librarians_Attempted_to_Dismantle_It.pdf';
import journey_to_the_ivory_tower from
'/sproj_files/Journey_to_the_Ivory_Tower__Making_Links__Polymorphism_Ad_Hoc.pdf';

export function Writing() {
    return (
        <div id="writing">
            <h2>Writing</h2>

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
