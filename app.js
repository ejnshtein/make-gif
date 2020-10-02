#!/usr/bin/env node

const yargs = require('yargs')
const path = require('path')
const ffmpeg = require('ffmpeg-cli')

const options = yargs
    .usage('Usage: -i <input> -s <timestamp> -t <length> -o <output>')
    .option('i', { alias: 'input', describe: 'Input filename', type: 'string', demandOption: true })
    .option('s', { alias: 's', describe: 'Start timestamp', type: 'string', demandOption: true })
    .option('o', { alias: 'output', describe: 'Output filename', type: 'string', demandOption: true })
    .option('t', { alias: 'timestamp', describe: 'Cut length', type: 'number' })
    .option('gpu', { alias: 'gpu', describe: 'Use GPU', type: 'boolean', default: false })
    .option('r', { alias: 'resize', describe: 'Resize output', type: 'string' })
    .argv

function buildCommand() {
    let commands = []
    commands.push(`-i ${path.resolve(__dirname, options.i)}`)
    commands.push(`-ss ${options.s}`)

    if (options.t) {
        commands.push(`-t ${options.t}`)
    }

    if (options.gpu) {
        commands.push(``)
    }


    commands.push(`${path.resolve(__dirname, options.o)}`)
}

!(async () => {
    const command = buildCommand()
})()