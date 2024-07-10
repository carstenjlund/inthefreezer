"use client";

import { useParams, useSearchParams } from "next/navigation";
import { deleteItem } from "@/actions";
import Link from "next/link";

export default function ConfirmPage() {
  const searchParams = useSearchParams();
  const params = useParams();
  const location = params.location;
  const redirect = !!searchParams.get("redirect");

  return !redirect ? null : (
    <>
      <div className="fixed inset-0 w h-full bg-black opacity-85"></div>
      <dialog open className="p-4 border border-black">
        Varen er oprettet!
        <br />
        <small>Vil du oprette flere varer?</small>
        <div className="mt-4 flex justify-end gap-2">
          <Link
            className="p-2 border border-black rounded-lg w-40 text-center bg-red-200"
            href={`/`}
          >
            Nej
          </Link>
          <Link
            className="p-2 border border-black rounded-lg w-40 text-center bg-green-200"
            href={`/add/${location}`}
          >
            Ja
          </Link>
        </div>
      </dialog>
    </>
  );
}
