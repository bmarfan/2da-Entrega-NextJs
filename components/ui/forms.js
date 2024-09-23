import styles from '../../styles/styles.module.scss'

//TEXT INPUT
export const TextInput = ({label, labelText, name, ...args}) => {
    return(
        <section className='flex flex-col mb-3'>
            <label className={styles.labelForm} htmlFor={name}>
                {label}
                {labelText ? (<span>{labelText}</span>) : ('')}
            </label>
            <input
                type='text'
                className={styles.textInput}
                name={name}
                {...args}
            />

        </section>
    )
}

//EMAIL INPUT
export const EmailInput = ({label, labelText, name, ...args}) => {
    return(
        <section className='flex flex-col mb-3'>
            <label className={styles.labelForm} htmlFor={name}>
                {label}
                {labelText ? (<span>{labelText}</span>) : ('')}
            </label>
            <input
                type='email'
                className={styles.textInput}
                name={name}
                {...args}
            />

        </section>
    )
}

//PASSWORD INPUT
export const PasswordInput = ({label, labelText, name, ...args}) => {
    return(
        <section className='flex flex-col mb-3'>
            <label className={styles.labelForm} htmlFor={name}>
                {label}
                {labelText ? (<span>{labelText}</span>) : ('')}
            </label>
            <input
                type='password'
                className={styles.textInput}
                name={name}
                {...args}
            />

        </section>
    )
}

//TEXTAREA
export const Textarea = ({label, labelText, ...args}) => {
    return(
        <section className='flex flex-col mb-3'>
            <label className={styles.labelForm}>
                {label}
                {labelText ? (<span>{labelText}</span>) : ('')}
            </label>
            <textarea
                className={styles.textarea}
                {...args}
            />
        </section>
    )
}

//FILE INPUT
export const FileInput = ({label, labelText, children, ...args}) => {
    return(
        <section className='flex flex-col mb-3'>
            <label className={styles.labelForm}>
                {label}
                {labelText ? (<span>{labelText}</span>) : ('')}
            </label>
            {children}
            <input
                type='file'
                {...args}
            />

        </section>
    )
}

//NUMBER INPUT
export const NumberInput = ({label, labelText, ...args}) => {
    return(
        <section className='flex flex-col mb-3'>
            <label className={styles.labelForm}>
                {label}
                {labelText ? (<span>{labelText}</span>) : ('')}
            </label>
            <input
                type='number'
                className={styles.textInput}
            />

        </section>
    )
}
