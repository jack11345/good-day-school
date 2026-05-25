import { redirect } from "next/navigation";
import { auth } from "@/lib/auth";

export default async function Home() {
  const session = await auth();
  if (!session) redirect("/login");
  const role = (session.user as { role: string }).role;
  if (role === "teacher") redirect("/lms");
  if (role === "admin") redirect("/admin");
  if (role === "accountant") redirect("/finance");
  if (role === "parent") redirect("/parent");
  redirect("/login");
}
