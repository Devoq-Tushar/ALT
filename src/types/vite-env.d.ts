import React from 'react';

declare global {
    namespace JSX {
        interface IntrinsicElements {
            'lite-youtube': React.DetailedHTMLProps<
                React.HTMLAttributes<HTMLElement> & {
                    videoid?: string;
                    params?: string;
                },
                HTMLElement
            >;
        }
    }
}

export { };
