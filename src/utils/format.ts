export const formatNumber = (num: number | null) => {
  if (num === null) return ""
  return num.toLocaleString()
}
