import {FC, PropsWithChildren} from 'react';

const ArticleWrapper: FC<PropsWithChildren> = ({children}) =>
    <article
        className="ml-auto mr-auto p-4 pt-0 prose prose-slate lg:prose-xl xl:prose-xl 2xl:prose-2xl dark:prose-invert prose-img:rounded-xl prose-video:rounded-xl  prose-a:text-blue-600">
        {children}
    </article>;

export default ArticleWrapper;
