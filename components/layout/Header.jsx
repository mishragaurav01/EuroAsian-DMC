import Navbar from './Navbar';

/**
 * Header component - just the navbar overlay.
 * No top bar needed.
 */
export default function Header() {
    return (
        <header className="absolute top-0 left-0 right-0 z-50">
            <Navbar />
        </header>
    );
}
