import React from 'react'
import { UserLoginForm } from './UserLoginForm'
import { shallow } from 'enzyme'

describe('UserLoginForm Component', () => {
  let wrapper
  let mockUser
  let mockUserSignIn = jest.fn()

  beforeEach(() => {
    wrapper = shallow(
      <UserLoginForm
        user={mockUser}
        userSignIn={mockUserSignIn} />
    )
    mockUser = {
      email: 'blah@gmail.com',
      id: 1806,
      matchId: 111111
    }
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })
})