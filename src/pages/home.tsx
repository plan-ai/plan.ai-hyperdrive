import type { NextPageWithLayout } from "@/types";
import { NextSeo } from "next-seo";
import RootLayout from "@/layouts/_root-layout";

const HomePage: NextPageWithLayout = () => {
    return (
        <>
            <NextSeo title="Home" description="Plan" />
            <div>Home Page</div>
        </>
    );
};

HomePage.getLayout = function getLayout(page) {
    return <RootLayout>{page}</RootLayout>;
};

export default HomePage;
