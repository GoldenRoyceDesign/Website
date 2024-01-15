import Typed from 'react-typed';

const BuzzBeeMain = () => {
  return (
    <div className='text-white'>
      <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
        <p className='text-[#00df9a] font-bold p-2'>
        Welcome to BUZZ BEE
        </p>
        <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>
          Grow with us.
        </h1>
        <div className='flex justify-center items-center'>
          <Typed
          className='md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2'
            strings={['DIGITAL MEDIA MARKETING', 'PRINTING AND DESIGN', 'CONTENT CREATION', 'VISUAL STRATEGIES', 'PROPOSAL, PITCH & DESIGNING', 'BRAND STRATEGY SERVICES', 'ADVERTISING SOLUTIONS', 'PACKAGING SOLUTIONS']}
            typeSpeed={120}
            backSpeed={140}
            loop
          />
        </div>
        <p className='pt-8 md:text-2xl text-xl font-bold text-white-500'>We transform brands into digital powerhouses! Discover why you'll love becoming our valued client and unlock the full potential of your business.</p>
      </div>
    </div>
  );
};

export default BuzzBeeMain;
