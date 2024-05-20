function Header() {
    return (
        <header className="headerStyle" id="idHeader">
            <div className="headerLinksStyle" id="idHeaderLinks">
                <div className="headerLinksIconLogoStyle" id="idHeaderLinksIconLogo"></div>
                <button className="headerLinkButtonSettingsStyle" id="idHeaderLinkSettings">НАСТРОЙКИ</button>
                <a className="headerLinkIconAccountStyle" id="idHeaderLinkIconAccount">Аккаунт</a>
            </div>
            <div className="headerNameImageStyle" id="idHeaderNameImage">
                <img className="headerMainIconGameStyle" id="idHeaderMainIconGame1" src="img/main_header_image_r.png" />
                <h1 className="classNameHeaderH1Style" id="idHeaderH1">ПОНИ - САПЁР</h1>
                <img className="headerMainIconGameStyle" id="idHeaderMainIconGame2" src="img/main_header_image.png" />
            </div>
        </header>
    );
}

