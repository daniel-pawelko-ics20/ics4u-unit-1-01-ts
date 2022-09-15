/**
 * Figure out amount of logs that can
 *   be stored for a specific log size
 *
 * By:      Daniel
 * Version: 1.0
 * Since:   2022-09-14
 */
import promptSync from 'prompt-sync'

const prompt = promptSync()
const log: number[][] = [
  [1, 0.25],
  [2, 0.5],
  [3, 1]
]

const logSelect = prompt('Select log size [0]0.25, [1]0.5, [2]1:    ')
const logSize = parseInt(logSelect)
const logWeight = 20 * log[logSize][1]
const logs = 1100 / logWeight

console.log(`${logs} logs would fit if the size was ${log[logSize][1]}m`)

console.log('\nDone')
