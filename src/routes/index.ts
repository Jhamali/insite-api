import * as express from 'express'
import { Router } from 'express'
import Memory from '../entity/Memory'
import Client from '../entity/Client'
import User from '../entity/User'
import Battery from '../entity/Battery'
import OperatingSystem from '../entity/OperatingSystem'
import Time from '../entity/Time'
import System from '../entity/System'
import Bios from '../entity/Bios'
import FileSystem from '../entity/FileSystem'
import Baseboard from '../entity/Baseboard'
import CPU from '../entity/CPU'
import Controller from '../entity/graphics/Controller'
import Display from '../entity/graphics/Display'
import { Network } from '../entity/Network'
import CpuSpeed from '../entity/CpuSpeed'
import CurrentLoad from '../entity/CurrentLoad'
import NetworkConnection from '../entity/NetworkConnection'
import NetworkStat from '../entity/NetworkStats'
import Process from '../entity/Process'

import { pubsub } from '../subscriptions'

const app = Router()

app.post('/post', async (req: express.Request, res: express.Response) => {
  //Future route for accepting data!
  //If POST doesnt have a body, reject
  if (!req.body) return res.end()
  //UTC Timestamp
  const { timestamp } = req.body
  //static id, system server feature coming soon
  const { id } = req.body
  //const { _id: id } = req.body
  const client = Client.create({
    id,
    lastTimestamp: timestamp,
  })
  await client.save()
  //save System data
  const { system } = req.body
  await System.create({
    id,
    timestamp,
    ...system,
  }).save()
  //save BIOS
  const { bios } = req.body
  await Bios.create({
    id,
    timestamp,
    ...bios,
  }).save()
  //save BaseBoard
  const { baseboard } = req.body
  await Baseboard.create({
    id,
    timestamp,
    ...baseboard,
  }).save()
  //save OS
  const { os } = req.body
  await OperatingSystem.create({
    id,
    timestamp,
    ...os,
  }).save()
  //save CPU
  const { cpu } = req.body
  await CPU.create({
    id,
    timestamp,
    ...cpu,
  }).save()
  //Saving Graphics controllers and displays
  const { controllers, displays } = req.body.graphics
  controllers.map(
    async (controller: Controller) =>
      await Controller.create({
        id,
        timestamp,
        ...controller,
      }).save()
  )
  displays.map(
    async (display: Display) =>
      await Display.create({
        id,
        timestamp,
        ...display,
      }).save()
  )
  //Save network interface
  const { net: networkInterfaces } = req.body
  networkInterfaces.map(
    async (net: Network) =>
      await Network.create({
        id,
        timestamp,
        ...net,
      }).save()
  )
  //Save Timezone
  const { time } = req.body
  await Time.create({
    id,
    timestamp,
    ...time,
  }).save()
  //save CPUSpeed
  const { cpuCurrentspeed: cpuSpeed } = req.body
  await CpuSpeed.create({
    id,
    timestamp,
    ...cpuSpeed,
  }).save()
  //save CPU load
  const { currentLoad: cpuLoad } = req.body
  await CurrentLoad.create({
    id,
    timestamp,
    ...cpuLoad,
  }).save()
  //save Filesystem
  const { fsSize: filesystems } = req.body
  filesystems.map(
    async (filesystem: FileSystem) =>
      await FileSystem.create({
        id,
        timestamp,
        ...filesystem,
      }).save()
  )
  //Save memory
  const memory = req.body.mem
  await Memory.create({ ...memory, timestamp, id }).save()
  //Save network connections
  const { networkConnections } = req.body
  networkConnections.map(
    async (connection: NetworkConnection) =>
      await NetworkConnection.create({
        id,
        timestamp,
        ...connection,
      }).save()
  )
  //Save network stats
  const { networkStats } = req.body
  await NetworkStat.create({
    id,
    timestamp,
    ...networkStats,
  }).save()
  //Get users
  const users = req.body.users
  users.map(
    async (user: User) =>
      await User.create({
        ...user,
        id,
        timestamp,
      }).save()
  )
  if (!req.body.processes) {
    res.end()
  } else {
    //save each process
    const { list: processes } = req.body.processes
    processes.map(
      async (process: Process) =>
        await Process.create({
          id,
          timestamp,
          ...process,
        }).save()
    )
  }
  //Get Battery data
  const battery = req.body.battery
  await Battery.create({
    id,
    timestamp,
    ...battery,
  }).save()
  pubsub.publish('JSON ADDED', { json: req.body })
  res.end()
})

export default app
