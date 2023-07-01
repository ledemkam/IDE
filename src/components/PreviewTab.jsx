import { useSelector } from "react-redux"

const PreviewTab = () => {

  const tabs = useSelector(state => state.tabs)
  function getCode(lang){
    return tabs.find(obj => obj.lang === lang).code
  }

  const srcDoc = `
   <!DOCTYPE html>
   <html lang="en">
   <head>
     <style>${getCode("css")}</style>
   </head>
   <body>${getCode("html")}</body>
    <script>${getCode("javascript")}</script>
   </html>
  
  `


  return (
     <iframe srcDoc={srcDoc} className="w-full min-h-screen" sandbox="allow-scripts"/>
  )
}
export default PreviewTab