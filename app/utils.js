export function toAbsPath (lang, path) {
  return lang ? (path ? ["", lang, path].join("/") : ["", lang].join("/")) : ["", path].join("/");
}

export function getRelPath (lang, path) {
  var prefix = lang ? "/".concat(lang) : "/"
  // this assumes that no language is a prefix of another language
  var relPath = path.startsWith(prefix) ? path.slice(prefix.length) : path
  return relPath.charAt(0) === '/' ? relPath.slice(1) : relPath
}
