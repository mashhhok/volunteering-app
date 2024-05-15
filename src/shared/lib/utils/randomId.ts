export const randomId = () => {
  const date = Date.now().toString(36)
  const random = Math.random().toString(36).slice(2)
  return date+random
}
