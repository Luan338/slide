import React from 'react';
import styles from './Slide.module.css';

export const Slide = ({slides}) => {
    const [active, setActive] = React.useState(0);
    const [position, setPosition] = React.useState(0);
    const contenRef =  React.useRef();

    React.useEffect(() => {
        const {width} = contenRef.current.getBoundingClientRect();
        setPosition(-(width * active));
    }, [active])

    function slidePrev(){
        if(active > 0){
            setActive(active - 1);
        }
    }

    function slideNext(){
        if(active < slides.length - 1){
            setActive(active + 1);
        }
    }

    return (
        <section className={styles.container}>
            <div 
            ref={contenRef}
            className={styles.content} 
            style={{transform: `translateX(${position}px)`}}>
                {slides.map((slide) => (
                <div key={slide.id} className={styles.item}>
                    <img src={slide.photo} alt='fotos' className={styles.fotos}></img>
                </div>
                ))} 
            </div>
            <nav className={styles.nav}>
                <button className={styles.btn} onClick={slidePrev}>anterior</button>
                <button className={styles.btn} onClick={slideNext}>próximo</button>
            </nav>
        </section>
    )
}
