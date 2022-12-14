import React from 'react'
import Container from 'react-bootstrap/Container'

const NewsPage = () => {
    return (
        <main>
            <Container className='py-4'>
                <article className='mb-5'>
                    <img src="imgs/image.png" alt="Название новости" />
                    <h1>Название новости</h1>
                    <div className="text">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                </article>
            </Container>
        </main>
    );
};

export default NewsPage