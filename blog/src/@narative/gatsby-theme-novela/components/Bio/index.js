import React from 'react';
import styled from '@emotion/styled';
import { css, cx } from '@emotion/core'

import Image from "@narative/gatsby-theme-novela/src/components/Image";

export default function Bio({ author }){

  return (<ArticleContainer/>);
}

/*
<ArticleContainer>
  <ArticleAvatar
    as={author.authorsPage ? Link : 'div'}
    to={author.slug}
    data-a11y="false"
    aria-label="Author's bio"
  >
    <ArticlAvatarInner>
      <RoundedImage src={author.avatar.medium} />
    </ArticlAvatarInner>
  </ArticlAvatar>
  <ArticlText dangerouslySetInnerHTML={{ __html: author.bio }} />
</ArticlContainer>
*/

const BannerText = styled.h3`
position: absolute;
margin-top: 25px;
padding-left: 15px;
padding-right: 15px;
background-color: red;
z-index:99;
transform: translate(20%, -400%);
`;

const Effect = css`
.svg-wrapper {
  position: relative;
  transform: translateY(-50%);
	  margin: 0 auto;
  width: 700px;
}
.shape {
  stroke-dasharray: 400 1400;
  stroke-dashoffset: -1200;
  stroke-linecap: butt;
  stroke-width: 8px;
  fill: transparent;
  stroke: black;
  border-bottom: 2px solid black;
  transition: stroke-width 2s, stroke-dashoffset 1s, stroke-dasharray 1s;
}
.text {
  font-family: 'Roboto Condensed';
  font-size: 22px;
  line-height: 32px;
  letter-spacing: 8px;
  color: #fff;
  top: -48px;
  position: relative;
}
.svg-wrapper:hover .shape {
  stroke-linecap: butt;
  stroke-width: 8px;
  stroke-dashoffset: 680;
  stroke-dasharray: 760;
}`;

const SvgWrapper = styled.div`
display: flex;
align-items: center;
position: relative;
left: -10px;
padding:0px;
`;

const ArticleContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  left: -10px;
`;

const ArticleAvatar = styled.div`
  display: block;
  position: relative;
  height: 40px;
  width: 40px;
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.25);
  margin-right: 16px;
  margin: 10px 26px 10px 10px;

  &::after {
    content: '';
    position: absolute;
    left: -5px;
    top: -5px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: 1px solid rgba(0, 0, 0, 0.25);
  }

  &[data-a11y='true']:focus::after {
    content: '';
    position: absolute;
    left: -5px;
    top: -5px;
    width: 50px;
    height: 50px;
    border: 2px solid ${p => p.theme.colors.accent};
  }
`;

const RoundedImage = styled(Image)`
  border-radius: 50%;
`;

const ArticleAvatarInner = styled.div`
  height: 40px;
  width: 40px;
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.25);
  margin-right: 16px;
  overflow: hidden;
`;

const ArtcileText = styled.p`
  max-width: 430px;
  font-size: 14px;
  line-height: 1.45;
  color: ${p => p.theme.colors.grey};

  a {
    color: ${p => p.theme.colors.grey};
    text-decoration: underline;
  }
`;
