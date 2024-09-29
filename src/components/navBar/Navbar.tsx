export default function NavBar() {

    return (
        <nav className='sticky top-0 z-[999] text-primary-foreground flex justify-between items-center gap-12 px-4 min-h-20 h-[96px] shadow-default'>
            <a href="/" title="home">
                <img src="src/assets/images/logo.png" className="h-[64px]" />
            </a>
            <div className="flex justify-center gap-4 items-center">
                <a href="/" title="home" className='font-semibold text-xl'>Current</a>
                <a href="/forecast" title="forecast" className='font-semibold text-xl'>Forecast</a>
            </div>
            <div></div>
        </nav>
    )
}
