"use client";

import { useRouter, useSearchParams } from "next/navigation";
import React, { Suspense } from "react";


type SearchComponentOption = {
    placeholder: string
    path: string
    queryName: string
}


function SearchComponent({placeholder, path, queryName}: SearchComponentOption) {
    const router = useRouter();
    const searchParams = useSearchParams();

    const Submit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const search = e.currentTarget.elements.namedItem("search");
        if (search instanceof HTMLInputElement) {
            const params = new URLSearchParams();
            params.set(queryName, search.value.trim());
            router.push(`${path}?${params.toString()}`);
        }
    }



    return (
        <>
            <form onSubmit={Submit}>
                <input
                    type="text"
                    name="search"
                    defaultValue={searchParams.get(queryName) ?? undefined}
                    placeholder={placeholder}

                />
            </form>
        </>
    )
}

export default function Component({placeholder, path, queryName}: SearchComponentOption) {
    return (
        <Suspense>
            <SearchComponent placeholder={placeholder} path={path} queryName={queryName} />
        </Suspense>
    )
}