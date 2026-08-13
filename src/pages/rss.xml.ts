import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import type { APIContext } from "astro";

export async function GET(context: APIContext) {
  const posts = (await getCollection("blog")).sort(
    (a, b) => b.data.date.getTime() - a.data.date.getTime(),
  );
  return rss({
    title: "Nima Hejazi",
    description: "Personal site for hiring and personal branding.",
    site: context.site ?? "https://nimahejazi.me",
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.excerpt,
      pubDate: post.data.date,
      link: `/blog/${post.id}/`,
    })),
  });
}
