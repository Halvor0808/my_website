import React from "react";
import Account from "./account";


const AccountGallery = () => {
    return (
        <div className="bg-neutral-900 p-3 pt-1 pb-0 rounded-xl m-10 w-auto">
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
    );
}

export default AccountGallery;