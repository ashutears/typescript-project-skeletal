import { welcome } from "."

describe('Welcome Message', () => {
  it('includes name in welcome message', () => {
    expect(welcome('Mr. Robot')).toBe('Welcome abord Mr. Robot!');
  })
})
