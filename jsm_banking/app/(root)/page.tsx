import HeaderBox from '@/components/HeaderBox'
import TotalBalanceBox from '@/components/TotalBalanceBox';

const Home = () => {
  const loggedIN = {firstName: "Aaditya Pitroda"};

  return (
    // ClassName 'home' propertise mentioned in "app/globals.css"
    <section className='home'>  
      <div className='home-content'>
        <header className='home-header'>

          <HeaderBox 
          type = "greeting"
          title="Welcome"
          user={loggedIN?.firstName || 'Guest'}
          subtext="Access and manage your account and transactions efficiently."
          />
          <TotalBalanceBox 
          accounts = {[]}
          totalBanks = {1}
          totalCurrentBalance = {1809.20}
          />

        </header>
      </div>
    </section>
  )
}

export default Home