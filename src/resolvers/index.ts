import Battery from '../entity/Battery'
import OperatingSystem from '../entity/OperatingSystem'
import Client from '../entity/Client'
import { ResolverMap } from '../types/graphql'
import CPU from '../entity/CPU'
import Bios from '../entity/Bios'
import FileSystem from '../entity/FileSystem'
import Baseboard from '../entity/Baseboard'
import Display from '../entity/graphics/Display'
import Controller from '../entity/graphics/Controller'
import { Network } from '../entity/Network'
import User from '../entity/User'
import Process from '../entity/Process'
import CpuSpeed from '../entity/CpuSpeed'
import CurrentLoad from '../entity/CurrentLoad'
import Memory from '../entity/Memory'

import system from './system'
import time from './time'
import { pubsub } from '../subscriptions'

const resolvers: ResolverMap = {
  Subscription: {
    jsonAdded: {
      subscribe: () => pubsub.asyncIterator(['JSON_ADDED']),
    },
  },
  Query: {
    async getAllClients() {
      let clients = await Client.find()
      if (!clients) return null
      return clients
    },
    getAllData(_, { id }) {
      return { id }
    },
  },
  Payload: {
    system,
    async bios(parent) {
      let { id } = parent
      let bios = await Bios.findOne({ where: { id } })
      if (!bios) return null
      return bios
    },
    async baseboard(parent) {
      let { id } = parent
      let baseboard = await Baseboard.findOne({ where: { id } })
      if (!baseboard) return null
      return baseboard
    },
    async os(parent) {
      let { id } = parent
      let os = await OperatingSystem.findOne({ where: { id } })
      if (!os) return null
      return os
    },
    async cpu(parent) {
      let { id } = parent
      let cpu = await CPU.findOne({ where: { id } })
      if (!cpu) return null
      return cpu
    },
    async displays(parent) {
      let { id } = parent
      let display = await Display.find({ where: { id } })
      if (!display) return null
      return display
    },
    async controllers(parent) {
      let { id } = parent
      let controller = await Controller.find({ where: { id } })
      if (!controller) return null
      return controller
    },
    async networkInterfaces(parent) {
      let { id } = parent
      let networkInterfaces = await Network.find({ where: { id } })
      if (!networkInterfaces) return null
      return networkInterfaces
    },
    time,
    async cpuSpeed(parent) {
      let { id } = parent
      let cpuSpeeds = await CpuSpeed.find({ where: { id } })
      if (!cpuSpeeds) return null
      return cpuSpeeds
    },
    async cpuLoad(parent) {
      let { id } = parent
      //TODO rename for consistency
      let cpuLoads = await CurrentLoad.find({ where: { id } })
      if (!cpuLoads) return null
      return cpuLoads
    },
    async users(parent) {
      let { id } = parent
      let users = await User.find({ where: { id } })
      if (!users) return null
      return users
    },
    async fs(parent) {
      let { id } = parent
      let fs = await FileSystem.find({ where: { id } })
      if (!fs) return null
      return fs
    },
    async memory(parent) {
      let { id } = parent
      let memory = await Memory.findOne({
        where: { id },
        order: {
          timestamp: 'DESC',
        },
      })
      if (!memory) return null
      return memory
    },
    async battery(parent) {
      let { id } = parent
      let battery = await Battery.findOne({ where: { id } })
      if (!battery) return null
      return battery
    },
    async processes(parent) {
      let { id } = parent
      let processes = await Process.find({ where: { id } })
      if (!processes) return null
      return processes
    },
  },
}
export default resolvers
