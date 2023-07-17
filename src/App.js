import * as yup from 'yup';
import { Formik } from 'formik';
import './App.css';

function App() {
  const validationSchema = yup.object().shape({
    name: yup.string().typeError('Должно быть строкой').required().min(3),
    secondName: yup.string().typeError('Должно быть строкой').required('Обязательное поле').min(3),
    password: yup.string().typeError('Должно быть строкой').required('Обязательное поле').min(3),
    confirmPassword: yup.string().oneOf([yup.ref('password')], 'пароли не совпадают').required('Обязательное поле'),
    email: yup.string().email('Введите верный email').required(),
    confirmEmail: yup.string().oneOf([yup.ref('email')], 'emails не совпадают').required(),

  })


  return (
    <div className="App">
      <Formik
        initialValues={{
          name: '',
          secondName: '',
          password: '',
          confirmPassword: '',
          email: '',
          confirmEmail: '',
        }}
        validateOnBlur
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        {({ values, errors, touched, handleChange, handleBlur, isValid, handleSubmit, dirty }) => (
          <div className='form'>
            <p>
              <label htmlFor='name'>Имя</label><br />
              <input
                type='text'
                name='name'
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name}
                className='input'
              />
            </p>
            {touched.name && errors.name && <p className='error'>{errors.name}</p>}

            <p>
              <label htmlFor='secondName'>Фамилия</label><br />
              <input
                type='text'
                name='secondName'
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.secondName}
                className='input'
              />
            </p>
            {touched.secondName && errors.secondName && <p className='error'>{errors.secondName}</p>}

            <p>
              <label htmlFor='password'>Пароль</label><br />
              <input
                type='password'
                name='password'
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
                className='input'
              />
            </p>
            {touched.password && errors.password && <p className='error'>{errors.password}</p>}

            <p>
              <label htmlFor='confirmPassword'>Подтвердите пароль</label><br />
              <input
                type='password'
                name='confirmPassword'
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.confirmPassword}
                className='input'
              />
            </p>
            {touched.confirmPassword && errors.confirmPassword && <p className='error'>{errors.confirmPassword}</p>}

            <p>
              <label htmlFor='email'>Введите email</label><br />
              <input
                type='email'
                name='email'
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                className='input'
              />
            </p>
            {touched.email && errors.email && <p className='error'>{errors.email}</p>}

            <p>
              <label htmlFor='confirmEmail'>Подтвердите email</label><br />
              <input
                type='email'
                name='confirmEmail'
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.confirmEmail}
                className='input'
              />
            </p>
            {touched.confirmEmail && errors.confirmEmail && <p className='error'>{errors.confirmEmail}</p>}

            <button
              disabled={!isValid && !dirty}   //если не валидна форма и не меняли никогда ее значения - кнопка заблокирована
              onClick={handleSubmit}
              type='submit'
            >
              Отправить
            </button>
          </div>
        )}

      </Formik>

    </div>
  );
}

export default App;
