import style from '../../styles.module.scss'

export const EmailInput = ({ label, name, text, ...args }) => {
    return (
        <div className='flex flex-col mb-3'>
            <label className={style.labelForm} for={name}>
                {label}
                {
                    text ? (
                        <span>{text}</span>
                    ) : (
                        ''
                    )
                }
            </label>
            <input
                type='email'
                name={name}
                className={style.textInput}
                {...args}
            />
        </div>
    )
}

export const PasswordInput = ({ label, name, text, ...args }) => {
    return (
        <div className='flex flex-col mb-3'>
            <label className={style.labelForm} for={name}>
                {label}
                {
                    text ? (
                        <span>{text}</span>
                    ) : (
                        ''
                    )
                }
            </label>
            <input
                type='password'
                name={name}
                className={style.textInput}
                {...args}
            />
        </div>
    )
}