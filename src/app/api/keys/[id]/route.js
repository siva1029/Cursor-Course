import { supabase } from '@/lib/supabase'

export async function PUT(request, { params }) {
  try {
    // Wait for params to be resolved
    const id = await params.id;
    const data = await request.json();

    const { data: updatedKey, error } = await supabase
      .from('api_keys')
      .update({ 
        name: data.name,
        type: data.type 
      })
      .eq('id', id)
      .select()
      .single();

    if (error) {
      console.error('Supabase error:', error);
      throw error;
    }

    return new Response(JSON.stringify(updatedKey), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error updating key:', error);
    return new Response(JSON.stringify({ error: 'Failed to update key' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}

export async function DELETE(request, { params }) {
  try {
    // Wait for params to be resolved
    const id = await params.id;
    
    const { error } = await supabase
      .from('api_keys')
      .delete()
      .eq('id', id);

    if (error) throw error;

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error:', error);
    return new Response(JSON.stringify({ error: 'Failed to delete key' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
