import React from "react";
import Image from 'next/image'


const Account = (props) => {
    const dark_invert = props.dark_invert
    return (
        <>
            <a
                className=""
                href={props.href}
                target="_blank"
                rel="noopener noreferrer"
                >
                <Image
                    src={props.src}
                    alt={props.alt}
                    className={dark_invert}
                    width={96}
                    height={96}
                    priority
                />
                </a>
        </>
        );
    }
    
    export default Account;