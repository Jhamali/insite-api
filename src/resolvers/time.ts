import Time from '../entity/Time'

export default async function(parent: any) {
  let { id } = parent
  let time = await Time.findOne({ where: { id } })
  if (!time) return null
  return time
}
