import { prisma } from "@/prismaclient";
import Link from "next/link";

async function getLocations() {
  let items = await prisma.location.groupBy({
    by: "name",
  });

  return items;
}

export default async function LocationPage({}) {
  let locations = await getLocations();

  return (
    <>
      <h1 className="font-bold text-2xl mb-4">Brug varer fra:</h1>
      <p>hello</p>
      {locations.map((location) => (
        <article className="mb-2" key={location.id}>
          <Link
            href={"items/" + location.name}
            className="font-bold text-lg mb-2"
          >
            {location.name}
          </Link>
        </article>
      ))}
    </>
  );
}
