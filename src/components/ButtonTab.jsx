import html from '../assets/html.svg'
const ButtonTab = ({id,toggleTab,buttonContent}) => {
  return (
    <button className='flex items-center px-5 py-4 hover:bg-slate-600 focus:bg-slate-600 outline-none' onClick={()=> toggleTab(id)}>
        <img src={html} className='w-5' alt="" />
        <span className='ml-3 text-slate-100 text-xl'>{buttonContent}</span>
    </button>
  )
}
export default ButtonTab