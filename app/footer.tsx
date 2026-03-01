import Image from "next/image";

const Footer = () => {
    return (
            <footer className='flex w-full flex-col items-center bg-white p-20'>
                <div className='container w-full' style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-evenly'}}>
                    <div className='column' style={{color: 'black'}}>
                        <p>YEP!@Brown</p>
                        <header style={{color: 'black', fontSize: '30px', fontWeight: 'bold'}}>
                            Empowering Student Entrepreneurs
                        </header>
                    </div>

                     <div style={{borderRight: '1px solid black'}}></div>
                    <div className='column' style={{color: 'black'}}>
                        <p>(401) 863-1000</p>
                        <p>yep@brown.edu</p>
                        <p>Nelson Center For Entrepreneurship, Euclid Avenue, Providence, RI, USA</p>
                        
                        <div className='container' style={{display: 'flex', gap: '30px'}}>
                            <Image
                                   className=""
                                   src="/insta.svg"
                                   alt="Instagram"
                                   width={40}
                                   height={40}
                                   priority
                                 />
                            <Image
                                   className=""
                                   src="/linkedin.png"
                                   alt="LinkedIn"
                                   width={40}
                                   height={40}
                                   priority
                                 />
                        </div>

                    </div>
                    <div className='column' style={{color: 'black'}}>
                        <p>Privacy Policy</p>
                        <p>Accessibility Statement</p>
                        <p>Shipping Policy</p>
                        <p>Terms & Conditions</p>
                        <p>Refund Policy</p>
                    </div>
                </div>
            </footer>
        )
}
export default Footer;