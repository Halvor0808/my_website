import React from "react";
import Image from 'next/image'


const Accounts = () => {
    return (
        <div className="">
            <div className="">
                <a
                className=""
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
            <div className="">
                <a
                className=""
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