import HeaderBox from '@/components/HeaderBox'
import RightSidebar from '@/components/RightSidebar';
import TotalBalanceBox from '@/components/TotalBalanceBox';

const Home = () => {
  const loggedIN = { firstName: "Aaditya", lastName: "Pitroda", email: "abc@gmail.com" };
  return (
    // ClassName 'home' propertise mentioned in "app/globals.css"
    <section className='home'>
      <div className='home-content'>
        <header className='home-header'>
          <HeaderBox
            type="greeting"
            title="Welcome"
            user={loggedIN?.firstName || 'Guest'}
            subtext="Access and manage your account and transactions efficiently."
          />
          <TotalBalanceBox
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={1809.20}
          />
        </header>
        RECENT TRANCTIONS
      </div>
      {/* Right Side bar for Home page */}
      <RightSidebar 
      user = {loggedIN}
      transactions = {[]}
      banks = {[{ currentBalance: 180.9 }, { currentBalance: 180.9 }]}
      />
    </section>
  )
}

export default Home