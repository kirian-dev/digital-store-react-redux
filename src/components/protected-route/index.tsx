import { useAuth } from '@/shared/hooks/useAuth';
import { FC, PropsWithChildren, ReactElement } from 'react';
import { Navigate } from 'react-router-dom';

export const ProtectedRouteUser: FC<PropsWithChildren> = ({ children }) => {
	const { user } = useAuth();

	if (!user) {
		return <Navigate to="/auth/login" />;
	}

	return children as ReactElement;
};
