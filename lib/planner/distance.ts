// converts degrees to radians
function toRad(deg: number): number {
  return deg * (Math.PI / 180)
}
// takes two points A and B with lat/lng coordinates and returns the distance between them 
export function distanceKm(
  a: { lat: number; lng: number },
  b: { lat: number; lng: number }
): number {
  const R = 6371
  const dLat = toRad(b.lat - a.lat)
  const dLng = toRad(b.lng - a.lng)
  const x =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(toRad(a.lat)) *
    Math.cos(toRad(b.lat)) *
    Math.sin(dLng / 2) ** 2
  return R * 2 * Math.atan2(Math.sqrt(x), Math.sqrt(1 - x))
}

// calculates total distance of a full day route.
export function totalKm(stops: { lat: number; lng: number }[]): number {
  let total = 0
  for (let i = 1; i < stops.length; i++) {
    total += distanceKm(stops[i - 1], stops[i])
  }
  return total
}
    // calculate how far is the next destination from the last one
export function detourKm(
  route: { lat: number; lng: number }[],
  candidate: { lat: number; lng: number }
): number {
  if (route.length === 0) return 0
  return distanceKm(route[route.length - 1], candidate)
}
