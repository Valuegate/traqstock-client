import React, {useEffect} from 'react';
import { useAuth } from './userAuth';
import { Navigate } from 'react-router-dom';


function RequireManager({ redirect, children }) {
  const { user } = useAuth();
  const { role_id } = user;

  useEffect(() => {
  }, [user, role_id])

  if (!user || !role_id) {
    return <Navigate to='/login' />
  }

  if (role_id < 4) {
    return <Navigate to={redirect || "/dashboard/farm-data/table"} replace />;
  }

  return children;
}

export default RequireManager;
