import { render, screen, fireEvent } from '@testing-library/react'
import { mocked } from 'ts-jest/utils'
import  { signIn, useSession } from 'next-auth/client'
import { useRouter } from 'next/router'


import { SubscribeButton } from '.'

jest.mock("next-auth/client")
jest.mock('next/router')



describe('SignInButton component', () => {
  
  it('renders correctly when user is not authenticated', () => {

    const useSessionMocked = mocked(useSession)

    useSessionMocked.mockReturnValueOnce([null, false])


    render( <SubscribeButton /> )
    expect(screen.getByText('Subscribe now')).toBeInTheDocument()
  })

  it('redirects user to sign in when not authenticated', () => {
    const signInMocked = mocked(signIn)

    const useSessionMocked = mocked(useSession)

    useSessionMocked.mockReturnValueOnce([null, false])


    render(<SubscribeButton />)

    const subscribeButton = screen.getByText('Subscribe now')

    fireEvent.click(subscribeButton)

    expect(signInMocked).toHaveBeenCalled()
  })

  it('redirects to posts when user already has a subscription', () => {
      const useSessionMocked = mocked(useSession)
      const pushMock = jest.fn()
      const useRouterMocked  = mocked(useRouter)

      useSessionMocked.mockReturnValueOnce([

          { 
            user: {
              name: 'John Doe', 
              email: 'john.doe@exemple.com' 
            }, 
            activeSubscription: 'fake-active-subscription', 
            expires: 'fake-express' 
          },
          false
      ])

      useRouterMocked.mockReturnValueOnce({
        push: pushMock,
      } as any) 

      render(<SubscribeButton />)

      const subscribeButton = screen.getByText('Subscribe now')

      fireEvent.click(subscribeButton)

      expect( pushMock ).toHaveBeenCalled()
  })

})


  
