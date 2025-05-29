import { Fragment } from 'react';
import './App.css'
import {TextField} from "@mui/material";

function App() {
    return (<>
            {Array.from({length: 300}, (_, i) => (
                <Fragment key={i}>
                    <TextField
                        id = {"textid" + i}
                        label={"text" + i}
                        data-testid={"text" + i}
                        variant="outlined"
                        defaultValue={"value" + i}
                    />

                    {/*<label>{"simpletext" + i}<input/></label>*/}

                    {/*<label htmlFor={"simpletextid" + i}>*/}
                    {/*    {"simpletextsidebyside" + i}*/}
                    {/*</label>*/}
                    {/*<input id={"simpletextid" + i}/>*/}
                </Fragment>
            ))}
    </>)
}

export default App
