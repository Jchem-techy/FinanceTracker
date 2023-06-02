import React, { useEffect } from 'react';
import { db } from '../firebase/config';
import { useState } from 'react';
import { colRef } from '../firebase/config';
import { doc, onSnapshot } from 'firebase/firestore';
function useCollection(collection) {
  const [documents, setDocuments] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const q = query(colRef);
    const unsub = onSnapshot(q, (querySnapshot) => {
      let results = [];
      querySnapshot.forEach((doc) => {
        results.push({ ...doc.data(), id: doc.id });
      });
      // update state
      setDocuments(results);
      setError(null);
    });

    return () => unsub();
  }, [collection]);

  return { documents, error };
}

export default useCollection;
