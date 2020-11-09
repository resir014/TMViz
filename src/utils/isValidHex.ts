function isValidHex(color?: string): boolean {
  if (color) {
    return /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(color)
  }

  return false
}

export default isValidHex
