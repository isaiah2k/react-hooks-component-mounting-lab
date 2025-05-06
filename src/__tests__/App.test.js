import React from 'react'
import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { spy } from 'sinon'

import App from '../App'
import Timer from '../Timer'

configure({ adapter: new Adapter() })

test("<App /> calls componentDidMount and adds a Timer", () => {
  spy(App.prototype, 'componentDidMount')
  const appWrapper = shallow(<App />)

  expect(App.prototype.componentDidMount.calledOnce).toBe(true)
  expect(appWrapper.find('.TimerGrid').length).toBe(1)
  expect(appWrapper.state().timerIDs.length).toBe(1)

  appWrapper.unmount()
})

describe('<Timer />', () => {
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
})
