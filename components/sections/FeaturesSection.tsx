'use client';
import { FiHeadphones,FiBookOpen,FiBarChart2 } from 'react-icons/fi';

export const FeaturesSection = () => {
  return (
    <section className='px-6 py-4 text-center'>
      <h2 className='text-3xl font-bold text-gray-800 mb-8'>Features</h2>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
        <FeatureCard icon={<FiHeadphones/>} title='Personalized Narration' description='Adapt narration to suit individual learning styles and needs'/>
        <FeatureCard icon={<FiBookOpen/>} title='Adaptive Audio Lessons' description='Engage at your own pace, with contnet tailored to your progress'/>
        <FeatureCard icon={<FiBarChart2/>} title='Engagement Insights' description='Track learning metrics to gain insights into progress and engagement'/>
      </div>
    </section>
  )
}
const FeatureCard = ({icon,title,description}:{icon:React.ReactElement,title:string,description:string}) => {
  return (
    <div className='p-6 bg-blue-50 rounded-lg shadow-md transition hover:cursor-pointer hover:scale-110'>
      <div className='text-4xl text-blue-600 mb-6'>{icon}</div>
      <h3 className='text-xl font-semibold text-gray-800 mb-2'>{title}</h3>
      <p className='text-gray-600'>{description}</p>
    </div>
  )
}