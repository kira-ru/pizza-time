import React, {FC} from 'react';
import {Header} from 'components/Header/Header';
import {Outlet} from 'react-router-dom';

const Layout: FC = () => {
    return (
        <div className="wrapper">
            <Header />
            <main className="content">
                <div className="container">
                    <Outlet />
                </div>
            </main>
        </div>
    );
};

export {Layout};
