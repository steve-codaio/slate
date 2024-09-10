import assert from 'assert'
import { PUNCTUATION_MAP } from '../../src/utils/punctuation'

describe('PUNCTUATION_MAP', () => {
  it('should have the correct config for simple entries', () => {
    assert.equal(PUNCTUATION_MAP['\ua95f'], true) // aka '꥟'
    assert.equal(PUNCTUATION_MAP['꥟'], true) // aka '\ua95f'
  })

  it('should have the correct config for ranges', () => {
    assert.equal(PUNCTUATION_MAP['\u0021'], true) // aka '!'
    assert.equal(PUNCTUATION_MAP['!'], true) // aka '\u0021'

    assert.equal(PUNCTUATION_MAP['\u0022'], true) // aka '"'
    assert.equal(PUNCTUATION_MAP['"'], true) // aka '\u0022'
  })

  it('should not consider alphabet characters as punctuation', () => {
    assert.equal(PUNCTUATION_MAP.a, undefined)
  })
})
