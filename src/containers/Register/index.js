import React from 'react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'

import { toast } from 'react-toastify'

import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'

import Api from '../../services/api'

import RegisterImg from '../../assets/bacground-register.avif'
import LogoImg from '../../assets/vinhattos.png'

import {
  Main,
  Backgroundregister,
  ConteinerItens,
  ImgLogo,
  SectionLogin,
  Label,
  Imput,
  Error,
  SingnInlink
} from './styles'
import { Button } from '../../components'

export function Register () {
  const schema = Yup.object().shape({
    name: Yup
      .string()
      .required('seu nome é obrigatório'),
    email: Yup
      .string()
      .email('digite um email válido')
      .required('O email é obrigátorio'),
    password: Yup
      .string()
      .required('A senha é obrigátorio')
      .min(6, ' A senha deve ter no min 6 digítos'),
    confirmpassword: Yup
      .string()
      .required('A senha é obrigátorio')
      .oneOf([Yup.ref('password')], 'As senhas devem ser iguais')

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
      const { status } = await Api.post('users', {
        name: clitdata.name,
        email: clitdata.email,
        password: clitdata.password
      },
      { validateStatus: () => true })

      if (status === 201 || status === 200) {
        toast.success('Cadastro criado com sucesso')
      } else if (status === 409) {
        toast.error('e-mail já cadastrado! faça login para continuar')
      } else {
        throw new Error()
      }
    } catch (err) {
      toast.error('Falha no sistema! Faça login novamente')
    }
  }

  return (
    <Main>
      <Backgroundregister src={RegisterImg} alt='register Imagem' />
      <ConteinerItens>
        <ImgLogo src={LogoImg} />
        <h1>Cadastre-se</h1>

        <SectionLogin>
          <form noValidate onSubmit={handleSubmit(onSubmit)} >
            <Label>Nome</Label>
            <Imput type='text' {...register('name')} error={errors.name?.message} />
            <Error>{errors.name?.message}</Error>

            <Label>Email</Label>
            <Imput type='email' {...register('email')} error={errors.email?.message} />
            <Error>{errors.email?.message}</Error>

            <Label>Senha</Label>
            <Imput type='password' {...register('password')} error={errors.password?.message} />
            <Error>{errors.password?.message}</Error>

            <Label>Confirmar Senha</Label>
            <Imput type='password' {...register('confirmpassword')} error={errors.confirmpassword?.message} />
            <Error>{errors.confirmpassword?.message}</Error>

            <Button
              type='submt'
              style={{ marginTop: 15, marginBottom: 10 }}>Sing In</Button>

          </form>

          <SingnInlink>
            Não possui conta? <Link to="/login" style={{ color: 'white' }}>Singn in</Link>
          </SingnInlink>
        </SectionLogin>
      </ConteinerItens>
    </Main>
  )
}
