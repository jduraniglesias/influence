import React from 'react';
import Header from './components/Header';
import StatCard from './components/StatCard';
import PostCard from './components/PostCard';
import Sidebar from './components/Sidebar';

import { profileData, postsData, growthData } from './data/mockData';
import { formatNumber, calculateEngagementRate, calculateAverage } from './utils/formatters';
import './styles/App.css';

function App() {
  // Calculate analytics
  const engagementRate = calculateEngagementRate(postsData, profileData.followers_count);
  const avgLikes = calculateAverage(postsData, 'like_count');
  const avgComments = calculateAverage(postsData, 'comments_count');
  const avgReach = calculateAverage(postsData, 'reach');

  return (
    
  <><Sidebar currentPage="overview" /><div className="container">
      <h1 className="page-title">Account Overview</h1>
      <Header profile={profileData} />

      {/* Top Posts Section */}
      <div className="section-title">Top Posts</div>
      <div className="posts-grid">
        {postsData.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>

      {/* Account Analytics Section */}
      <div className="section-title with-top-spacing">Account Analytics</div>
      <div className="analytics-grid">
        <StatCard
          label="Followers"
          value={formatNumber(profileData.followers_count)}
          change={growthData.followers_change} />
        <StatCard
          label="Following"
          value={formatNumber(profileData.follows_count)} />
        <StatCard
          label="Total Posts"
          value={profileData.media_count} />
        <StatCard
          label="Engagement Rate"
          value={`${engagementRate}%`}
          change={growthData.engagement_change}
          isHighlight={true} />
        <StatCard
          label="Avg Likes"
          value={formatNumber(avgLikes)} />
        <StatCard
          label="Avg Comments"
          value={avgComments} />
        <StatCard
          label="Avg Reach"
          value={formatNumber(avgReach)} />
      </div>
    </div></>
  );
}

export default App;
