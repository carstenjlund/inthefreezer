import { getLocations } from "@/actions";

export default async function AddPage() {
  const locations = await getLocations();

  const uniqueLocations = [
    ...new Set(locations.map((location) => location.name)),
  ];
  console.log(uniqueLocations);

  return (
    <form action="" method="POST">
      <div className="formgroup">
        <label htmlFor="newItem">Ny vare:</label>
        <input type="text" name="newItem" id="newItem" />
      </div>
      <div className="formgroup">
        <label htmlFor="newItem">Sted:</label>
        <select name="name" id="name">
          <option value="">Vælg et sted:</option>
          {uniqueLocations.map((location) => (
            <option key={location} value={location}>
              {location}
            </option>
          ))}
        </select>
      </div>
    </form>
  );
}
