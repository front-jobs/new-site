import React from 'react'

import MenuLinks from '../MenuLinks'
import Greetings from '../Greetings'

import * as S from './styled'

const Header = () => (
  <S.Container>
    <MenuLinks />
    <Greetings />
  </S.Container>
)

export default Header
