import { isValidLang, getDict, type Lang } from "../../lib/i18n";
import { notFound } from "next/navigation";
import Landing from "../_components/Landing";

export default async function LangPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!isValidLang(lang)) notFound();
  const t = getDict(lang as Lang);
  return <Landing t={t} lang={lang as Lang} />;
}
