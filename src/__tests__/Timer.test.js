// src/__tests__/Timer.test.js
import { render } from '@testing-library/react'
import Timer from '../Timer'

// Use fake timers
jest.useFakeTimers()

test('Timer increments time every second after mounting', () => {
  const { getByText } = render(<Timer id={1} removeTimer={() => {}} />)

  // Advance timers by 3 seconds
  jest.advanceTimersByTime(3000)

  expect(getByText("3")).toBeInTheDocument()
})

test('Timer clears interval on unmount', () => {
  const clearSpy = jest.spyOn(global, "clearInterval")
  const { unmount } = render(<Timer id={1} removeTimer={() => {}} />)

  unmount()

  expect(clearSpy).toHaveBeenCalled()
  clearSpy.mockRestore()
})
