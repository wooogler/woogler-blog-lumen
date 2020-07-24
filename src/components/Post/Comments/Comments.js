// @flow strict
import React from 'react';
import { FacebookProvider, Like as FBLike, Comments as FBComments} from 'react-facebook';
import { useSiteMetadata } from '../../../hooks';

type Props = {
  postTitle: string,
  postSlug: string
};

const Comments = ({ postTitle, postSlug }: Props) => {
  const { url, facebookAppId } = useSiteMetadata();

  return (
    <FacebookProvider appId={facebookAppId}>
      <FBComments href={url+postSlug}/>
    </FacebookProvider>
  );
};

export default Comments;
