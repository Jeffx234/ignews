import { render, screen } from '@testing-library/react'
import  Posts, { getStaticProps}  from '../../pages/posts'
import { mocked } from 'ts-jest/utils'
import { stripe } from '../../services/stripe'

import { getPrismicClient } from '../../services/prismic'

const posts = [
  { slug: 'my-new-post', title: 'My New Post', excerpt: 'Post excerpt', updatedAt: '10 de Abril'}
]

jest.mock('')

describe('Post page', () => {
  it('renders correctly', () => {
    render(<Posts posts={posts} />)

    expect(screen.getByText('My New Post')).toBeInTheDocument()
  })

  it("loads inital data", async () => {
      const getPrismicClientMocked = mocked(getPrismicClient)

      getPrismicClientMocked.mockImplementationOnce({
        query: jest.fn().mockResolvedValueOnce({
          results: [
            {
              uid: 'my-new-post',
              data: {
                title: [
                  { type: 'heading', text: 'My new post'}
                ],
                content: [
                  { tpe: 'paragraph', text: 'Post excerpt'}
                ],
              },
              last_publication_date: '04-16-2022'
            }
          ]
        })
      } as any)


      const response = await getStaticProps({})

      expect(response).toEqual(
        expect.objectContaining({
          props: {
            posts: [{
              slug: 'my-new-post',
              title: 'My new post',
              excerpt: 'Post excerpt',
              updatedAt: '01 de abril de 2022',
            }]
          }
        })
      )
  })
})