import { NextResponse } from 'next/server';

/**
 * POST /api/lead
 * Handle lead form submissions.
 * Currently returns success without database integration.
 */
export async function POST(request) {
    try {
        const body = await request.json();

        // Validate required fields
        const { name, email, message } = body;

        if (!name || !email || !message) {
            return NextResponse.json(
                { success: false, error: 'Missing required fields' },
                { status: 400 }
            );
        }

        // TODO: Add database integration
        // TODO: Send email notification
        // TODO: Add to CRM

        // Log the lead (for development)
        console.log('New lead received:', {
            name,
            email,
            phone: body.phone || '',
            destination: body.destination || '',
            message,
            timestamp: new Date().toISOString(),
        });

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error('Lead API error:', error);
        return NextResponse.json(
            { success: false, error: 'Internal server error' },
            { status: 500 }
        );
    }
}
