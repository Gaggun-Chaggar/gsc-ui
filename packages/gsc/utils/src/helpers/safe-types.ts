export const File =
  typeof window !== 'undefined' ? window.File : class File extends Object {}
