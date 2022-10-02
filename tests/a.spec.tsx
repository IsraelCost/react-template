import { render } from '@testing-library/react'

describe('', () => {
  test('', () => {
    const { getByText } = render(<h1>Hello World!</h1>)
    expect(getByText('Hello World!')).toBeTruthy()
  })
})
