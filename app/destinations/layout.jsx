import Layout from '@/components/layout/Layout';

export default function DestinationsLayout({ children }) {
    return (
        <Layout>
            <div className="min-h-screen bg-white">
                {children}
            </div>
        </Layout>
    );
}
