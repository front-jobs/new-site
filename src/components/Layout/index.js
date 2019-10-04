import React from 'react'
import PropTypes from 'prop-types'

import Header from '../Header'

import GlobalStyle from '../../styles/global'
import * as S from './styled'

const Layout = ({ children }) => {

  return (
    <S.LayoutWrapper>
      <Header />
      <S.LayoutMain>{children}</S.LayoutMain>
      <GlobalStyle />
    </S.LayoutWrapper>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
