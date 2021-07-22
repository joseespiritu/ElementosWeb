import { useForm } from '../hooks/useForm';

export const Formulario = () => {

    const { formulario, email, password, onChange } = useForm({
        email: 'test@test.com',
        password: '123456'
    });

    return (
        <div className="p-5">
            <input 
                type="text"
                className="form-control"
                placeholder="email"
                value={ email }
                onChange={ ({target}) => onChange( target.value, 'email')}
            />
            <input 
                type="text"
                className="form-control mt-3 mb-3"
                placeholder="password"
                value={ password }
                onChange={ ({target}) => onChange( target.value, 'password')}
            />

            <code>
                <pre>{ JSON.stringify(formulario, null, 2) }</pre>
            </code>
        </div>
    )
}
