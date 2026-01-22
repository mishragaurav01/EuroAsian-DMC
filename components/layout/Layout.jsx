import Header from './Header';
import Footer from './Footer';

/**
 * Layout component that wraps Header and Footer around page content.
 * Use this component on all pages to maintain consistent structure.
 */
export default function Layout({ children }) {
    return (
        <>
            <Header />
            <main>{children}</main>
            <Footer />
        </>
    );
}
