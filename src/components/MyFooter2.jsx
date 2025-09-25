const MyFooter2 = () => {

    return (
        <div className="dc-footer-bar">
            <div className="dc-footer-bar_inner">
                <button className="dc-signup-btn" type="button">
                    SIGN-UP NOW!
                </button>

                <div className="dc-follow">
                    <span className="dc-follow_label">FOLLOW US</span>
                    <ul className="dc-social">
                        <li>
                            <a href="#">
                                <img src="/footer-facebook.png" alt="Facebook" />
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img src="/footer-periscope.png" alt="Periscope" />
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img src="/footer-pinterest.png" alt="Pinterest" />
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img src="/footer-twitter.png" alt="Twitter" />
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img src="/footer-youtube.png" alt="YouTube" />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );

}

export default MyFooter2