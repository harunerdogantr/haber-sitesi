import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

const Category = () => {
  const { category } = useParams();
  const [news, setNews] = useState([]);
  const [featuredNews, setFeaturedNews] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Kategori bazlı içerik göstermek için kategoriye göre farklı haberler oluşturalım
    let categoryContent = [];
    let featured = null;

    // Kategori adına göre özel içerik
    switch(category) {
      case 'ekonomi':
        categoryContent = getEconomyNews();
        break;
      case 'magazin':
        categoryContent = getEntertainmentNews();
        break;
      case 'spor':
        categoryContent = getSportsNews();
        break;
      case 'kripto':
        categoryContent = getCryptoNews();
        break;
      default:
        categoryContent = getDefaultNews(category);
    }

    // Öne çıkan haberi ayarla (listenin ilk elemanı)
    if (categoryContent.length > 0) {
      featured = categoryContent[0];
      // Öne çıkan haberi listeden çıkaralım
      categoryContent = categoryContent.slice(1);
    }

    setFeaturedNews(featured);
    setNews(categoryContent);
    setLoading(false);
  }, [category]);

  // Ekonomi haberleri
  const getEconomyNews = () => {
    return [
      {
        id: 'e1',
        title: 'Merkez Bankası faiz kararını açıkladı',
        description: 'Türkiye Cumhuriyet Merkez Bankası, politika faizini yüzde 50 seviyesinde sabit tuttu. TCMB, alınan kararda enflasyonun kontrol altına alınması hedefini vurguladı.',
        image: 'https://images.pexels.com/photos/534216/pexels-photo-534216.jpeg',
        date: '2024-06-22',
        category: 'ekonomi'
      },
      {
        id: 'e2',
        title: 'Dolar/TL kurunda son durum ne?',
        description: 'Dolar/TL kuru, küresel piyasalardaki gelişmeler ve yurt içi ekonomik veriler ışığında son bir haftada dalgalı bir seyir izledi.',
        image: 'https://images.pexels.com/photos/259249/pexels-photo-259249.jpeg',
        date: '2024-06-21',
        category: 'ekonomi'
      },
      {
        id: 'e3',
        title: 'İhracat rakamları beklentilerin üzerinde',
        description: 'Türkiye İhracatçılar Meclisi (TİM) verilerine göre, mayıs ayında ihracat geçen yılın aynı ayına göre yüzde 12 artarak 22 milyar dolar oldu.',
        image: 'https://images.pexels.com/photos/3856045/pexels-photo-3856045.jpeg',
        date: '2024-06-20',
        category: 'ekonomi'
      },
      {
        id: 'e4',
        title: 'Otomotiv sektörü rekora koşuyor',
        description: 'Türkiye\'de otomotiv üretimi ilk 5 ayda geçen yılın aynı dönemine göre yüzde 18 artarak 650 bin adedi aştı.',
        image: 'https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg',
        date: '2024-06-19',
        category: 'ekonomi'
      },
      {
        id: 'e5',
        title: 'Enflasyon verisi açıklandı',
        description: 'Türkiye İstatistik Kurumu (TÜİK), mayıs ayı enflasyon rakamlarını açıkladı. Tüketici fiyatları endeksi (TÜFE) mayıs ayında yıllık bazda yüzde 75,45 arttı.',
        image: 'https://images.pexels.com/photos/264547/pexels-photo-264547.jpeg',
        date: '2024-06-18',
        category: 'ekonomi'
      },
      {
        id: 'e6',
        title: 'İşsizlik oranı geriledi',
        description: 'TÜİK verilerine göre, Türkiye genelinde 15 ve daha yukarı yaştakilerde işsiz sayısı 2024 yılı 1. çeyreğinde bir önceki çeyreğe göre 109 bin kişi azalarak 3 milyon 894 bin kişi oldu.',
        image: 'https://images.pexels.com/photos/7654586/pexels-photo-7654586.jpeg',
        date: '2024-06-17',
        category: 'ekonomi'
      }
    ];
  };

  // Magazin haberleri
  const getEntertainmentNews = () => {
    return [
      {
        id: 'm1',
        title: 'Ünlü oyuncu yeni filminin çekimlerine başladı',
        description: 'Türk sinemasının sevilen ismi, yönetmen koltuğunda oturacağı yeni filmi için kamera karşısına geçti. Film, 2025 yılında vizyona girecek.',
        image: 'https://images.pexels.com/photos/1049746/pexels-photo-1049746.jpeg',
        date: '2024-06-22',
        category: 'magazin'
      },
      {
        id: 'm2',
        title: 'Ünlü çift evliliğe ilk adımı attı',
        description: 'İki yıldır birlikte olan ünlü çift, dün akşam aile arasında düzenlenen nişan töreniyle evliliğe ilk adımı attı.',
        image: 'https://images.pexels.com/photos/265791/pexels-photo-265791.jpeg',
        date: '2024-06-21',
        category: 'magazin'
      },
      {
        id: 'm3',
        title: 'Genç şarkıcının yeni single\'ı rekor kırdı',
        description: 'Popüler müzik platformlarında yayınlanan yeni şarkı, ilk 24 saatte 5 milyon dinlenme sayısını aşarak büyük bir başarıya imza attı.',
        image: 'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg',
        date: '2024-06-20',
        category: 'magazin'
      },
      {
        id: 'm4',
        title: 'Ödüllü oyuncu yeni dizisiyle ekranlara dönüyor',
        description: 'Uluslararası ödüllü oyuncu, uzun bir aranın ardından yeni bir internet platformu dizisiyle izleyici karşısına çıkmaya hazırlanıyor.',
        image: 'https://images.pexels.com/photos/2041396/pexels-photo-2041396.jpeg',
        date: '2024-06-19',
        category: 'magazin'
      },
      {
        id: 'm5',
        title: 'Ünlü çift boşanıyor',
        description: '10 yıllık evlilikleri olan ünlü çift, sosyal medya hesaplarından yaptıkları ortak açıklamayla yollarını ayırdıklarını duyurdu.',
        image: 'https://images.pexels.com/photos/5384445/pexels-photo-5384445.jpeg',
        date: '2024-06-18',
        category: 'magazin'
      }
    ];
  };

  // Spor haberleri
  const getSportsNews = () => {
    return [
      {
        id: 's1',
        title: 'Milliler EURO 2024\'te çeyrek finale yükseldi',
        description: 'A Milli Futbol Takımımız, Avrupa Şampiyonası\'nda oynadığı son 16 turunda rakibini eleyerek çeyrek finale yükselmeyi başardı.',
        image: 'https://images.pexels.com/photos/46798/the-ball-stadion-football-the-pitch-46798.jpeg',
        date: '2024-06-22',
        category: 'spor'
      },
      {
        id: 's2',
        title: 'Basketbol Süper Ligi\'nde şampiyon belli oldu',
        description: 'Basketbol Süper Ligi final serisinin beşinci maçında rakibini yenen takım, üst üste 3. kez şampiyonluğa ulaştı.',
        image: 'https://images.pexels.com/photos/358042/pexels-photo-358042.jpeg',
        date: '2024-06-21',
        category: 'spor'
      },
      {
        id: 's3',
        title: 'Formula 1\'de nefes kesen yarış',
        description: 'Formula 1 Türkiye Grand Prix\'sinde son turlarda yaşanan çekişme, seyircilere unutulmaz anlar yaşattı.',
        image: 'https://images.pexels.com/photos/12199060/pexels-photo-12199060.jpeg',
        date: '2024-06-20',
        category: 'spor'
      },
      {
        id: 's4',
        title: 'Voleybol Milli Takımı Olimpiyat yolunda',
        description: 'Filenin Sultanları, Olimpiyat Oyunları\'na katılma hakkını elde etti. Milli takım, turnuvadaki ilk maçını 28 Temmuz\'da oynayacak.',
        image: 'https://images.pexels.com/photos/1263426/pexels-photo-1263426.jpeg',
        date: '2024-06-19',
        category: 'spor'
      },
      {
        id: 's5',
        title: 'Süper Lig\'de transfer hareketliliği',
        description: 'Yeni sezon öncesinde Süper Lig takımları, kadro planlaması kapsamında önemli transferlere imza atıyor.',
        image: 'https://images.pexels.com/photos/47730/the-ball-stadion-football-the-pitch-47730.jpeg',
        date: '2024-06-18',
        category: 'spor'
      }
    ];
  };

  // Kripto para haberleri
  const getCryptoNews = () => {
    return [
      {
        id: 'k1',
        title: 'Bitcoin 70 bin doları yeniden test etti',
        description: 'Dünyanın en büyük kripto para birimi Bitcoin, son 24 saatte değer kazanarak 70 bin dolar psikolojik sınırına yaklaştı.',
        image: 'https://images.pexels.com/photos/844124/pexels-photo-844124.jpeg',
        date: '2024-06-22',
        category: 'kripto'
      },
      {
        id: 'k2',
        title: 'Ethereum 2.0 güncellemesi yaklaşıyor',
        description: 'Ethereum ağı için önemli bir dönüm noktası olan 2.0 güncellemesinin Temmuz ayında gerçekleştirilmesi bekleniyor.',
        image: 'https://images.pexels.com/photos/6770774/pexels-photo-6770774.jpeg',
        date: '2024-06-21',
        category: 'kripto'
      },
      {
        id: 'k3',
        title: 'Merkeziyetsiz finans (DeFi) piyasası büyümeye devam ediyor',
        description: 'DeFi ekosisteminin toplam kilitli değeri 150 milyar doları aştı. Sektörün öncü projeleri yeni fonksiyonlar ekleyerek büyümeyi sürdürüyor.',
        image: 'https://images.pexels.com/photos/6771900/pexels-photo-6771900.jpeg',
        date: '2024-06-20',
        category: 'kripto'
      },
      {
        id: 'k4',
        title: 'NFT pazarında yeni dönem',
        description: 'Takas edilemez token (NFT) pazarı, sanat, oyun ve metaverse projelerinin etkisiyle yeniden canlanmaya başladı.',
        image: 'https://images.pexels.com/photos/8370752/pexels-photo-8370752.jpeg',
        date: '2024-06-19',
        category: 'kripto'
      },
      {
        id: 'k5',
        title: 'Düzenleyici kurumlardan kripto paralara yönelik yeni adımlar',
        description: 'Finans otoriteleri, kripto varlıklar için yeni düzenlemeler getirmeye hazırlanıyor. Piyasada belirsizlik endişesi hakim.',
        image: 'https://images.pexels.com/photos/8370784/pexels-photo-8370784.jpeg',
        date: '2024-06-18',
        category: 'kripto'
      }
    ];
  };

  // Varsayılan haberler
  const getDefaultNews = (categoryName) => {
    return [
      {
        id: `${categoryName}1`,
        title: `${categoryName.toUpperCase()} Kategorisinde Öne Çıkan Haber`,
        description: 'Bu kategoride öne çıkan haberleri burada bulabilirsiniz.',
        image: 'https://images.pexels.com/photos/518543/pexels-photo-518543.jpeg',
        date: '2024-06-22',
        category: categoryName
      },
      {
        id: `${categoryName}2`,
        title: `${categoryName} ile ilgili son gelişmeler`,
        description: 'Bu kategoride yaşanan son gelişmeleri takip edebilirsiniz.',
        image: 'https://images.pexels.com/photos/3944425/pexels-photo-3944425.jpeg',
        date: '2024-06-21',
        category: categoryName
      }
    ];
  };

  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
        <p>Yükleniyor...</p>
      </div>
    );
  }

  return (
    <div className="category-page">
      {/* Kategori Başlığı */}
      <div className="category-header">
        <h1>{category.toUpperCase()} HABERLERİ</h1>
        <div className="category-breadcrumb">
          <Link to="/">Anasayfa</Link> <span>&gt;</span> <span>{category.charAt(0).toUpperCase() + category.slice(1)}</span>
        </div>
      </div>

      {/* Öne Çıkan Haber */}
      {featuredNews && (
        <div className="featured-news">
          <div className="featured-news-image">
            <img src={featuredNews.image} alt={featuredNews.title} />
            <div className="category-badge">{featuredNews.category}</div>
          </div>
          <div className="featured-news-content">
            <h2>{featuredNews.title}</h2>
            <p className="featured-news-date">{featuredNews.date}</p>
            <p className="featured-news-description">{featuredNews.description}</p>
            <Link to={`/news/${featuredNews.id}`} className="read-more-btn">
              Devamını Oku
            </Link>
          </div>
        </div>
      )}

      {/* Diğer Haberler Grid */}
      <div className="category-news-grid">
        {news.map((item) => (
          <div key={item.id} className="news-card">
            <div className="news-card-image">
              <img src={item.image} alt={item.title} />
              <div className="category-label">{item.category}</div>
            </div>
            <div className="news-card-content">
              <h3>{item.title}</h3>
              <p className="news-date">{item.date}</p>
              <p className="news-description">{item.description.substring(0, 100)}...</p>
              <Link to={`/news/${item.id}`} className="read-more-link">
                Devamını Oku &rarr;
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Kategori Navigasyonu */}
      <div className="category-navigation">
        <h3>Diğer Kategoriler</h3>
        <div className="category-links">
          <Link to="/category/ekonomi" className={category === 'ekonomi' ? 'active' : ''}>Ekonomi</Link>
          <Link to="/category/magazin" className={category === 'magazin' ? 'active' : ''}>Magazin</Link>
          <Link to="/category/spor" className={category === 'spor' ? 'active' : ''}>Spor</Link>
          <Link to="/category/kripto" className={category === 'kripto' ? 'active' : ''}>Kripto Para</Link>
        </div>
      </div>
    </div>
  );
};

export default Category; 