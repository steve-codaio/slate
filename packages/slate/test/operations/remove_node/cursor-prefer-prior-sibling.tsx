/** @jsx jsx */
import { jsx } from '../..'

export const input = (
  <editor>
    <element>
      <text />
      <text />
      <cursor />
      <inline>text</inline>
      <text />
    </element>
  </editor>
)
export const operations = [
  {
    type: 'remove_node',
    path: [0, 1],
    node: { text: '' },
  },
]
export const output = (
  <editor>
    <element>
      <text />
      <cursor />
      <inline>text</inline>
      <text />
    </element>
  </editor>
)
