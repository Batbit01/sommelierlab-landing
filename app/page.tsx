import { redirect } from "next/navigation";

/**
 * Fallback: si el middleware no actuase, redirigimos a /es como default.
 * En la mayoría de los casos el middleware ya habrá redirigido antes
 * de llegar aquí.
 */
export default function Home() {
  redirect("/es");
}
