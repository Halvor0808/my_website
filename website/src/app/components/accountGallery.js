import React from "react";
import Account from "./account";


const AccountGallery = () => {
    return (
        <div className="">
                <Account
                    href="https://github.com/Halvor0808"
                    src="/github-mark.svg"
                    alt="GitHub Logo"
                    dark_invert="dark:invert"
                    />
                <Account
                    href="https://www.linkedin.com/in/halvor-brunt/"
                    src="/linkedin_96.png"
                    alt="LinkedIn Logo"
                    dark_invert=""
                />  
        </div>
    );
}

export default AccountGallery;