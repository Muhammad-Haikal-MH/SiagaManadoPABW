import { PropsWithChildren } from 'react';

export default function Layout({ children }: PropsWithChildren) {
    return (
        <div className="max-w-[1400px] mx-auto px-4 py-6">
            {children}
        </div>
    );
}
