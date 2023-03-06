import React from 'react'
import { render } from '@testing-library/react'
import WordsForm from './WordsForm'

it('renders without crashing', () => {
    render(<WordsForm />)
})

it('matches the snapshot', () => {
    const {asFragment} = render(<WordsForm />)
    expect(asFragment()).toMatchSnapshot()
})