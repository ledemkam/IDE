import {  createSlice } from "@reduxjs/toolkit"
import {monitor,html,css,js} from "../assets/index"

const initialState = [
   {
    id: 1,
    imgURL: monitor,
    buttonContent: "Preview",
   },
   {
    id: 2,
    lang:"html",
    imgURL: html,
    buttonContent: "HTML",
    code: `<div>
     <h1>Codier-Editor mit React</h1>
     <p>direkt in Ihrem Browser codieren</p>
    </div>`
   },
   {
    id: 3,
    lang:"css",
    imgURL: css,
    buttonContent: "CSS",
    code: `body{
        font-family: roboto,sans-serif;
        padding: 25px;
        color: #fff;
    }`
   },
   {
    id: 4,
    lang: "javascript",
    imgURL: js,
    buttonContent: "javascript",
    code: `console.log("Hello World!");`
   },

]

export const codeUpdater = createSlice({
    name: 'code-updater',
    initialState,
    reducers: {
        updateCode: (state, action) => {
           state.find(obj => obj.id === action.payload.id).code = action.payload.value
        } 
   }
})

export const {updateCode} = codeUpdater.actions
export default codeUpdater.reducer