import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "react-router";

import React from "react";
import { Canvas, useFrame } from "@react-three/fiber";

import type { Route } from "./+types/root";
import "./app.css";

export const links: Route.LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&display=swap",
  },
  {
    rel: "stylesheet",
    href: "https://db.onlinewebfonts.com/c/faf8d8ddb2bbec6d255985bf1e77a815?family=Sina+Nova+W01+Regular",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Noto+Sans+Hebrew:wght@100..900&display=swap",
  },
];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="apple-touch-icon"
          sizes="57x57"
          href="/favicon/apple-icon-57x57.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="60x60"
          href="/favicon/apple-icon-60x60.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="72x72"
          href="/favicon/apple-icon-72x72.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href="/favicon/apple-icon-76x76.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="114x114"
          href="/favicon/apple-icon-114x114.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="120x120"
          href="/favicon/apple-icon-120x120.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="144x144"
          href="/favicon/apple-icon-144x144.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href="/favicon/apple-icon-152x152.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-icon-180x180.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/favicon/android-icon-192x192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="96x96"
          href="/favicon/favicon-96x96.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="/favicon/manifest.json" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta
          name="msapplication-TileImage"
          content="/favicon/ms-icon-144x144.png"
        />
        <title>Henry Wandover</title>

        <meta name="author" content="Henry Wandover" />
        <meta
          name="description"
          content="A personal site made by Henry Wandover, for Henry Wandover"
        />
        <meta name="keywords" content="Computer Science, Writing, Blog" />

        <meta name="robots" content="index, follow" />
        <meta name="subject" content="Henry Wandover's personal site" />
        <meta
          name="copyright"
          content="all rights reserved to Punch Software"
        />
        <meta name="language" content="EN" />
        <meta
          name="revised"
          content="Tuesday, August July 19th, 2025, 5:58 pm"
        />
        <meta name="abstract" content="Henry Wandover's portfolio page" />
        <meta name="topic" content="Programming" />
        <meta name="summary" content="Henry Wandover's portfolio page" />
        <meta name="Classification" content="Portfolio" />
        <meta name="author" content="Henry Wandover, henrywandover@gmail.com" />
        <meta name="designer" content="hew02" />
        <meta name="reply-to" content="henrywandover@gmail.com" />
        <meta name="owner" content="Punch Software" />
        <meta name="url" content="https://www.github.com/PunchSoftware" />
        <meta name="directory" content="submission" />
        <meta name="pagename" content="Henry Wandover" />
        <meta name="category" content="Portfolio" />
        <meta name="coverage" content="Worldwide" />
        <meta name="distribution" content="Global" />
        <meta name="rating" content="General" />
        <meta name="revisit-after" content="7 days" />
        <meta name="target" content="all" />
        <meta name="HandheldFriendly" content="True" />
        <meta name="MobileOptimized" content="320" />
        <meta name="ResourceLoaderDynamicStyles" content="" />
        <meta name="medium" content="image-editor" />
        <meta http-equiv="Expires" content="0" />
        <meta http-equiv="Pragma" content="no-cache" />
        <meta http-equiv="Accept-CH" content="Sec-CH-DPR, Sec-CH-Width" />
        <meta
          http-equiv="Cache-Control"
          content="must-revalidate, public, max-age=31536000"
        />
        <meta
          http-equiv="cache-control"
          content="must-revalidate, public, max-age=31536000"
        />
        <meta http-equiv="imagetoolbar" content="no" />
        <meta http-equiv="x-dns-prefetch-control" content="off" />

        <meta name="og:title" content="Henry Wandover" />
        <meta name="og:type" content="portfolio" />
        <meta name="og:url" content="https://henrywandover.com" />
        <meta name="og:site_name" content="Henry Wandover" />
        <meta name="og:description" content="Henry Wandover's Portfolio page" />
        <meta name="og:latitude" content="39.9500" />
        <meta name="og:longitude" content="75.1438" />
        <meta name="og:locality" content="Philadelphia" />
        <meta name="og:region" content="PA" />
        <meta name="og:country-name" content="USA" />

        <meta name="apple-mobile-web-app-title" content="Henry Wandover" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-touch-fullscreen" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black" />
        <meta name="format-detection" content="telephone=no" />

        <link rel="canonical" href="https://henrywandover.com" />

        <meta name="theme-color" content="#ffffff" />
        <link rel="stylesheet" href="/themes/prism.css" data-noprefix />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
        />

        <link
          type="text/plain"
          rel="author"
          href="http://henrywandover.com/humans.txt"
        />

        {/*
                  <!--<script src="/js/nSlash/dist/nSlash.js" ></script>-->
                  <!--DISABLING FOR NOW, DO LATER.<script src="/js/sketch.js" type="module"></script>*/}

        <Meta />
        <Links />
      </head>
      <body>
        <div id="content">
          <header>
            <nav>
              <a href="/writing">WRITING</a>
              {/*<a href="/about">ABOUT</a>*/}
              <a href="/">HOME</a>
            </nav>
          </header>
          <main>
            {/*<Canvas>
              <Box />
            </Canvas>*/}

            {children}
          </main>
          <footer>
            <ul className="none">
              <li>© 2025 Henry Wandover.</li>
            </ul>
          </footer>
        </div>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

function Box() {
  const myMesh = React.useRef();
  useFrame(({ clock }) => {
    myMesh.current.rotation.y = clock.elapsedTime;
    myMesh.current.rotation.x = clock.elapsedTime;
  });
  return (
    <mesh ref={myMesh}>
      <boxGeometry args={[3, 3, 3]} />
      <meshBasicMaterial color="royalblue" />
    </mesh>
  );
}

export function HydrateFallback() {}

export default function App() {
  return <Outlet />;
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details =
      error.status === 404
        ? "The requested page could not be found."
        : error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <main className="pt-16 p-4 container mx-auto">
      <h1>{message}</h1>
      <p>{details}</p>
      {stack && (
        <pre className="w-full p-4 overflow-x-auto">
          <code>{stack}</code>
        </pre>
      )}
    </main>
  );
}
