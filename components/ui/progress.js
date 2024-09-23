import styles from '../../styles/styles.module.scss'

export const ProgressBar = ({ currentValue, maxValue, label }) => {
    return (
        <div>
            <progress
                value={currentValue}
                max={maxValue}
                aria-label={label}
                className={styles.progressBar}
            >
                {currentValue}%
            </progress>
        </div>
    )
}