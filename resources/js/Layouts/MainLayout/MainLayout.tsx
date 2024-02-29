import PageTransition from '@/Components/PageTransition/PageTransition';
import Header from './Header/Header';
import s from './MainLayout.module.css';
import cn from 'classnames';
import { ReactNode, useState } from 'react';


interface MainLayoutProps{
    children: ReactNode;
}

const  MainLayout = ({children}: MainLayoutProps) => {
    const [navOpen, setNavOpen] = useState(false);

    
    return (
        <div className={cn(s.container, {
            [s['menu-open']]: navOpen
        })}>
            <Header open={navOpen} closeNav={()=>setNavOpen(false)} changeOpen={() => setNavOpen(true)} />
            <main>
                <PageTransition>
                    {children}
                </PageTransition>
            </main>
        </div>
    )
}
export default MainLayout;