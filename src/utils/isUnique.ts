export default function isUnique(fields: string[]): boolean {
  return new Set(fields).size === fields.length
}
