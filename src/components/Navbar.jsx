import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    console.log('Arama yapıldı:', searchQuery);
  };

  return (
    <nav className="navbar">
      <div className="top-nav">
        <div className="container">
          <Link to="/" className="logo">HABERLER<span>.COM</span></Link>
          <div className="main-categories">
            <Link to="/category/ekonomi">EKONOMİ</Link>
            <Link to="/category/magazin">MAGAZİN</Link>
            <Link to="/category/spor">SPOR</Link>
            <Link to="/category/kripto">KRİPTO PARA</Link>
            <Link to="/category/gundem">GÜNDEM</Link>
          </div>
          <div className="nav-right">
            <form onSubmit={handleSearch} className="search-form">
              <input
                type="text"
                placeholder="Haber, video, foto galeri ara"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button type="submit">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="8"/>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"/>
                </svg>
              </button>
            </form>
            <Link to="/giris" className="login-btn">Üye Girişi</Link>
          </div>
        </div>
      </div>
      <div className="bottom-nav">
        <div className="container">
          <div className="sub-categories">
            <Link to="/son-dakika" className="highlight">SON DAKİKA</Link>
            <Link to="/category/teknoloji">TEKNOLOJİ</Link>
            <Link to="/category/dunya">DÜNYA</Link>
            <Link to="/category/egitim">EĞİTİM</Link>
            <Link to="/category/saglik">SAĞLIK</Link>
            <Link to="/category/yasam">YAŞAM</Link>
            <Link to="/category/otomobil">OTOMOBİL</Link>
            <Link to="/category/seyahat">SEYAHAT</Link>
            <button className="all-categories-btn">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="3" y1="12" x2="21" y2="12"/>
                <line x1="3" y1="6" x2="21" y2="6"/>
                <line x1="3" y1="18" x2="21" y2="18"/>
              </svg>
              TÜM KATEGORİLER
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;