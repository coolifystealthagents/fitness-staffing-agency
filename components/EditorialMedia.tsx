import Image from 'next/image';

export function ArticleImage({ src, slug, title }: { src?: string; slug: string; title: string }) {
  const fallback = `/heroes/editorial/${slug}.svg`;
  return <figure className="article-hero-image">
    <Image src={src || fallback} alt={`Visual guide for ${title}`} width={1200} height={630} priority sizes="(max-width: 900px) 100vw, 92vw" />
  </figure>;
}

export function PageHeroImage({ src, alt }: { src: string; alt: string }) {
  return <figure className="page-hero-image"><Image src={src} alt={alt} width={1600} height={900} priority sizes="(max-width: 900px) 100vw, 50vw" /></figure>;
}
