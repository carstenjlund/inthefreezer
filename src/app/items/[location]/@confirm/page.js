"use client";

import { useParams, useSearchParams } from "next/navigation";
import { deleteItem } from "@/actions";
import Link from "next/link";

export default function ConfirmPage() {
  const searchParams = useSearchParams();
  const params = useParams();
  const location = params.location;
  const confirm = !!searchParams.get("confirm");
  const id = parseInt(searchParams.get("id"));
  const name = searchParams.get("name");

  return !confirm ? null : (
    <>
      <div className="fixed inset-0 w h-full bg-black opacity-60"></div>
      <dialog open className="p-4 border border-black">
        Bruger du varen &quot;{name}&quot;?
        <br />
        <small>Hvis du klikker &quot;bekræft&quot; slettes varen fra oversigten.</small>
        <div className="mt-4 flex justify-end gap-2">
          <Link
            className="p-2 border border-black rounded-lg"
            href={`/items/${location}`}
          >
            Fortryd
          </Link>
          <form action={deleteItem}>
            <input type="hidden" name="id" value={id} />
            <input type="hidden" name="location" value={location} />
            <button className="p-2 border border-black rounded-lg bg-red-600 text-white">
              Bekræft
            </button>
          </form>
        </div>
      </dialog>
    </>
  );
}
