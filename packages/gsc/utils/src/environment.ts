let _proc: NodeJS.ProcessEnv

const getEnv = () => {
  if (_proc) return _proc
  _proc = typeof process !== 'undefined' && process ? process.env || {} : {}
  return _proc
}

export const getEnvVar = (name: string) => getEnv()[name]

export const getRequiredEnvVar = (name: string) => {
  const val = getEnv()[name]
  if (!val) throw new Error(`Environment variable, ${name}, is not defined.`)

  return val
}
