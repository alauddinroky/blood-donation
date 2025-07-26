// components/HowItWorks.jsx
const HowItWorks = () => {
  const steps = [
    {
      number: 1,
      title: 'Register',
      description: 'Sign up online or at a donation center to get started with your life-saving journey.',
    },
    {
      number: 2,
      title: 'Get Tested',
      description: 'A quick health screening ensures you are eligible and healthy to donate blood safely.',
    },
    {
      number: 3,
      title: 'Donate',
      description: 'The actual donation process is simple, safe, and typically takes less than an hour.',
    },
    {
      number: 4,
      title: 'Save Lives',
      description: 'Your generous donation directly contributes to saving up to three lives in need.',
    },
  ];

  return (
    <section className="bg-[#1A1A1A] py-16 px-6">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-[#E63946] text-center mb-12">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center p-4">
              <div className="relative mb-6">
                <div className="w-16 h-16 bg-[#E63946] rounded-full flex items-center justify-center text-3xl font-bold text-[#FFFFFF] shadow-lg">
                  {step.number}
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 left-[calc(100%+1rem)] w-24 h-1 bg-[#333333] transform -translate-y-1/2"></div>
                )}
              </div>
              <h3 className="text-xl font-semibold text-[#E63946] mb-3">{step.title}</h3>
              <p className="text-[#B0B0B0]">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;