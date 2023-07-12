import Image from 'next/image';


const Account = (props) => {
    const dark_invert = props.dark_invert;
    const newClassName = dark_invert + ''; // Can add more to class here
    return (
        <a
            className="p-3 pt-1 pb-2 rounded-xl bg-neutral-800 m-2"
            href={props.href}
            target="_blank"
            rel="noopener noreferrer"
        >
            <h2 className='text-center p-0 text-white'>{props.title}</h2>
                <Image
                    src={props.src}
                    alt={props.alt}
                    className={dark_invert}
                    width={96}
                    height={96}
                    priority
                />
        </a>
        );
    }
    
    export default Account;