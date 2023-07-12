import React from "react";
import Image from 'next/image'


const Accounts = () => {
    return (
        <div className="mb-32 grid text-center lg:mb-0 lg:grid-cols-4 lg:text-left">
            <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
                <a
                className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
                href="https://github.com/Halvor0808"
                target="_blank"
                rel="noopener noreferrer"
                >
                <Image
                    src="/github-mark.svg"
                    alt="GitHub Logo"
                    className="dark:invert"
                    width={96}
                    height={96}
                    priority
                />
                </a>
            </div>
            <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
                <a
                className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
                href="https://www.linkedin.com/in/halvor-brunt/"
                target="_blank"
                rel="noopener noreferrer"
                >
                <Image
                    src="/linkedin_96.png"
                    alt="LinkedIn Logo"
                    // className="dark:invert"
                    width={96}
                    height={96}
                    priority
                />
                </a>
            </div>
        </div>
    );
}

export default Accounts;