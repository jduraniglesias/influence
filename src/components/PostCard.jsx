import React from 'react';
import { formatNumber, formatDate, getMediaIcon } from '../utils/formatters';
import '../styles/PostCard.css';

const PostCard = ({ post }) => {
  return (
    <div className="post-card">
      <div className="post-image">
        <span style={{ fontSize: '64px' }}>
          {getMediaIcon(post.media_type)}
        </span>
        <div className="post-type-badge">
          {post.media_type}
        </div>
      </div>
      
      <div className="post-content">
        <div className="post-caption">{post.caption}</div>
        
        <div className="post-stats">
          <div className="post-stat">
            <span>❤️</span>
            <span className="post-stat-value">
              {formatNumber(post.like_count)}
            </span>
          </div>
          <div className="post-stat">
            <span>💬</span>
            <span className="post-stat-value">
              {post.comments_count}
            </span>
          </div>
          <div className="post-stat">
            <span>👁️</span>
            <span className="post-stat-value">
              {formatNumber(post.reach)}
            </span>
          </div>
          <div className="post-stat">
            <span>🔖</span>
            <span className="post-stat-value">
              {post.saved}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
