import { useDispatch } from "react-redux"
import { updateCode } from "../features/tabs"

const Codetab = ({code,id}) => {
  const dispatch = useDispatch()
  const handleTextarea = e => {
    dispatch(updateCode({id, value: e.target.value}))
  }
  console.log(updateCode({id, value: "dert"}))
  return (
    <textarea spellCheck="false" className="bg-zinc-900 text-slate-200 text-xl p-8 block h-full w-full focus:outline-none resize-none" value={code} onChange={handleTextarea}>
    </textarea>
  )
}
export default Codetab