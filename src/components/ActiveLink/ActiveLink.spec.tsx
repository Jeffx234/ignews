import { render, screen } from '@testing-library/react'
import { ActiveLink } from '.'


// Imitação
jest.mock('next/router', () => {
  return{
    useRouter() {
      return {
        asPath: '/'
      }
    }
  }
})


describe('ActiveLink component', () => {
  test('active link renders correctyle', () => {
    render(
      <ActiveLink href="/" activeClassName="ative">
        <a>Home</a>
      </ActiveLink>
    )
      expect(screen.getByText('Home')).toBeInTheDocument()
  })
  
  
  
  
  test('active link is receiving active class', () => {
    render(
      <ActiveLink href="/" activeClassName="active">
        <a> Home </a>
      </ActiveLink>
    )
  
    expect(screen.getByText('Home')).toHaveClass('active')
  })
})

// 1°teste
