import '@testing-library/jest-dom'
import {render, screen} from '@testing-library/react'
import App from "./App.tsx";
import {expect, test} from "vitest";

test('「Hello Test」が描画されている', () => {
    console.time("render")
    render(<App/>)
    console.timeEnd("render")

    // console.time("getsimplelabel")
    // expect(screen.getByLabelText('simpletext8')).toBeInTheDocument()
    // console.timeEnd("getsimplelabel")

    // console.time("getsimplelabel2")
    // expect(screen.getByLabelText('simpletextsidebyside8')).toBeInTheDocument()
    // console.timeEnd("getsimplelabel2")

    console.time("getlabel")
    expect(screen.getByLabelText('text8')).toBeInTheDocument()
    console.timeEnd("getlabel")

    // screen.getByText("label", {name: "text8"})

    // console.time("gettestid")
    // expect(screen.getByTestId('text8')).toBeInTheDocument()
    // console.timeEnd("gettestid")

    // console.time("getbyrole")
    // expect(screen.getByRole('textbox', { name: 'text8' })).toBeInTheDocument()
    // console.timeEnd("getbyrole")

    // console.time("gettext")
    // expect(screen.getByText('button 8')).toBeInTheDocument()
    // console.timeEnd("gettext")
}, { timeout: 60000 })