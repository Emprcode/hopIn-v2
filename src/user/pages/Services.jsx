import { RootLayout } from "../../components/layout/RootLayout";
import { GetStarted, ServiceComponent } from "../../components/pageComponents";

const Services = () => {
  return (
    <RootLayout>
      <div className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
          <h2 className="text-center text-base/7 font-semibold text-indigo-600">
            Our Services
          </h2>
          <p className="mx-auto mt-2 max-w-lg text-balance text-center text-4xl font-semibold tracking-tight text-gray-950 sm:text-5xl">
            We make your journey hassle-free
          </p>
          <ServiceComponent />
        </div>

        <div className="pt-24 sm:pt-32">
          <GetStarted />
        </div>
      </div>
    </RootLayout>
  );
};

export default Services;
