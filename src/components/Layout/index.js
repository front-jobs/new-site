import React from 'react'
import PropTypes from 'prop-types'

import GlobalStyle from '../../styles/global'
import * as S from './styled'

const Layout = ({ children }) => {

  return (
    <S.LayoutWrapper>
      <S.LayoutMain>{children}</S.LayoutMain>
      <GlobalStyle />
    </S.LayoutWrapper>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
