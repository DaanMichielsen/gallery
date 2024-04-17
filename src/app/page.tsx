import { db } from "~/server/db";

export const dynamic = "force-dynamic";

const images = [
  "https://utfs.io/f/610c9bb9-a29a-47bb-ac21-7c3cb07ee6f3-1r5u.svg",
  "https://utfs.io/f/b03c3780-4bc9-4eee-b957-bc2253884580-eouppx.svg",
  "https://utfs.io/f/a11be848-b5f5-43a0-a71d-2f6f1213544b-1p3s.svg",
  "https://utfs.io/f/47ca2bc3-5bbe-43d3-adb8-5feaafe26735-7wv6ug.svg",
];

const mockImages = images.map((image, index) => ({
  id: index,
  url: image,
}));

const post = await db.query.posts.findMany();

export default function HomePage() {
  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {post.map((post) => (
          <div key={post.id}>{post.name}</div>
        ))}
        {[...mockImages, ...mockImages, ...mockImages, ...mockImages].map(
          (image, index) => (
            <div key={image.id + "-" + index} className="w-48">
              <img src={image.url} alt="image" className="w-full" />
            </div>
          ),
        )}
      </div>
      Gallery in progress
    </main>
  );
}
