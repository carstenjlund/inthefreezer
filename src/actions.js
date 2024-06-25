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
  return items;
};

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
