import Image from 'next/image';


const Account = (props) => {
    return (
        <a
            className="p-3 pt-1 pb-2 rounded-xl m-2 bg-neutral-800 hover:bg-neutral-700 text-gray-300 hover:text-white"
            href={props.href}
            target="_blank"
            rel="noopener noreferrer"
        >
            <h2 className='text-center p-0'>{props.title}</h2>
                <Image
                    src={props.src}
                    alt={props.alt}
                    className={props.dark_invert}
                    width={96}
                    height={96}
                    priority
                />
        </a>
        );
    }
    
    export default Account;