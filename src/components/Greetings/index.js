import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Logo from '../../images/logo_frontjobs.svg'

import * as S from './styled'

const Greetings = () => {

  const {
    site: {
      siteMetadata: { title },
    },
  } = useStaticQuery(graphql`
    query MySiteMetaData {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <S.Container>
      <S.Logo src={Logo} />
      <S.Title>{title}</S.Title>
      <S.GreetingsAsk>Procurando front-end?</S.GreetingsAsk>
      <S.GreetingsInfo>Se você ou sua empresa está precisando de um front-end, anuncie sua vaga no Front Jobs.</S.GreetingsInfo>
    </S.Container>
  )
}

export default Greetings