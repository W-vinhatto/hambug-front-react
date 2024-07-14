import React from 'react'

import Person from '../../assets/logoperfilHeader.svg'
import Cart from '../../assets/LogoCartHeader.svg'

import {
  Conteiner,
  ConteinerLeft,
  PageLink,
  ConteinerRight,
  ConteinerText,
  Line,
  PageLinkExit
} from './styled'

export function Header () {
  return (
    <Conteiner>
      <ConteinerLeft>
        <PageLink>
          Home
        </PageLink>
        <PageLink>
          Ver Produtos
        </PageLink>
      </ConteinerLeft>

      <ConteinerRight>
        <PageLink>
          <img src={Person} alt='logo perfil' />
        </PageLink>
        <Line></Line>
        <PageLink>
          <img src={Cart} alt='logo carrinho' />
        </PageLink>

        <ConteinerText>
          <p>olá</p>
          <PageLinkExit>
            Sair
          </PageLinkExit>
        </ConteinerText>
      </ConteinerRight>

    </Conteiner>

  )
}
