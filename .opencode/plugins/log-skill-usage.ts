// @ts-nocheck
import type { Plugin } from '@opencode-ai/plugin'
import { appendFile } from 'node:fs/promises'
import { join } from 'node:path'

const LOG_DIR = '_logs'

export const LogSkillUsage: Plugin = async ({ client, directory }) => {
  const logFilePath = join(directory, LOG_DIR, 'skill-usage.jsonl')

  async function writeLog(entry: object) {
    try {
      await appendFile(logFilePath, JSON.stringify(entry) + '\n')
    } catch {
      // silent
    }
  }

  return {
    // Skills are slash commands — this is the primary event to capture
    'command.execute.before': async (input, output) => {
      const logEntry = {
        event: 'command.execute.before',
        skill: input.command,
        arguments: input.arguments || '',
        sessionID: input.sessionID,
        timestamp: new Date().toISOString(),
      }

      await client.app.log({
        body: {
          service: 'skill-logger',
          level: 'info',
          message: `🚀 Skill/Command: ${input.command}`,
          extra: logEntry,
        },
      })

      await writeLog(logEntry)
    },

    // Catch explicit skill tool calls (e.g. via tool use in agent)
    'tool.execute.before': async (input, output) => {
      const toolName = input.tool || ''
      if (toolName !== 'skill' && !toolName.includes('skill')) return

      const skillName = output.args?.name || output.args?.tool_name || 'unknown-skill'
      const logEntry = {
        event: 'tool.execute.before',
        skill: skillName,
        tool: toolName,
        args: output.args,
        sessionID: input.sessionID,
        callID: input.callID,
        timestamp: new Date().toISOString(),
      }

      await client.app.log({
        body: {
          service: 'skill-logger',
          level: 'info',
          message: `🔧 Skill tool: ${skillName}`,
          extra: logEntry,
        },
      })

      await writeLog(logEntry)
    },

    'tool.execute.after': async (input, output) => {
      const toolName = input.tool || ''
      if (toolName !== 'skill' && !toolName.includes('skill')) return

      const skillName = input.args?.name || input.args?.tool_name || 'unknown-skill'
      const logEntry = {
        event: 'tool.execute.after',
        skill: skillName,
        tool: toolName,
        success: !!output.output && !output.output.startsWith('error'),
        outputLength: output.output?.length || 0,
        sessionID: input.sessionID,
        callID: input.callID,
        timestamp: new Date().toISOString(),
      }

      await client.app.log({
        body: {
          service: 'skill-logger',
          level: 'info',
          message: `✅ Skill done: ${skillName}`,
          extra: logEntry,
        },
      })

      await writeLog(logEntry)
    },
  }
}