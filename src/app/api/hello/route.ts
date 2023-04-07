import { NextRequest, NextResponse } from 'next/server';

export const GET = async (request: NextRequest): Promise<NextResponse> => new NextResponse(JSON.stringify({ name: `John Doe ${request.method}` }));
