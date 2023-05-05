import React, {useState} from 'react';
import About from './Tabs/About';
import BaseStats from './Tabs/BaseStats';
import Evolution from './Tabs/Evolution';
import './Details.css';

function Details({pokemon})
{
    const [tab, setTab] = useState('about');

    // get pokemon image from URL
    const sprites = pokemon.sprites?.other;
    const imageURL = sprites?.dream_world.front_default;

    // handle tab switching
    const switchTab = (tab) => {
        tab.preventDefault();
        setTab(tab.target.dataset.tab);
    }

    // return tab switch class name
    const getClassName = (tabName) => {
        return `tab-switch ${tab === tabName ? 'active' : ''}`;
    }

    return (
        <div className="details-container">
            <img src={imageURL} className='pokemon-image' alt={pokemon.name} />

            <div className="tabs-switch-container">
                <button className={getClassName('about')} data-tab='about' onClick={switchTab}>About</button>
                <button className={getClassName('base-stats')} data-tab='base-stats' onClick={switchTab}>Base Stats</button>
                <button className={getClassName('evolution')} data-tab='evolution' onClick={switchTab}>Evolution</button>
            </div>

            {tab === 'about' && <About pokemon={pokemon} />}
            {tab === 'base-stats' && <BaseStats pokemon={pokemon} />}
            {tab === 'evolution' && <Evolution pokemon={pokemon} />}
        </div>
    )
}

export default Details;