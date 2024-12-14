"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { createClient } from "@/utils/supabase/server";

export async function login(formData: FormData) {
  const supabase = await createClient();

  console.log("login form date", formData);

  // type-casting here for convenience
  // in practice, you should validate your inputs
  const data = {
    email: formData.get("email") as string,
    password: formData.get("password") as string,
  };
  console.log("Email:", data.email);
  console.log("Password:", data.password);
  const { error } = await supabase.auth.signInWithPassword(data);

  //   if (error) {
  //     console.error("error", error);
  //     redirect("/error");
  //   }
  //
  //   revalidatePath("/", "layout");
  //   redirect("/");
  // }

  try {
    const { error } = await supabase.auth.signInWithPassword(data);

    if (error) {
      console.error("Login error:", error.message);
      return { success: false, message: error.message };
    }
    console.log("made it to revalidatePath");
    revalidatePath("/", "layout");
    return { success: true, redirectUrl: "/" };
  } catch (error) {
    console.error("Unexpected login error:", error);
    return {
      success: false,
      message: "Unexpected error occurred during login.",
    };
  }
}

export async function signup(formData: FormData) {
  const supabase = await createClient();

  // type-casting here for convenience
  // in practice, you should validate your inputs
  const data = {
    email: formData.get("email") as string,
    password: formData.get("password") as string,
  };

  const { error } = await supabase.auth.signUp(data);

  if (error) {
    redirect("/error");
  }

  revalidatePath("/", "layout");
  redirect("/");
}
