import { prisma } from "@/prismaclient";
import { saveItem } from "@/actions";

export async function getPlaces(location) {
  let itemPlaces = await prisma.location.findMany({
    where: { name: location },
    select: { id: true, place: true },
  });
  return itemPlaces;
}

export default async function AddItemByLocation({ params }) {
  const location = params.location;
  let itemPlaces = await getPlaces(location);
  console.log(itemPlaces);
  return (
    <form action={saveItem} className="grid grid-cols-form gap-4">
      <h2 className="col-span-2">Tilføj vare til {location}</h2>
      <div className="formgroup col-span-2 grid grid-cols-subgrid">
        <label htmlFor="name">Vare:</label>
        <input type="text" name="name" id="name" placeholder="Varens navn" />
      </div>
      <div className="formgroup col-span-2 grid grid-cols-subgrid">
        <label htmlFor="amount">Mængde:</label>
        <div>
          <input
            type="text"
            name="amount"
            id="amount"
            placeholder="Varens vægt eller mængde"
          />
          <select name="unit" id="unit">
            <option>Enhed:</option>
            <option value="ml">ml</option>
            <option value="l">l</option>
            <option value="g">g</option>
            <option value="kg">kg</option>
          </select>
        </div>
      </div>
      <div className="formgroup col-span-2 grid grid-cols-subgrid">
        <label htmlFor="locationId">placering:</label>
        <select name="locationId" id="locationId">
          <option>Vælg placering:</option>
          {itemPlaces.map((itemPlace) => (
            <option key={itemPlace.id} value={itemPlace.id}>
              {itemPlace.id} {itemPlace.place}
            </option>
          ))}
        </select>
      </div>
      <button className="col-span-2 p-2 bg-black text-white">gem</button>
    </form>
  );
}
