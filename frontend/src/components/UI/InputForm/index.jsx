import { useForm } from 'react-hook-form'
import style from './InputForm.module.css'
import Button from '../Button'
import BtnBaner from '../btn_banner'

function InputForm({ title, btnStyle, inputStyle }) {

    let {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm()

    const onSubmit = () => {
        alert('lol')
    }

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)} className={style.inputForm}>

                <input className={inputStyle} placeholder='Name' {...register('name', {
                    required: 'Name is required',
                })} />
                {errors.name && <p style={{ margin: 0 }}>{errors.name.message}</p>}

                <input className={inputStyle} placeholder='Phone number' {...register('phoneNumber', {
                    required: 'Phone number is required',
                    pattern: {
                        value: /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/,
                        message: 'Invalid phone number specified'
                    }
                })} />
                {errors.phoneNumber && <p style={{ margin: 0 }}>{errors.phoneNumber.message}</p>}

                <input className={inputStyle} placeholder='Email' {...register('email', {
                    required: 'email is required',
                    pattern: {
                        value: /^([A-z])+([0-9-_.])*([A-z0-9-_.])*@([A-z])+([0-9-_.])*([A-z0-9-_.])*[.]([A-z]){2,6}$/,
                        message: 'Invalid email specified'
                    }
                })} />
                {errors.email && <p style={{ margin: 0 }}>{errors.email.message}</p>}

                <BtnBaner title={title} type={'submit'} />
            </form>
        </div>
    )
}

export default InputForm