"use server";
import { revalidatePath } from "next/cache";
import { prisma } from "./prismaclient";
import { redirect } from "next/navigation";

export const getItems = async function (location) {
  let items = await prisma.item.findMany({
    where: { location: { name: location } },
    include: { location: { select: { place: true } } },
    orderBy: { name: "asc" },
  });
  console.log(items);
  return items;
};

export async function saveItem(formdata) {
  let data = Object.fromEntries(formdata);
  try {
    let newItem = await prisma.item.create({
      data: {
        name: data.name,
        amount: data.amount + " " + data.unit,
        locationId: parseInt(data.locationId),
      },
    });
    console.log(newItem);
    return newItem;
  } catch (error) {
    console.error("Failed to create item:", error);
  } finally {
    redirect("?redirect=true");
  }
}

export async function deleteItem(formdata) {
  let id = parseInt(formdata.get("id"));
  let location = formdata.get("location");

  try {
    await prisma.item.delete({
      where: { id: id },
    });
    revalidatePath("/items/" + location);
  } catch (error) {
    console.error("Failed to delete item:", error);
  } finally {
    redirect("/items/" + location);
  }
}

export async function getLocations() {
  let locations = await prisma.location.findMany();
  return locations;
}
