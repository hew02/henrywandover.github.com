import React  from "react";
import Back from "../../mods/back";
import type { Route } from "../writing/+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Writing | Henry Wandover" },
    { name: "description", content: "A personal site made by Henry Wandover, for Henry Wandover" },
    { name: "keywords", content: "Computer Science, Writing, Blog" },
    { name: "author", content: "Henry Wandover" },
  ];
}

export default function Writing() {
  return (
    <div>
        <Back />
        <p>Writing</p>
    </div>
  );
}