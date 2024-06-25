//"use client"
import { signIn } from "@/auth";
//import { signIn } from "next-auth/react"

export default function SignIn() {
  return (
    <div className="w-full min-h-screen">
      <form
        className="flex justify-center items-center flex-col space-y-4"
        action={async (formData) => {
          "use server";
          //e.preventDefault()
          //const formData = new FormData(e.target);
          //const data = {
          //  email: formData.get("email"),
          //  password: formData.get("password"),
          //};
          const data = Object.fromEntries(formData);
          //await signIn("credentials",  {...data, callbackUrl:"/dashboard" })
          await signIn("credentials", {
            ...data,
            redirectTo: "/dashboard",
          });
        }}
      >
        <label>
          Username
          <input className="text-black" name="username" type="text" />
        </label>
        <label>
          Password tyu
          <input className="text-black" name="password" type="password" />
        </label>
        <button className="border rounded-lg px-6 py-4">Sign In</button>
      </form>
    </div>
  );
}
