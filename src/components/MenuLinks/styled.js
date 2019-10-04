import styled from "styled-components"
import { Link } from "gatsby"

export const MenuLinksWrapper = styled.nav`
  float: right;
  padding: 10px 15px;
`

export const MenuLinksList = styled.ul`
  width: 110px;
`
export const MenuLinksItem = styled.li``

export const MenuLinksLink = styled(Link)`
  color: #fff;
  display: block;
  text-decoration: none;
  float: right;
  margin: 0 5px;
`