// src/__tests__/Timer.test.js
import React from 'react'
import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { spy } from 'sinon'
import Timer from '../Timer'

configure({ adapter: new Adapter() })

test('calls componentDidMount', () => {
  spy(Timer.prototype, 'componentDidMount')
  const wrapper = shallow(<Timer id={1} removeTimer={() => {}} />)

  expect(Timer.prototype.componentDidMount.calledOnce).toBe(true)
  wrapper.unmount()
})

test('calls componentWillUnmount', () => {
  spy(Timer.prototype, 'componentWillUnmount')
  const wrapper = shallow(<Timer id={1} removeTimer={() => {}} />)
  wrapper.unmount()

  expect(Timer.prototype.componentWillUnmount.calledOnce).toBe(true)
})
