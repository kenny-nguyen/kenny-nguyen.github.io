import React from 'react';
import {useTranslation} from 'react-i18next';

function NaviBar(){

    const { t, i18n } = useTranslation();

    function handleClick(lang){
      i18n.changeLanguage(lang);
    }

    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
                <a className="navbar-brand text-success" href="/">{t('Stylist')} {t('Culture')}</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarColor03">
                    <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <a className="nav-link" href="/">{t('Home')}</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/news">{t('News')}</a>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">{t('Community')}</a>
                        <div className="dropdown-menu">
                            <a className="dropdown-item" href="/community">{t('Community')} {t('Page')}</a>
                            <div class="dropdown-divider"></div>
                            <a className="dropdown-item" href="/community/tutorials">{t('Tutorials')}</a>
                            <a className="dropdown-item" href="/community/requests">{t('Tutorial')} {t('Requests')}</a>
                            <a className="dropdown-item" href="/community/discussions">{t('Discussion')} {t('Board')}</a>
                        </div>
                    </li>
                    </ul>
                    <form class="form-inline my-2 my-lg-0">
                        <input class="form-control mr-sm-2" type="text" placeholder={t('Search')}/>
                        <button class="btn btn-secondary my-2 my-sm-0" type="submit"><i class="fa fa-search" aria-hidden="true"></i>
                        </button>
                    </form>
                    <ul class="nav nav-tabs lm-fix">
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="" role="button" aria-haspopup="true" aria-expanded="false"><i class="fa fa-globe" aria-hidden="true"></i> Language</a>
                            <div class="dropdown-menu">
                                <a class="dropdown-item" onClick={()=>handleClick('en')}>English</a>
                                <div class="dropdown-divider"></div>
                                <a class="dropdown-item" onClick={()=>handleClick('fr')}>Français</a>
                            </div>
                        </li>
                    </ul>
                    <ul className="navbar-nav ml-auto lm-fix">
                    <li className="nav-item">
                        <a className="nav-link" href="/signup"><button type="button" className="btn btn-outline-primary">{t('Sign-up')}</button></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/login"><button type="button" className="btn btn-outline-primary">{t('Login')}</button></a>
                    </li>
                    </ul>
                </div>
            </div>
        </nav>
    )

}

export default NaviBar;

