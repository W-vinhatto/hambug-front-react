import React from 'react'
import { useForm } from 'react-hook-form'
import { Link, useHistory } from 'react-router-dom'

import { useUser } from '../../hooks/UserContext'

import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'

import { toast } from 'react-toastify'

import Api from '../../services/api'

import LoginImg from '../../assets/WhatsApp Image 2024-03-25 at 8.45.25 PM (1).jpeg'
import LogoImg from '../../assets/vinhattos.png'

import {
  Main,
  BackgroundLogin,
  Linear,
  ConteinerItens,
  ImgLogo,
  SectionLogin,
  Label,
  Imput,
  Error,
  SingnInlink
} from './styles'
import Button from '../../components/Button'

function Login () {
  const history = useHistory()
  const { putUserData } = useUser()

  const schema = Yup.object().shape({
    email: Yup
      .string()
      .email('digite um email válido')
      .required('O email é obrigátorio'),
    password: Yup
      .string()
      .required('A senha é obrigátorio')
      .min(6, ' A senha deve ter no min 6 digítos')
  })
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema)
  })

  const onSubmit = async clitdata => {
    try {
      const { status, data } = await Api.post('sessions', {
        email: clitdata.email,
        password: clitdata.password
      },

      { validateStatus: () => true })

      putUserData(data)

      if (status === 200 || status === 201) {
        toast.success('Seja bem vindo')
      } else if (status === 400 || status === 401) {
        toast.error('Usuário ou senha incorreto')
      } else {
        throw new Error()
      }
    } catch (err) {
      toast.error('Falha no sistema! Faça login novamente')
    }

    setTimeout(() => {
      history.push('/')
    }, 1000)
  }

  return (
    <Main>
      <Linear>   </Linear>
      <BackgroundLogin src={LoginImg} alt='login Imagem' />
      <ConteinerItens>
        <ImgLogo src={LogoImg} />
        <h1>Login</h1>

        <SectionLogin>
          <form noValidate onSubmit={handleSubmit(onSubmit)} >
            <Label>Email</Label>
            <Imput type='email' {...register('email')} error={errors.email?.message} />
            <Error>{errors.email?.message}</Error>

            <Label>Senha</Label>
            <Imput type='password' {...register('password')} error={errors.password?.message} />
            <Error>{errors.password?.message}</Error>

            <Button
              type='submt'
              style={{ marginTop: 40, marginBottom: 10 }}>Sing In</Button>

          </form>

          <SingnInlink>
            Não possui conta? <Link to="/cadastro" style={{ color: 'white' }}>Singn Up</Link>
            </SingnInlink>
        </SectionLogin>
      </ConteinerItens>
    </Main>
  )
}

export default Login
