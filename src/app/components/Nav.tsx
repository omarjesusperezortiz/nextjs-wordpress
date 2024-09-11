import ColorModeToggle from '@components/ColorModeToggle';

export default function Nav() {
    return (
        <>
            <nav className='flex justify-end'>
                <ul>
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <a href="/about">About</a>
                    </li>
                </ul>

            </nav>
            <ColorModeToggle/>
        </>
    )
}