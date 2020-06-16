import React from 'react'
import { Router } from 'react-router-dom'
import { createMemoryHistory } from 'history'
import { render, fireEvent } from '@testing-library/react'
import App from './App'

describe('Route Component', () => {
   it('full app rendering/navigating', () => {
      const { container, getByText } = render(<App />)
      expect(container.innerHTML).toMatch('Learn React')
      fireEvent.click(getByText(/Covid 19 DashBoar/i))
      expect(container.innerHTML).toMatch('LOGIN')
   })
})
