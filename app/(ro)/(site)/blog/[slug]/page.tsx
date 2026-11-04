import type { Metadata } from "next";
import { notFound } from "next/navigation";
import BlogPostPage, { blogPostMetadata } from "@/components/pages/BlogPostPage";
import { BLOG_POSTS, getPost } from "@/lib/blog";

export const dynamicParams = false;

export function generateStaticParams() {
  return BLOG_POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const post = getPost((await params).slug);
  return post ? blogPostMetadata(post) : {};
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const post = getPost((await params).slug);
  if (!post) notFound();
  return <BlogPostPage post={post} />;
}
