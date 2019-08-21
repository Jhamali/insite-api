import System from '../entity/System'

export default async function(parent: any) {
  let { id } = parent
  let system = await System.findOne({ where: { id } })
  if (!system) return null
  return system
}
