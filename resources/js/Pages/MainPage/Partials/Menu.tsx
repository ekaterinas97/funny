import { Link } from "@inertiajs/react";
import { AnimatePresence } from "framer-motion";



export default function Menu(){

    return (
        <AnimatePresence mode="wait" initial={false}>
            <Link href={route('about')} key={route('about')}>About us</Link>
            <Link href={route('landing')} key={route('landing')}>Home</Link>
        </AnimatePresence>
    )
}