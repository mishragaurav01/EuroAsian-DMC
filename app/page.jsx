import Layout from '@/components/layout/Layout';
import Hero from '@/components/sections/Hero';
import SocialProof from '@/components/sections/SocialProof';
import Destinations from '@/components/sections/Destinations';
import About from '@/components/sections/About';
import Services from '@/components/sections/Services';
import Testimonials from '@/components/sections/Testimonials';
import LeadCTA from '@/components/sections/LeadCTA';

/**
 * Homepage - Server Component
 * Composes all homepage sections in the correct order.
 * Single h1 in Hero section for SEO.
 */
export default function HomePage() {
    return (
        <Layout>
            <Hero />
            <SocialProof />
            <Destinations />
            <About />
            <Services />
            <Testimonials />
            <LeadCTA />
        </Layout>
    );
}
