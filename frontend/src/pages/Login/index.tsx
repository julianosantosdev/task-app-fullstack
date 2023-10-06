import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import loginValidateSchema, { TLoginValidate } from '../../schemas/loginSchema';
import useAuth from '../../hooks/useAuth';

const LoginPage = () => {
  const { register, handleSubmit } = useForm<TLoginValidate>({
    resolver: zodResolver(loginValidateSchema),
  });

  const { signIn } = useAuth();

  return (
    <main>
      <section>
        <h2>Login</h2>
        <form onSubmit={handleSubmit(signIn)}>
          <fieldset>
            <label htmlFor='email'>E-mail</label>
            <input
              type='email'
              id='email'
              placeholder='E-mail'
              {...register('email')}
            />
          </fieldset>

          <fieldset>
            <label htmlFor='password'>Password</label>
            <input
              type='password'
              id='password'
              placeholder='password'
              {...register('password')}
            />
          </fieldset>
          <button>Login</button>
        </form>
      </section>
    </main>
  );
};

export default LoginPage;
