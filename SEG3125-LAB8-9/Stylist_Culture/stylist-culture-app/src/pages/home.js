import React from 'react';
import {useTranslation} from 'react-i18next';
import i18n from '../i18next';

function HomePage(){

    const { t, i18n } = useTranslation();

    return(
        <div className="home-page-main-body container">
            <h1 id="home-welcome">{t('Welcome')} {t('to')} {t('Stylist')} {t('Culture')}</h1>
            <h5 className="text-muted">{t('Home')} {t('Page')}</h5>
            <div class="list-group">
            <a href="/announcements" class="list-group-item list-group-item-action green-text">{t('Annoucements')}</a>
                <a href="/news" class="list-group-item list-group-item-action green-text">{t('News')}</a>
                <a href="/community" class="list-group-item list-group-item-action green-text">{t('Community')}</a>
            </div>
        </div>
    )

}

export default HomePage;