import { FC } from "react";
import Head from 'next/head';

export interface MetaOptions {
    title?: string,
    description?: string,
    image?: string,
}

const Meta: FC<{ options?: MetaOptions }> = ({ options }) => {
    return (
        <Head>
            { options?.title && (<meta name="og:title" content={ options.title } />) }
            { options?.description && (<meta name="description" content={ options.description } />) }
            { options?.image && (<meta property="og:image" content={ options.image } />) }
            { options && (<meta name="twitter:card" content="summary_large_image" />) }
        </Head>
    )
}
export default Meta;