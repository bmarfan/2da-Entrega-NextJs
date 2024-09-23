import styles from '../styles/styles.module.scss'

export function TextBody({ content }) {
    return (
        <section
            className={styles.textBody}
            dangerouslySetInnerHTML={{ __html: content }}
        >
        </section>
    )
}