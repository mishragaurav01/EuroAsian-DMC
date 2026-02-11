import Layout from '@/components/layout/Layout';
import PrivacyPolicyContent from '@/components/sections/PrivacyPolicyContent';

export const metadata = {
    title: 'Privacy Policy',
    description: 'EuroAsianDMC Privacy Policy - Learn how we collect, use, share, and protect your information when you partner with us or use our services.',
};

/**
 * Privacy Policy Page
 */
export default function PrivacyPolicyPage() {
    return (
        <Layout>
            <PrivacyPolicyContent />
        </Layout>
    );
}
