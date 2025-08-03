// app/register-donor/page.jsx
// The main page that renders the donor registration form component.
import DonorRegistrationForm from "../components/DonorRegistrationForm";
export const metadata = {
  title: "LifeBlood - Register as a Donor",
  description: "Join the community of lifesavers by registering as a blood donor.",
};

export default function RegisterDonorPage() {
  return (
    <>
      <DonorRegistrationForm />
    </>
  );
}