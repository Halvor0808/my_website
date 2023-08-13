import React from "react";

const Profile = () => {
    return (
        <div>
            <div id="profile" className="w-3/4 m-4 text-sm text-left flex">
                <img
                src="/halvor_brunt.jpeg"
                alt="Picture of Halvor Brunt"
                width="260"
                height="auto"
                className="mx-6 min-w-120 max-w-260 border-2 border-neutral-200 rounded-lg flex-shrink-0 object-contain"
                priority="true"
                />
                <p className="">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Et tortor at risus viverra adipiscing at. Vulputate dignissim suspendisse in est ante. Sit amet aliquam id diam maecenas. Vel quam elementum pulvinar etiam non quam lacus suspendisse.
                </p>
            </div>
        </div>
    );
}

export default Profile;