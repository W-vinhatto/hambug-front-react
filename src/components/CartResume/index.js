import React, { useState, useEffect } from 'react'
import formatCurrency from '../../utils/formatCurrency'
import { useCart } from '../../hooks/CartContext'
import api from '../../services/api'
import { toast } from 'react-toastify'

import { Conteiner, MaxConteiner } from './style'
import { Button } from '../Button'

export function CartResume () {
  const [finalprice, setFinalprice] = useState(0)
  const [deliveryTax] = useState(5)

  const { cartproducts } = useCart()

  useEffect(() => {
    const sumAllItems = cartproducts.reduce((acc, current) => {
      return current.price * current.quantity + acc
    }, 0)

    setFinalprice(sumAllItems)
  }, [cartproducts, deliveryTax])

  // enviando pedido do carrinho para api criar ordem
  const submitorder = async () => {
    const order = cartproducts.map(product => {
      return { id: product.id, quantity: product.quantity }
    })

    await toast.promise(api.post('orders', { products: order }), {
      pending: 'Realizando o seu pedido',
      success: 'Pedido realizado com sucesso',
      error: 'Falha ao tentar realizar o seu pedido'
    }
    )
  }

  return (
        <MaxConteiner>
            <Conteiner>
                <div className='conteiner-top'>
                    <h2 className='title'>Resumo do pedido</h2>
                    <p className='items'>Itens</p>
                    <p className='items-price'>{formatCurrency(finalprice)}</p>
                    <p className='delivery-tax'>taxa de entrega</p>
                    <p className='delivery-price'>{formatCurrency(deliveryTax)}</p>
                </div>
                <div className='conteiner-bottom'>
                    <p>Total</p>
                    <p>{formatCurrency(finalprice + deliveryTax)}</p>
                </div>
            </Conteiner>
            <Button style={{ width: '100%', marginTop: 30 }} onClick={() => submitorder()} >Finalizar Pedido</Button>
        </MaxConteiner>
  )
}
