import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

interface Props {
  url?: string;
  url2?: string;
}

const Breadcrumbs: React.FC<Props> = ({ url, url2 }) => {
  const { asPath } = useRouter();

  const getUrlLabel = (url: string) => {
    if (url === "blog") return "Блог Пост";
    if (url === "aboutUs") return "За нас";
    if (url === "events") return "Настани";
    if (url === "conference") return "Годишна конференција";

    return "";
  };

  return (
    <section className="breadcrumbs-section">
      <Link href="/">
        <span>Почетна</span>
      </Link>
      {asPath.startsWith("/blogs") && (
        <>
          <span> &#10148; </span>
          <Link href="/blogs">
            <span className={url ? "" : "active"}> Блогови</span>
          </Link>
        </>
      )}
      {url && (
        <>
          <span> &#10148; </span>
          <span className="active">{getUrlLabel(url)}</span>
        </>
      )}
      {asPath.startsWith("/events") && url && url2 && (
        <>
          <Link href="/events">
            <span> Настани</span>
          </Link>
          <span> &#10148; </span>
          <span>{url}</span>
          <span> &#10148; </span>
          <span className={url2 ? "active" : ""}>{url2}</span>
        </>
      )}
    </section>
  );
};

export default Breadcrumbs;
