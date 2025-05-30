import '@testing-library/jest-dom'
import {render, screen} from '@testing-library/react'
import App from "./App.tsx";
import {expect, test} from "vitest";

test('「Hello Test」が描画されている', () => {
    console.time("render")
    render(<App/>)
    console.timeEnd("render")

    // console.time("getsimplelabel_nested")
    // expect(screen.getByLabelText('simpletext8')).toBeInTheDocument()
    // console.timeEnd("getsimplelabel_nested")

    // console.time("getsimplelabel_sidebyside")
    // expect(screen.getByLabelText('simpletextsidebyside')).toBeInTheDocument()
    // console.timeEnd("getsimplelabel_sidebyside")

    console.time("getlabelmaterial")
    expect(screen.getByLabelText('text8')).toBeInTheDocument()
    console.timeEnd("getlabelmaterial")

}, { timeout: 60000 })