import { supabase } from '@/lib/supabase'

export async function GET() {
  console.log('Supabase URL:', process.env.NEXT_PUBLIC_SUPABASE_URL); // Debug log
  try {
    const { data, error } = await supabase
      .from('api_keys')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) throw error;

    return new Response(JSON.stringify(data), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error:', error);
    return new Response(JSON.stringify({ error: 'Failed to fetch keys' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}

export async function POST(request) {
  try {
    const data = await request.json();
    
    // Generate a unique API key
    const apiKey = `key_${Math.random().toString(36).substring(2)}${Math.random().toString(36).substring(2)}`;
    
    const newKey = {
      name: data.name,
      type: data.type,
      key: apiKey,
      usage: 0,
      created_at: new Date().toISOString()
    };

    const { data: insertedKey, error } = await supabase
      .from('api_keys')
      .insert([newKey])
      .select()
      .single();

    if (error) {
      console.error('Supabase error:', error);
      throw error;
    }

    return new Response(JSON.stringify(insertedKey), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error creating key:', error);
    return new Response(JSON.stringify({ error: 'Failed to create key' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
