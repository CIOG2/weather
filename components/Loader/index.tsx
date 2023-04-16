import Styles from '@components/Loader/styles.module.scss';

const Loader = () => { 
    return (
        <div className={Styles[`body`]}>
        <div className={`${Styles['container']}`}>
            <div className={`${Styles['cloud']} ${Styles['front']}`}>
                <span className={`${Styles['left-front']}`}></span>
                <span className={`${Styles['right-front']}`}></span>
            </div>
            <span className={`${Styles['sun']} ${Styles['sunshine']}`}></span>
            <span className={`${Styles['sun']}`}></span>
            <div className={`${Styles['cloud']} ${Styles['back']}`}>
                <span className={`${Styles['left-back']}`}></span>
                <span className={`${Styles['right-back']}`}></span>
            </div>
            </div>
        </div>    
    )
}

export { Loader };