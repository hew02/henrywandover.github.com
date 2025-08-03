import {
  type RouteConfig,
  route,
  index,
  layout,
  prefix,
} from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"),
    route("links", "routes/links.tsx"),
    route("hasqtan", "routes/hasqtan.tsx"),
    route("my-work-on-links", "routes/my-work-on-links.tsx"),
    ...prefix("writing", [
				index("./routes/writing/home.tsx"),
				route("chinese-restaurant", "./routes/writing/chinese-restaurant.tsx"),
				route("the-final-fumes-of-the-rutgers-teachers-strike", "./routes/writing/the-final-fumes-of-the-rutgers-teachers-strike.tsx"),
				route("some-poems", "./routes/writing/some-poems.tsx"),
    ]),
		...prefix("projects", [
				index("./routes/projects/home.tsx"),

		]),

] satisfies RouteConfig;
