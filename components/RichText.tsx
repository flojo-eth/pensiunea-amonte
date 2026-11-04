import Link from "next/link";
import { Fragment } from "react";

/**
 * A string with [text](url) links, rendered as text and links. Internal paths
 * (starting with "/") use next/link; anything else opens in a new tab.
 * Kept this small on purpose: the content files hold plain strings, not JSX.
 */
export default function RichText({ text }: { text: string }) {
  const parts = text.split(/(\[[^\]]+\]\([^)]+\))/g);
  return (
    <>
      {parts.map((part, i) => {
        const m = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
        if (!m) return <Fragment key={i}>{part}</Fragment>;
        const [, label, url] = m;
        const cls = "text-terracotta underline underline-offset-2 hover:text-forest";
        return url.startsWith("/") ? (
          <Link key={i} href={url} className={cls}>
            {label}
          </Link>
        ) : (
          <a key={i} href={url} target="_blank" rel="noopener noreferrer" className={cls}>
            {label}
          </a>
        );
      })}
    </>
  );
}
