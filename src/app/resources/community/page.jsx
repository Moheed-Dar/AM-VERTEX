// app/resources/community/page.jsx
import React from 'react';
import { 
  Users, 
  MessageCircle, 
  Calendar, 
  BookOpen, 
  ExternalLink,
  Heart,
  Share2,
  Github,
  Twitter
} from 'lucide-react';

export const metadata = {
  title: 'Community Resources',
  description: 'Join our community, find support, and access resources to help you grow.',
};

const communityResources = [
  {
    id: 1,
    title: 'Discord Community',
    description: 'Join 10,000+ members in our active Discord server. Get help, share projects, and connect with fellow developers.',
    icon: MessageCircle,
    link: 'https://discord.gg/yourcommunity  ',
    members: '10k+',
    color: 'bg-indigo-500',
  },
  {
    id: 2,
    title: 'GitHub Discussions',
    description: 'Technical discussions, feature requests, and community-driven solutions.',
    icon: Github,
    link: 'https://github.com/yourorg/discussions  ',
    members: '5k+',
    color: 'bg-gray-800 dark:bg-gray-700',
  },
  {
    id: 3,
    title: 'Twitter/X Community',
    description: 'Stay updated with the latest news, tips, and community highlights.',
    icon: Twitter,
    link: 'https://twitter.com/yourhandle  ',
    members: '25k+',
    color: 'bg-sky-500',
  },
  {
    id: 4,
    title: 'Monthly Meetups',
    description: 'Virtual and in-person meetups every month. Learn from experts and network with peers.',
    icon: Calendar,
    link: '/meetups',
    members: '500+',
    color: 'bg-emerald-500',
  },
];

const upcomingEvents = [
  {
    id: 1,
    title: 'Community Hackathon 2024',
    date: 'March 15-17, 2024',
    type: 'Hackathon',
    attendees: 500,
  },
  {
    id: 2,
    title: 'Weekly AMA with Core Team',
    date: 'Every Friday, 2PM EST',
    type: 'Live Q&A',
    attendees: 200,
  },
  {
    id: 3,
    title: 'Beginner Workshop Series',
    date: 'March 20, 2024',
    type: 'Workshop',
    attendees: 150,
  },
];

const topContributors = [
  {
    id: 1,
    name: 'Sarah Chen',
    role: 'Community Moderator',
    contributions: 342,
    avatar: 'SC',
  },
  {
    id: 2,
    name: 'Alex Rivera',
    role: 'Top Contributor',
    contributions: 289,
    avatar: 'AR',
  },
  {
    id: 3,
    name: 'Jordan Smith',
    role: 'Documentation Hero',
    contributions: 156,
    avatar: 'JS',
  },
];

export default function CommunityPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 transition-colors duration-300">
      {/* Hero Section */}
      <div className="bg-white dark:bg-gray-900 border-b dark:border-gray-800 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-300">
              Join Our Community
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto transition-colors duration-300">
              Connect with thousands of developers, share your knowledge, and grow together. 
              Our community is here to support you every step of the way.
            </p>
            <div className="mt-8 flex justify-center gap-4">
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center gap-2">
                <Users className="w-5 h-5" />
                Join Community
              </button>
              <button className="bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 border border-gray-300 dark:border-gray-700 px-6 py-3 rounded-lg font-medium hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors flex items-center gap-2">
                <BookOpen className="w-5 h-5" />
                Read Guidelines
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Community Resources Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 transition-colors duration-300">Community Platforms</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {communityResources.map((resource) => (
            <a
              key={resource.id}
              href={resource.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white dark:bg-gray-900 rounded-xl shadow-sm border border-gray-200 dark:border-gray-800 p-6 hover:shadow-md dark:hover:shadow-gray-900/50 transition-all duration-300"
            >
              <div className={`${resource.color} w-12 h-12 rounded-lg flex items-center justify-center mb-4`}>
                <resource.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {resource.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 transition-colors duration-300">
                {resource.description}
              </p>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-500 dark:text-gray-500 transition-colors duration-300">{resource.members} members</span>
                <ExternalLink className="w-4 h-4 text-gray-400 dark:text-gray-600 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" />
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* Upcoming Events */}
      <div className="bg-white dark:bg-gray-900 border-y dark:border-gray-800 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white transition-colors duration-300">Upcoming Events</h2>
            <a href="/events" className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium transition-colors">
              View all events →
            </a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {upcomingEvents.map((event) => (
              <div key={event.id} className="border border-gray-200 dark:border-gray-800 rounded-xl p-6 hover:border-blue-300 dark:hover:border-blue-700 transition-colors bg-white dark:bg-gray-900">
                <div className="flex items-center gap-2 mb-3">
                  <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs font-medium px-2 py-1 rounded transition-colors duration-300">
                    {event.type}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 transition-colors duration-300">
                  {event.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 transition-colors duration-300">{event.date}</p>
                <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-500 transition-colors duration-300">
                  <span className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    {event.attendees} attending
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Top Contributors */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 transition-colors duration-300">Top Contributors</h2>
        <div className="bg-white dark:bg-gray-900 rounded-xl shadow-sm border border-gray-200 dark:border-gray-800 overflow-hidden transition-colors duration-300">
          {topContributors.map((contributor, index) => (
            <div
              key={contributor.id}
              className="flex items-center justify-between p-6 border-b dark:border-gray-800 last:border-b-0 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors duration-300"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                  {contributor.avatar}
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white transition-colors duration-300">{contributor.name}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 transition-colors duration-300">{contributor.role}</p>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="text-center">
                  <p className="text-2xl font-bold text-gray-900 dark:text-white transition-colors duration-300">{contributor.contributions}</p>
                  <p className="text-xs text-gray-500 dark:text-gray-500 transition-colors duration-300">contributions</p>
                </div>
                <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors">
                  <Heart className="w-5 h-5 text-gray-400 dark:text-gray-600 hover:text-red-500 dark:hover:text-red-400 transition-colors" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Newsletter/Stay Connected */}
      <div className="bg-gray-900 dark:bg-black text-white py-16 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Stay in the Loop</h2>
          <p className="text-gray-400 dark:text-gray-500 mb-8 max-w-xl mx-auto transition-colors duration-300">
            Subscribe to our newsletter for weekly community updates, featured projects, and upcoming events.
          </p>
          <div className="flex max-w-md mx-auto gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg bg-gray-800 dark:bg-gray-950 border border-gray-700 dark:border-gray-800 text-white placeholder-gray-500 dark:placeholder-gray-600 focus:outline-none focus:border-blue-500 transition-colors duration-300"
            />
            <button className="px-6 py-3 bg-blue-600 rounded-lg font-medium hover:bg-blue-700 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}