import Head from 'next/head';

export interface MetaConfig {
    title: string
    description: string
    image: string
    url?: string
}

export const CustomHead = ({metaConfig}: {metaConfig: MetaConfig}) => {
    return (
        <Head>
            <link rel="icon" href="/favicon.ico" />
            <link rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css"
            integrity="sha512-HK5fgLBL+xu6dm/Ii3z4xhlSUyZgTT9tuc/hSrtw6uzJOvgRr2a9jyxxT1ely+B+xFAmJKVSTbpM/CuL7qxO8w=="
            crossOrigin="anonymous" />

            <title>{metaConfig.title}</title>
            <meta name="title" content={metaConfig.title} />
            <meta name="description" content={metaConfig.description} />

            <meta property="og:type" content="website" />
            <meta property="og:url" content="https://stephanedondyas.dev" />
            <meta property="og:title" content={metaConfig.title} />
            <meta property="og:description" content={metaConfig.description} />
            <meta property="og:image" content={metaConfig.image} />


            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:creactor" content="@SDondyas" />
            <meta property="twitter:url" content="https://stephanedondyas.dev" />
            <meta property="twitter:title" content={metaConfig.title} />
            <meta property="twitter:description" content={metaConfig.description} />
            <meta property="twitter:image" content={metaConfig.image} />
        </Head>
    )
}