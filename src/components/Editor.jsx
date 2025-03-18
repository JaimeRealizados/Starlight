import { RoomProvider } from '@liveblocks/react';
import { Editor } from '@liveblocks/yjs';
import { useMemo } from 'react';
import { WebrtcProvider } from 'y-webrtc';

export default function DocumentEditor({ documentId }) {
  // Configuración del roomId único por documento
  const roomId = useMemo(() => `doc-${documentId}`, [documentId]);

  return (
    <RoomProvider
      id={roomId}
      initialPresence={{}}
      publicApiKey={import.meta.env.PUBLIC_LIVEBLOCKS_KEY}
    >
      <Editor />
    </RoomProvider>
  );
}