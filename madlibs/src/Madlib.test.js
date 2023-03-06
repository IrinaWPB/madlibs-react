import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import Madlib from './Madlib'
import Story from './Story'

it('renders without crashing', () => {
    render(<Madlib />)
})

it('matches the snapshot', () => {
    const {asFragment} = render(<Madlib />)
    expect(asFragment()).toMatchSnapshot()
})

it('renders the form at start', () => {
    const {queryByText} = render(<Madlib />)
    expect(queryByText('Get a Story')).toBeInTheDocument()
})

it('renders Story component on submit', () => {
    const {queryByText, queryByPlaceholderText} = render(<Madlib />)
    const submitBtn = queryByText('Get a Story')
   
    const i1 = queryByPlaceholderText('name')
    const i2 = queryByPlaceholderText('adjective')
    const i3 = queryByPlaceholderText('noun 1')
    const i4 = queryByPlaceholderText('verb')
    const i5 = queryByPlaceholderText('noun 2')

    fireEvent.change(i1, { target: { value: "A" }});
    fireEvent.change(i2, { target: { value: "B" }});
    fireEvent.change(i3, { target: { value: "C" }});
    fireEvent.change(i4, { target: { value: "D" }});
    fireEvent.change(i5, { target: { value: "E" }});

    fireEvent.click(submitBtn)

    const restartBtn = queryByText('Restart')

    expect(restartBtn).toBeInTheDocument()
    expect(queryByText('Please, excuse A who is far too B to attend C class and wants to D and play with a E.')).toBeInTheDocument()
   
    fireEvent.click(restartBtn)
    //back to form
    expect(restartBtn).not.toBeInTheDocument()
    expect(queryByText('Get a Story')).toBeInTheDocument()


})