'use client';
import { SessionProvider } from "next-auth/react"

export default function NextauthSessionProvider({ children }) {
    return (
        <SessionProvider >
            {children}
        </SessionProvider>

    )
}
