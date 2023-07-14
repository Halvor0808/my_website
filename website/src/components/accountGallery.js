import React from "react";
import Account from "./account";


const AccountGallery = () => {
    return (
        <div className="flex justify-center">
            <div className="bg-neutral-900 px-3 py-1 rounded-xl m-10 w-auto on inline-block element">
                <h2 className="text-center underline">ACCOUNTS</h2>
                <div className="flex justify-center">
                        <Account
                            title="GitHub"
                            href="https://github.com/Halvor0808"
                            src="/github-mark.svg"
                            alt="GitHub Logo"
                            dark_invert="dark:invert"
                            />
                        <Account
                            title="LinkedIn"
                            href="https://www.linkedin.com/in/halvor-brunt/"
                            src="/linkedin_96.png"
                            alt="LinkedIn Logo"
                            dark_invert=""
                            />  
                </div>
            </div>
        </div>
    );
}

export default AccountGallery;