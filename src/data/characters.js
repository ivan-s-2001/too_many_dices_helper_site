import characters from '../content/characters'

export const charactersMap = characters
export const characterList = Object.values(charactersMap)

export function getCharacter(characterId) {
  return charactersMap[characterId] ?? null
}

export function getCharacterFirstPageId(character) {
  return character?.pages?.[0]?.id ?? null
}

export function getCharacterPage(character, pageId) {
  if (!character) return null
  return character.pagesById?.[pageId] ?? null
}
