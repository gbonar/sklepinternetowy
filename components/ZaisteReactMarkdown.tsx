import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import { MarkdownResult } from "../utils";

export const ZaisteReactMarkdown = ({children}: 
  {children: MarkdownResult} ) => {
    return (
      <MDXRemote 
      {...children}
        components={{
          a: ({ href, ...props }) => {
            if (!href) {
              return <a {...props}></a>;
            }
  
            return (
              <Link href={href}>
                <a {...props}></a>
              </Link>
            );
          },
        }}
      ></MDXRemote>
    );
  };
