/**
Login page layout
**/
import { ReactNode } from 'react';

interface AuthLayoutProps {
    children: ReactNode;
}

export default function AuthLayout({ children }: Readonly<AuthLayoutProps>) {
    return <div>{children}</div>;
}
