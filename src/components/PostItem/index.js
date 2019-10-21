import React from 'react'
import PropTypes from "prop-types"

import * as S from './styled'

const PostItem = ({
  slug,
  background,
  category,
  date,
  title,
  place,
  company,
}) => (
  <S.Container>
    <S.PostItemLink to={slug}>
      <S.PostItemWrapper>
        <S.PostItemTag background={background}>{category}</S.PostItemTag>
        <S.PostItemInfo>
          <S.PostItemDescription>{company}</S.PostItemDescription>
          <S.PostItemTitle>{title}</S.PostItemTitle>
          <S.PostItemPlace>{place}</S.PostItemPlace>
        </S.PostItemInfo>
        <S.PostItemDateWrapper>
          <S.PostItemDate>{date}</S.PostItemDate>
        </S.PostItemDateWrapper>
      </S.PostItemWrapper>
    </S.PostItemLink>
  </S.Container>
)

PostItem.propTypes = {
  slug: PropTypes.string.isRequired,
  background: PropTypes.string,
  category: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  place: PropTypes.string,
  company: PropTypes.string.isRequired,
}

export default PostItem