export async function getStaticProps() {
  return {
    props: {
      pageId: "about_me",
      metadata: {
        title: "Vimal Thapliyal",
        description:
          "Discover the work of Vimal Thapliyal on his personal page",
        openGraph: {
          image: "https://example.com/image.jpg",
          url: "https://example.com",
        },
      },
    },
  };
}

export default function Home() {
  return (
    <div className="mt-16 px-8">
      <header>
        <h1 className="font-bold text-4xl text-zinc-800">I&apos;m Vimal</h1>
      </header>
    </div>
  );
}
