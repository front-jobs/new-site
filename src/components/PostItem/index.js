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
          <S.PostItemDate>
            {date}
          </S.PostItemDate>
          <S.PostItemTitle>{place} - {title}</S.PostItemTitle>
          <S.PostItemDescription>{company}</S.PostItemDescription>
        </S.PostItemInfo>
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
  place: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
}

export default PostItem