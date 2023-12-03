


export default function LangToggle() {
  return (
    <div className="w-30 h-10 gap-3 rounded-2xl flex flex-row justify-around items-end">
        <div className="px-3 py-1 rounded-full border-2 text-white hover:bg-white/80 hover:text-black cursor-pointer">English</div>
        <div className="px-3 py-1 rounded-full border-2 bg-white text-black hover:bg-white/80 hover:text-black cursor-pointer">French</div>
    </div>
  )
}