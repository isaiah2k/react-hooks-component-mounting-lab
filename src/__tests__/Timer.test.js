import React from 'react';
import { configure, shallow } from 'enzyme';
import { spy, stub, useFakeTimers } from 'sinon'
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

import { render } from '@testing-library/react'
import Timer from '../Timer';

jest.useFakeTimers()

test('Timer increments time every second after mounting', () => {
  const { getByText } = render(<Timer id={1} removeTimer={() => {}} />)
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