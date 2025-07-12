import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import UserProfile from './components/UserProfile';

function App() {
  return (
    <div>
      <Header />
      <MainContent />
      <UserProfile name="Tsinat" age="32" bio="Loves hiking and playing football" />
      <Footer />
    </div>
  );
}

export default App;