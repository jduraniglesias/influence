// Utility functions for data formatting and calculations

/**
 * Format large numbers with K/M suffixes
 * @param {number} num - The number to format
 * @returns {string} Formatted number string
 */
export const formatNumber = (num) => {
  if (num >= 1000000) return (num / 1000000).toFixed(1) + 'M';
  if (num >= 1000) return (num / 1000).toFixed(1) + 'K';
  return num.toString();
};

/**
 * Format ISO timestamp to readable date
 * @param {string} timestamp - ISO format timestamp
 * @returns {string} Formatted date string
 */
export const formatDate = (timestamp) => {
  const date = new Date(timestamp);
  return date.toLocaleDateString('en-US', { 
    month: 'short', 
    day: 'numeric', 
    year: 'numeric' 
  });
};

/**
 * Calculate engagement rate for posts
 * @param {Array} posts - Array of post objects
 * @param {number} followerCount - Total follower count
 * @returns {string} Engagement rate percentage
 */
export const calculateEngagementRate = (posts, followerCount) => {
  const totalEngagement = posts.reduce((sum, post) => 
    sum + post.like_count + post.comments_count, 0
  );
  const avgEngagement = totalEngagement / posts.length;
  return ((avgEngagement / followerCount) * 100).toFixed(2);
};

/**
 * Calculate average value from posts
 * @param {Array} posts - Array of post objects
 * @param {string} field - Field name to average
 * @returns {number} Average value
 */
export const calculateAverage = (posts, field) => {
  const sum = posts.reduce((acc, post) => acc + post[field], 0);
  return Math.round(sum / posts.length);
};

/**
 * Get icon emoji for media type
 * @param {string} type - Media type (VIDEO, IMAGE, CAROUSEL_ALBUM)
 * @returns {string} Emoji icon
 */
export const getMediaIcon = (type) => {
  const icons = {
    'VIDEO': '▶️',
    'CAROUSEL_ALBUM': '🎞️',
    'IMAGE': '📷'
  };
  return icons[type] || '📷';
};
