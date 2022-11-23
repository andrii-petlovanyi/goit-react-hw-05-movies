import PropTypes from 'prop-types';

import {
  ListItem,
  RatingText,
  ReviewText,
  TextName,
  TextWrap,
} from './ReviewsItem.styled';

export const ReviewsItem = ({ review = {} }) => {
  const { author, content, rating, created_at } = review;
  return (
    <ListItem>
      <TextName> Author: {author}</TextName>
      <ReviewText>
        <TextWrap>Review:</TextWrap> {content}
      </ReviewText>
      <RatingText>Rating: {rating ? rating : 'N/A'}</RatingText>
      <RatingText>
        Date: {new Date(created_at).toLocaleDateString('en-US')}
      </RatingText>
    </ListItem>
  );
};

ReviewsItem.propTypes = {
  review: PropTypes.shape({
    author: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    rating: PropTypes.number,
    created_at: PropTypes.string.isRequired,
  }),
};
