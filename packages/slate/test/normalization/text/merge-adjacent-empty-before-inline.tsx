/** @jsx jsx */
import { jsx } from '../..'

export const input = (
  <editor>
    <block>
      <text>not empty</text>
      <text a />
      <cursor />
      <inline>inline</inline>
      <text />
    </block>
  </editor>
)
export const output = (
  <editor>
    <block>
      <text>
        not empty
        <cursor />
      </text>
      <inline>inline</inline>
      <text />
    </block>
  </editor>
)
