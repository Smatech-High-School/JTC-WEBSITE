import jtc from "../../images/footer/jtc.svg";
import facebook from "../../images/socials/facebook.svg";
import instagram from "../../images/socials/instagram.svg";
import linkedin from "../../images/socials/linkedin.svg";
import twitter from "../../images/socials/twitter.svg";
import youtube from "../../images/socials/youtube.svg";

const Footer = () => {
    return (
        <div className="bg-[#000000] text-left">
            <div className="ml-6 md:grid md:grid-cols-4 pt-20">
                <div className="mb-10">
                    <h6 className="text-white mb-8">Powered by</h6>
                    <img 
                        src={jtc}
                        alt="JTC's logo"
                        className="mb-3"
                    />
                    <div className="flex mb-2">
                        <img 
                            src={linkedin}
                            alt="Linkedin logo"
                        />
                        <img 
                            src={twitter}
                            alt="Twitter logo"
                        />
                        <img 
                            src={instagram}
                            alt="Instagram logo"
                        />
                        <img 
                            src={facebook}
                            alt="Facebook logo"
                        />
                        <img 
                            src={youtube}
                            alt="Youtube logo"
                        />
                    </div>
                    
                    <p className="text-white mb-2">Tel: +234 815 675 1887</p>
                    <p className="text-white mb-2">Tel: +234 908 445 6153</p>
                </div>
            

                <div className="mb-10">
                    <h6 className="text-white mb-8">Classes</h6>
                    <p className="text-white mb-2">J.s.s. 1 and 2</p>
                    <p className="text-white mb-2">J.s.s. 3</p>
                    <p className="text-white mb-2">S.s. 1</p>
                    <p className="text-white mb-2">Preparatory Class</p>
                    <p className="text-white mb-2">Jamb Class</p>
                </div>

                <div className="mb-10">
                    <h6 className="text-white mb-8">Classes</h6>
                    <p className="text-white mb-2">J.s.s. 1 and 2</p>
                    <p className="text-white mb-2">J.s.s. 3</p>
                    <p className="text-white mb-2">S.s. 1</p>
                    <p className="text-white mb-2">Preparatory Class</p>
                    <p className="text-white mb-2">Jamb Class</p>
                </div>

                <div className="mb-10">
                    <h6 className="text-white mb-8">Records</h6>
                    <p className="text-white mb-2">O'level exams records</p>
                    <p className="text-white mb-2">Jamb records</p>
                    <p className="text-white mb-2">International exams records</p>
                    <p className="text-white mb-2">Competion records</p>
                </div>
            </div>
        </div>
    )
}

export default Footer;