import styled from 'styled-components'

export const Container = styled.section`
  /* background: url("../../images/bkg.jpg") no-repeat; */
  /* background: #f7f7f7; */
  background:
    radial-gradient(rgba(0, 0, 0, 0.3) 3px, transparent 4px),
    radial-gradient(rgba(0, 0, 0, 0.3) 3px, transparent 4px),
    linear-gradient(#fff 4px, transparent 0),
    linear-gradient(45deg, transparent 74px, transparent 75px, rgba(164, 164, 164, .3)  75px, rgba(164, 164, 164, .3)  76px, transparent 77px, transparent 109px),
    linear-gradient(-45deg, transparent 75px, transparent 76px, rgba(164, 164, 164, .3)  76px, rgba(164, 164, 164, .3)  77px, transparent 78px, transparent 109px),
    #fff;
    background-size: 109px 109px, 109px 109px,100% 6px, 109px 109px, 109px 109px;
    background-position: 54px 55px, 0px 0px, 0px 0px, 0px 0px, 0px 0px;
  height: 25rem;
  border-bottom: 1px solid orange;
`