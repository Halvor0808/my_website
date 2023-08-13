

const Footer = () => {
    return (
        <footer className="text-xs mt-6">
            <div className="bg-neutral-800 border-t-neutral-400/50 border-t-2 border-solid p-4 pt-2"> {/* h-16*/}
                <table>
                    <tbody>
                    <tr>
                        <td>Email: </td>
                        <td><a href="mailto:halvor@brunt.no">halvor@brunt.no</a></td>
                    </tr>
                    <tr>
                        <td>Phone: </td>
                        <td>(+47) 938 19 399</td>
                    </tr>
                    <tr>
                        <td>Location: </td>
                        <td>Norway</td>
                    </tr>
                    </tbody>
                </table> 
            </div>
        </footer>
    );
}


export default Footer;