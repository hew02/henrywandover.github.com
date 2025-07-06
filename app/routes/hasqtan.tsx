import type { Route } from "./+types/hasqtan";

export function meta({}: Route.MetaArgs) {
  return [
	{ title: "The Hasqtan Language" },
	{ name: "description", content: "A refernce for the Hasqtan language.r" },
	{ name: "keywords", content: "Programming Languages" },
	{ name: "author", content: "Henry Wandover" },
  ];
}

export default function Links() {
  return (
	<div className="content">
			<h2>Hasqtan</h2>
			<h3>About</h3>
	</div>
  );
}