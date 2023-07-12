import React from "react";
import Image from 'next/image'


const Profile = () => {
    return (
        <div id="profile">
            <div class="profile-pic">
                <Image
                    src="/halvor_brunt.jpeg"
                    alt="Picture of Halvor Brunt"
                    width={200}
                    height={400}
                    priority
                    />
            </div>
            <div id="introduction">
                <h2>Hello and welcome to my website</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Et tortor at risus viverra adipiscing at. Vulputate dignissim suspendisse in est ante. Sit amet aliquam id diam maecenas. Vel quam elementum pulvinar etiam non quam lacus suspendisse.</p>
            </div> 
        </div>
    );
}

export default Profile;