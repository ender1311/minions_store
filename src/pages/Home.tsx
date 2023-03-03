import styles from './css/Home_styles.css';

export function Home() {
    return (
        <>
        <div className="Home_page">
            <h1 
                style={{ textAlign: 'center' }}>Welcome to the Minions Store</h1>
            <img 
                src="/imgs/logo4.png"
                style= {{width: '50vw', display: 'block', margin: '0 auto'}}
                alt='logo'
            >
            </img>
        </div>
    </>
    )
}