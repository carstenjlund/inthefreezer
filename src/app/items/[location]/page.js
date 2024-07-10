import { getItems, deleteItem } from "@/actions";

export default async function LocationPage({ params }) {
  let items = await getItems(params.location);

  return (
    <>
      <h1 className="font-bold text-2xl mb-4">Varer i {params.location}</h1>
      <ul className="space-y-4">
        {items.map((item) => (
          <li
            key={item.id}
            className="flex items-end gap-1 pb-4 border-b border-gray-400"
          >
            <div>
              <h3 className="font-bold text-lg">{item.name}</h3>
              <p>
                {item.amount} / {item.location.place}
              </p>
            </div>
            <form className="ml-auto">
              <input type="hidden" name="confirm" value="true" />
              <input type="hidden" name="name" value={item.name} />
              <input type="hidden" name="id" value={item.id} />
              <button
                className="p-2 rounded-lg border-2 border-red-600 text-red-600"
                type="submit"
              >
                Brug vare
              </button>
            </form>
          </li>
        ))}
      </ul>
      <dialog className="p-8 border border-black">test dialog</dialog>
    </>
  );
}
