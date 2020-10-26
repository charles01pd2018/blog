import React from 'react';
import {PostMasonry, MasonryPost} from '../components/common';

import Crypto from '../assets/mocks/crypto';
import Blockchain from '../assets/mocks/blockchain';

const blockchainConfig = {
    0: {
        gridArea: '1 / 2 / 3 / 4'
    }
}

const cryptoConfig = {
    0: {
        gridArea: '1 / 1 / 2 / 3',
        height: '15rem'
    },

    1: {
        height: '13rem'
    },

    2: {
        height: '13rem'
    },

    3: {
        height: '30rem',
        marginLeft: '1.5rem',
        width: '25rem'
    }
}

const mergeStyles = (posts, config) => {
    posts.forEach((post, index) => {
        post.style = config[index]
    })
}

mergeStyles(Crypto, cryptoConfig);
mergeStyles(Blockchain, blockchainConfig);

const lastCryptoPost = Crypto.pop();
const lastBlockchainPost = Blockchain.pop();


export default function Home() {
    return (
        <section className='container home'>
            <div clasName='row'>
                <h1>Crypto Posts</h1>
                <section className='crypto-posts-container'>      
                    <PostMasonry posts={Crypto} columns={2} tagsOnTop={true}/>
                    <MasonryPost post={lastCryptoPost} tagsOnTop={true} />
                </section>

                <h1>Blockchain Posts</h1>
                    <section className='blockchain-posts-container'>
                        <PostMasonry posts={Blockchain} columns={3}  tagsOnTop={true}/>
                    </section>
            </div>
        </section>
    )
}