import references from '../content/references'

export const referencesMap = references
export const referenceList = Object.values(referencesMap)

export function getReference(referenceId) {
  return referencesMap[referenceId] ?? null
}
