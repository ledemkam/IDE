import { useSelector } from "react-redux"
import ButtonTab from "./components/ButtonTab"
import Codetab from "./components/Codetab"
import PreviewTab from "./components/PreviewTab"
import { useState } from "react"

function App() {
  const [tabIndex, setTabIndex] = useState(1)

  function toggleTab(id){
    setTabIndex(id)
  }
  const tabs = useSelector(state => state.tabs)
  console.log(tabs)
  return (
    <div className="bg-zinc-900 h-screen flex">
       <div className="flex flex-col w-[175px] shrink-0 text-slate-300 border-r border-slate-200">
         {tabs.map(tab => (
              <ButtonTab key={tab.id} id={tab.id} imgURL={tab.imgURL} buttonContent={tab.buttonContent} toggleTab={toggleTab}/>
         ))}
        
        
        </div>  
        <div className="w-full min-h-screen">
          {tabIndex === 1 ? (
             <PreviewTab/> 
          ) : (
            <Codetab id={tabIndex} code={tabs.find(obj => obj.id === tabIndex).code}/>
          )
        }
        </div>   
    </div>
  )
}

export default App
