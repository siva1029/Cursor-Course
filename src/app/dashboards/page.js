'use client';
import { useState, useEffect } from 'react';
import { useApiKeys } from '@/hooks/useApiKeys';
import { Header } from '@/components/dashboard/Header';
import { PlanSection } from '@/components/dashboard/PlanSection';
import { ApiKeysTable } from '@/components/dashboard/ApiKeysTable';
import { CreateKeyModal } from '@/components/dashboard/CreateKeyModal';
import { CopyNotification } from '@/components/common/CopyNotification';

export default function Dashboard() {
  const {
    apiKeys,
    message,
    fetchApiKeys,
    createApiKey,
    updateApiKey,
    deleteApiKey
  } = useApiKeys();

  const [showModal, setShowModal] = useState(false);
  const [visibleKeys, setVisibleKeys] = useState(new Set());
  const [showCopyNotification, setShowCopyNotification] = useState(false);
  const [editingKey, setEditingKey] = useState(null);

  useEffect(() => {
    fetchApiKeys();
  }, []);

  const handleCreate = async (formData) => {
    const result = await createApiKey(formData);
    if (result.success) {
      setShowModal(false);
    }
  };

  const handleUpdate = async (keyId, updates) => {
    const result = await updateApiKey(keyId, updates);
    if (result.success) {
      setEditingKey(null);
    }
  };

  const handleDelete = async (keyId) => {
    if (!confirm('Are you sure you want to delete this API key?')) return;
    await deleteApiKey(keyId);
  };

  const toggleKeyVisibility = (keyId) => {
    setVisibleKeys(prev => {
      const newSet = new Set(prev);
      if (newSet.has(keyId)) {
        newSet.delete(keyId);
      } else {
        newSet.add(keyId);
      }
      return newSet;
    });
  };

  const copyToClipboard = async (key) => {
    try {
      await navigator.clipboard.writeText(key);
      setShowCopyNotification(true);
      setTimeout(() => setShowCopyNotification(false), 2000);
    } catch (error) {
      console.error('Error copying to clipboard:', error);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-8 py-6">
      <Header />
      <PlanSection />
      
      <div className="mb-12">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <h2 className="text-xl font-medium">API Keys</h2>
            <button 
              onClick={() => setShowModal(true)} 
              className="text-gray-400 hover:text-gray-600"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd"/>
              </svg>
            </button>
          </div>
        </div>

        <p className="text-gray-600 text-sm mb-6">
          The key is used to authenticate your requests to the <a href="#" className="underline">Research API</a>.
          To learn more, see the <a href="#" className="underline">documentation</a> page.
        </p>

        <ApiKeysTable 
          apiKeys={apiKeys}
          visibleKeys={visibleKeys}
          toggleKeyVisibility={toggleKeyVisibility}
          onEdit={setEditingKey}
          onDelete={handleDelete}
          onCopy={copyToClipboard}
        />
      </div>

      <div className="flex justify-between items-center py-8">
        <p className="text-gray-600">
          Have any questions, feedback or need support? We'd love to hear from you!
        </p>
        <button className="px-6 py-2 border border-gray-200 rounded-full hover:bg-gray-50 transition-colors">
          Contact us
        </button>
      </div>

      <CreateKeyModal 
        show={showModal}
        onClose={() => setShowModal(false)}
        onCreate={handleCreate}
      />

      {showCopyNotification && <CopyNotification />}
    </div>
  );
}
