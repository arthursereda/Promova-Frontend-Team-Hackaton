import {FC, PropsWithChildren} from 'react';
import Script from "next/script";

const ArticleWrapper: FC<PropsWithChildren> = ({children}) => {
    return (
        <>
            <article
                className="ml-auto mr-auto prose prose-slate lg:prose-xl xl:prose-xl 2xl:prose-2xl dark:prose-invert prose-img:rounded-xl prose-video:rounded-xl  prose-a:text-blue-600">
                {children}
            </article>
            <Script async src="https://cdn.amomama.de/hackathon/scripts/adv.min.js"/>
        </>
    );
};

export default ArticleWrapper;
