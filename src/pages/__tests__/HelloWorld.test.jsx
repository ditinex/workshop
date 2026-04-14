import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import HelloWorld from '../HelloWorld.jsx'

describe('HelloWorld', () => {
  it('renders without crashing', () => {
    render(<HelloWorld />)
  })

  it('displays the Hello, World! heading', () => {
    render(<HelloWorld />)
    expect(screen.getByText('Hello, World!')).toBeInTheDocument()
  })

  it('displays the welcome message', () => {
    render(<HelloWorld />)
    expect(
      screen.getByText('Welcome to your first page. Built with React & Tailwind CSS.')
    ).toBeInTheDocument()
  })

  it('displays the React badge', () => {
    render(<HelloWorld />)
    expect(screen.getByText('React')).toBeInTheDocument()
  })

  it('displays the Tailwind badge', () => {
    render(<HelloWorld />)
    expect(screen.getByText('Tailwind')).toBeInTheDocument()
  })

  it('displays the Vite badge', () => {
    render(<HelloWorld />)
    expect(screen.getByText('Vite')).toBeInTheDocument()
  })
})
