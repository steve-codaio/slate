function generateForRange(
  startUnicode: string,
  endUnicode: string
): { [key: string]: true } {
  const start = startUnicode.charCodeAt(0)
  const end = endUnicode.charCodeAt(0)
  const entries: { [key: string]: true } = {}
  for (let i = start; i <= end; i++) {
    entries[String.fromCharCode(i)] = true
  }
  return entries
}

export const PUNCTUATION_MAP: { [key: string]: true } = {
  ...generateForRange('\u0021', '\u0023'),
  ...generateForRange('\u0025', '\u002A'),
  ...generateForRange('\u002C', '\u002F'),
  '\u003A': true,
  '\u003B': true,
  '\u003F': true,
  '\u0040': true,
  ...generateForRange('\u005B', '\u005D'),
  '\u005F': true,
  '\u007B': true,
  '\u007D': true,
  '\u00A1': true,
  '\u00A7': true,
  '\u00AB': true,
  '\u00B6': true,
  '\u00B7': true,
  '\u00BB': true,
  '\u00BF': true,
  '\u037E': true,
  '\u0387': true,
  ...generateForRange('\u055A', '\u055F'),
  '\u0589': true,
  '\u058A': true,
  '\u05BE': true,
  '\u05C0': true,
  '\u05C3': true,
  '\u05C6': true,
  '\u05F3': true,
  '\u05F4': true,
  '\u0609': true,
  '\u060A': true,
  '\u060C': true,
  '\u060D': true,
  '\u061B': true,
  '\u061E': true,
  '\u061F': true,
  ...generateForRange('\u066A', '\u066D'),
  '\u06D4': true,
  ...generateForRange('\u0700', '\u070D'),
  ...generateForRange('\u07F7', '\u07F9'),
  ...generateForRange('\u0830', '\u083E'),
  '\u085E': true,
  '\u0964': true,
  '\u0965': true,
  '\u0970': true,
  '\u0AF0': true,
  '\u0DF4': true,
  '\u0E4F': true,
  '\u0E5A': true,
  '\u0E5B': true,
  ...generateForRange('\u0F04', '\u0F12'),
  '\u0F14': true,
  ...generateForRange('\u0F3A', '\u0F3D'),
  '\u0F85': true,
  ...generateForRange('\u0FD0', '\u0FD4'),
  '\u0FD9': true,
  '\u0FDA': true,
  ...generateForRange('\u104A', '\u104F'),
  '\u10FB': true,
  ...generateForRange('\u1360', '\u1368'),
  '\u1400': true,
  '\u166D': true,
  '\u166E': true,
  '\u169B': true,
  '\u169C': true,
  ...generateForRange('\u16EB', '\u16ED'),
  '\u1735': true,
  '\u1736': true,
  ...generateForRange('\u17D4', '\u17D6'),
  ...generateForRange('\u17D8', '\u17DA'),
  ...generateForRange('\u1800', '\u180A'),
  '\u1944': true,
  '\u1945': true,
  '\u1A1E': true,
  '\u1A1F': true,
  ...generateForRange('\u1AA0', '\u1AA6'),
  ...generateForRange('\u1AA8', '\u1AAD'),
  ...generateForRange('\u1B5A', '\u1B60'),
  ...generateForRange('\u1BFC', '\u1BFF'),
  ...generateForRange('\u1C3B', '\u1C3F'),
  '\u1C7E': true,
  '\u1C7F': true,
  ...generateForRange('\u1CC0', '\u1CC7'),
  '\u1CD3': true,
  ...generateForRange('\u2010', '\u2027'),
  ...generateForRange('\u2030', '\u2043'),
  ...generateForRange('\u2045', '\u2051'),
  ...generateForRange('\u2053', '\u205E'),
  '\u207D': true,
  '\u207E': true,
  '\u208D': true,
  '\u208E': true,
  '\u2329': true,
  '\u232A': true,
  ...generateForRange('\u2768', '\u2775'),
  '\u27C5': true,
  '\u27C6': true,
  ...generateForRange('\u27E6', '\u27EF'),
  ...generateForRange('\u2983', '\u2998'),
  ...generateForRange('\u29D8', '\u29DB'),
  '\u29FC': true,
  '\u29FD': true,
  ...generateForRange('\u2CF9', '\u2CFC'),
  '\u2CFE': true,
  '\u2CFF': true,
  '\u2D70': true,
  ...generateForRange('\u2E00', '\u2E2E'),
  ...generateForRange('\u2E30', '\u2E3B'),
  ...generateForRange('\u3001', '\u3003'),
  ...generateForRange('\u3008', '\u3011'),
  ...generateForRange('\u3014', '\u301F'),
  '\u3030': true,
  '\u303D': true,
  '\u30A0': true,
  '\u30FB': true,
  '\uA4FE': true,
  '\uA4FF': true,
  ...generateForRange('\uA60D', '\uA60F'),
  '\uA673': true,
  '\uA67E': true,
  ...generateForRange('\uA6F2', '\uA6F7'),
  ...generateForRange('\uA874', '\uA877'),
  '\uA8CE': true,
  '\uA8CF': true,
  ...generateForRange('\uA8F8', '\uA8FA'),
  '\uA92E': true,
  '\uA92F': true,
  '\uA95F': true,
  ...generateForRange('\uA9C1', '\uA9CD'),
  '\uA9DE': true,
  '\uA9DF': true,
  ...generateForRange('\uAA5C', '\uAA5F'),
  '\uAADE': true,
  '\uAADF': true,
  '\uAAF0': true,
  '\uAAF1': true,
  '\uABEB': true,
  '\uFD3E': true,
  '\uFD3F': true,
  ...generateForRange('\uFE10', '\uFE19'),
  ...generateForRange('\uFE30', '\uFE52'),
  ...generateForRange('\uFE54', '\uFE61'),
  '\uFE63': true,
  '\uFE68': true,
  '\uFE6A': true,
  '\uFE6B': true,
  ...generateForRange('\uFF01', '\uFF03'),
  ...generateForRange('\uFF05', '\uFF0A'),
  ...generateForRange('\uFF0C', '\uFF0F'),
  '\uFF1A': true,
  '\uFF1B': true,
  '\uFF1F': true,
  '\uFF20': true,
  ...generateForRange('\uFF3B', '\uFF3D'),
  '\uFF3F': true,
  '\uFF5B': true,
  '\uFF5D': true,
  ...generateForRange('\uFF5F', '\uFF65'),
}
