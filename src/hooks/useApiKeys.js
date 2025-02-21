import { useState } from 'react';
import { supabase } from '@/lib/supabase';

export function useApiKeys() {
  const [apiKeys, setApiKeys] = useState([]);
  const [message, setMessage] = useState('');

  const fetchApiKeys = async () => {
    try {
      const { data, error } = await supabase
        .from('api_keys')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setApiKeys(data || []);
    } catch (error) {
      console.error('Error fetching API keys:', error);
    }
  };

  const createApiKey = async (formData) => {
    try {
      const { data, error } = await supabase
        .from('api_keys')
        .insert([{
          name: formData.name,
          type: formData.type,
          key: `tvly-${formData.type}-${Math.random().toString(36).substring(2)}`,
          usage: 0
        }])
        .select();

      if (error) throw error;
      setApiKeys([...apiKeys, data[0]]);
      return { success: true, data: data[0] };
    } catch (error) {
      console.error('Error creating API key:', error);
      return { success: false, error };
    }
  };

  const updateApiKey = async (keyId, updates) => {
    try {
      const response = await fetch(`/api/keys/${keyId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updates),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to update API key');
      }

      const updatedKey = await response.json();
      setApiKeys(prevKeys => 
        prevKeys.map(key => key.id === updatedKey.id ? updatedKey : key)
      );
      return { success: true, data: updatedKey };
    } catch (error) {
      console.error('Error updating key:', error);
      return { success: false, error };
    }
  };

  const deleteApiKey = async (keyId) => {
    try {
      const { error } = await supabase
        .from('api_keys')
        .delete()
        .eq('id', keyId);

      if (error) throw error;
      setApiKeys(apiKeys.filter(key => key.id !== keyId));
      return { success: true };
    } catch (error) {
      console.error('Error deleting API key:', error);
      return { success: false, error };
    }
  };

  return {
    apiKeys,
    message,
    setMessage,
    fetchApiKeys,
    createApiKey,
    updateApiKey,
    deleteApiKey
  };
} 