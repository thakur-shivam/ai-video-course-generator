"use client";

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { UserContext } from '@/contexts/user';

function Provider({ children }: { children: React.ReactNode }) {

    const [user, setUser] = useState({});

    useEffect(() => {
        createNewUser();
    }, []);

    const createNewUser = async () => {
        // user API endpoint call to create a new user
        const response = await axios.post('/api/user', {});
        setUser(response.data);
    }
  return (
    <div>
      <UserContext.Provider value={{ user, setUser }}>
        <div className='max-w-7xl mx-auto'>{children}</div>
      </UserContext.Provider>
    </div>
  );
}

export default Provider;
