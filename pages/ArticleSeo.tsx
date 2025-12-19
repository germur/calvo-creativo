import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Link } from 'react-router-dom';
// @ts-ignore
import content from './seo-no-murio-humo.md?raw';

const ArticleSeo = () => {
    return (
        <div className="bg-[#f0f0f0] min-h-screen py-16 px-6 md:px-12 text-black font-mono">
            <div className="max-w-3xl mx-auto bg-white p-8 md:p-12 border-2 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                <Link to="/liner-notes" className="inline-block mb-8 font-mono text-sm uppercase tracking-widest hover:text-[#f9f506] transition-colors py-2 px-4 bg-black text-white hover:bg-black/90">← Volver al Index</Link>

                <div className="prose prose-lg prose-headings:font-headline prose-headings:uppercase prose-headings:tracking-tight prose-p:font-mono prose-p:text-sm prose-img:border-2 prose-img:border-black prose-img:shadow-[4px_4px_0px_0px_rgba(0,0,0,0.5)] max-w-none prose-a:text-[#f20d0d] hover:prose-a:text-black">
                    <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
                </div>
            </div>
        </div>
    );
};

export default ArticleSeo;
