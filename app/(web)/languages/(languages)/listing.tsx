import { LanguageList } from "~/components/web/languages/language-list"
import { findLanguages } from "~/server/languages/queries"

export const LanguageListing = async () => {
  const languages = await findLanguages({})

  return <LanguageList languages={languages} />
}
