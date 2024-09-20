
export const OtherButton = ({children, className='', ...args}) => {
    return (
        <button className={`bg-[#f7f7f7] border border-gray-500/10 py-2 px-5 text-[#333] rounded-md overflow-hidden uppercase font-bold text-[12px] h-fit ${className}`}{...args}>
            {children}
        </button>
      )
}