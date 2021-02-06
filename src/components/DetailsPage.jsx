import React from 'react';

import '../assets/style/components/DetailsPage.css'

export const DetailsPage = () => {
    return (
        <section className='cocktail-section'>
            <a href='#!' className='back' >Back Home</a>
            <h2 className='main-title' >Cocktail</h2>
            <section className='info-card'>
                <div className='info-card__img'>
                    <img src='https://www.thecocktaildb.com/images/media/drink/tqpvqp1472668328.jpg' alt='title'/>
                </div>
                <div className='cocktail-info'>
                    <p><span className='cocktail-info__item'>Name :</span>ABC</p>
                    <p><span className='cocktail-info__item'>Category :</span>Shot</p>
                    <p><span className='cocktail-info__item'>Info :</span>Alcoholic</p>
                    <p><span className='cocktail-info__item'>Glass :</span>Shot Glass</p>
                    <p>
                        <span className='cocktail-info__item'>Instructons :</span>
                        Layered In A Shot Glass.
                    </p>
                    <p>
                        <span className='cocktail-info__item'>Ingredients :</span>
                        <span>Amaretto</span>
                        <span>Baileys Irish Cream</span>
                        <span>Cognac</span>
                    </p>
                </div>
            </section>
        </section>
    )
};