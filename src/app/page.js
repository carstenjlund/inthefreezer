import Link from "next/link";
export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center p-24">
      <h1 className="font-bold text-2xl mb-4">Brug varer fra:</h1>

      <article className="mb-2">
        <Link
          href={"items/Strandboulevarden"}
          className="font-bold text-lg mb-2 min-w-80 py-4 bg-green-700 text-white text-center block rounded-xl"
        >
          Strandboulevarden
        </Link>
      </article>
      <article className="mb-2">
        <Link
          href={"items/Arvedsvej"}
          className="font-bold text-lg mb-2 min-w-80 py-4 bg-green-700 text-white text-center block rounded-xl"
        >
          Arvedsvej
        </Link>
      </article>
      <h1 className="font-bold text-2xl my-4 pt-4 border-t border-gray-500">
        Tilføj varer til:
      </h1>
      <article className="mb-2">
        <Link
          href={"add/Strandboulevarden"}
          className="font-bold text-lg mb-2 min-w-80 py-4 bg-gray-500 text-white text-center block rounded-xl"
        >
          Strandboulevarden
        </Link>
      </article>
      <article className="mb-2">
        <Link
          href={"add/Arvedsvej"}
          className="font-bold text-lg mb-2 min-w-80 py-4 bg-gray-500 text-white text-center block rounded-xl"
        >
          Arvedsvej
        </Link>
      </article>
    </div>
  );
}
