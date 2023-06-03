import React, { useEffect } from 'react';
import { db } from '../firebase/config';
import { useState } from 'react';
import { colRef } from '../firebase/config';
import { docs, onSnapshot, query, where } from 'firebase/firestore';
import { useAuthContext } from './useAuthContext';
function useCollection(collection) {
  const { user } = useAuthContext();
  const [documents, setDocuments] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const q = query(colRef, where('uid', '==', user.uid));
    const unsub = onSnapshot(q, (querySnapshot) => {
      let results = [];
      querySnapshot.docs.forEach((doc) => {
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
