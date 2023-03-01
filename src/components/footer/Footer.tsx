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
                <div className="pb-10">
                    <h6 className="text-white mb-8 text-[14px]">Powered by</h6>
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
                    
                    <div className="text-white mb-2 text-[14px]">
                        <p>Tel: +234 815 675 1887</p>
                        <p>Tel: +234 908 445 6153</p>
                    </div>

                    <p className="text-white mt-10 text-[16px]">2023 JTC. All rights reserved.</p>
                </div>


                <div className="pb-10">
                    <h6 className="text-white mb-8 text-[16px]">Classes</h6>
                    <div className="text-white mb-2 text-[14px]">
                        <p>J.s.s. 1 and 2</p>
                        <p>J.s.s. 3</p>
                        <p>S.s. 1</p>
                        <p>Preparatory Class</p>
                        <p>Jamb Class</p>
                    </div>
                </div>

                <div className="pb-10">
                    <h6 className="text-white mb-8 text-[16px]">Classes</h6>
                    <div className="text-white mb-2 text-[14px]">
                        <p>J.s.s. 1 and 2</p>
                        <p>J.s.s. 3</p>
                        <p>S.s. 1</p>
                        <p>Preparatory Class</p>
                        <p>Jamb Class</p>
                    </div>
                </div>

                <div className="pb-10">
                    <h6 className="text-white mb-8 text-[16px]">Records</h6>
                    <div className="text-white mb-2 text-[14px]">
                        <p>O'level exams records</p>
                        <p>Jamb records</p>
                        <p>International exams records</p>
                        <p>Competion records</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;