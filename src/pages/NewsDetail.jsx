import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

const NewsDetail = () => {
  const { id } = useParams();
  const [news, setNews] = useState(null);
  const [relatedNews, setRelatedNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Retrieve news data based on ID
    let newsData = null;
    let category = '';
    
    // Check category prefix in ID
    if (id.startsWith('e')) {
      // Economy news
      newsData = getEconomyNewsById(id);
      category = 'ekonomi';
    } else if (id.startsWith('m')) {
      // Entertainment news
      newsData = getEntertainmentNewsById(id);
      category = 'magazin';
    } else if (id.startsWith('s')) {
      // Sports news
      newsData = getSportsNewsById(id);
      category = 'spor';
    } else if (id.startsWith('k')) {
      // Crypto news
      newsData = getCryptoNewsById(id);
      category = 'kripto';
    } else {
      // Default news
      newsData = getDefaultNewsById(id);
      category = 'gundem';
    }
    
    // Get related news from the same category
    const related = getRelatedNews(category, id);
    
    setNews(newsData);
    setRelatedNews(related);
    setLoading(false);
  }, [id]);

  // Get Economy News by ID
  const getEconomyNewsById = (newsId) => {
    const economyNews = [
      {
        id: 'e1',
        title: 'Merkez Bankası faiz kararını açıkladı',
        content: 'Türkiye Cumhuriyet Merkez Bankası, politika faizini yüzde 50 seviyesinde sabit tuttu. TCMB, alınan kararda enflasyonun kontrol altına alınması hedefini vurguladı. Kararda, "Parasal sıkılaştırmanın enflasyon üzerindeki etkilerinin gözlendiği mevcut konjonktürde, dezenflasyon sürecinin öngörüldüğü şekilde devam etmesi için parasal sıkılığın bir süre daha korunması gerektiği değerlendirilmektedir" ifadesine yer verildi. Merkez Bankası ayrıca, ticari kredilerin yıllık büyüme oranının ılımlı seyretmesinin de enflasyonla mücadeleye katkı sağlayacağını ifade etti.',
        category: 'ekonomi',
        image: 'https://images.pexels.com/photos/534216/pexels-photo-534216.jpeg',
        date: '2024-06-22',
        author: 'Ahmet Yılmaz',
        tags: ['merkez bankası', 'faiz', 'enflasyon', 'ekonomi']
      },
      {
        id: 'e2',
        title: 'Dolar/TL kurunda son durum ne?',
        content: 'Dolar/TL kuru, küresel piyasalardaki gelişmeler ve yurt içi ekonomik veriler ışığında son bir haftada dalgalı bir seyir izledi. Analistlere göre, Fed\'in faiz indirimi sinyalleri ve TCMB\'nin sıkı para politikası duruşu Türk Lirası için pozitif bir ortam yaratıyor. Bununla birlikte, jeopolitik gelişmeler ve cari açıktaki artış kurun yukarı yönlü hareketi için risk oluşturuyor. Uzmanlar, önümüzdeki dönemde kurun 32-34 bandında hareket etmesini öngörüyor.',
        category: 'ekonomi',
        image: 'https://images.pexels.com/photos/259249/pexels-photo-259249.jpeg',
        date: '2024-06-21',
        author: 'Ayşe Demir',
        tags: ['dolar', 'kur', 'merkez bankası', 'ekonomi']
      },
      {
        id: 'e3',
        title: 'İhracat rakamları beklentilerin üzerinde',
        content: 'Türkiye İhracatçılar Meclisi (TİM) verilerine göre, mayıs ayında ihracat geçen yılın aynı ayına göre yüzde 12 artarak 22 milyar dolar oldu. Bu, aylık bazda şimdiye kadar kaydedilen en yüksek ihracat değerine işaret ediyor. İhracattaki artışta, otomotiv, kimyevi maddeler ve elektrik-elektronik sektörlerindeki performans etkili oldu. TİM Başkanı yaptığı açıklamada, "2024 yılı için 265 milyar dolarlık ihracat hedefimize emin adımlarla ilerliyoruz" dedi.',
        category: 'ekonomi',
        image: 'https://images.pexels.com/photos/3856045/pexels-photo-3856045.jpeg',
        date: '2024-06-20',
        author: 'Mehmet Kaya',
        tags: ['ihracat', 'ticaret', 'ekonomi', 'TİM']
      }
    ];
    
    return economyNews.find(news => news.id === newsId) || fallbackNews(newsId);
  };

  // Get Entertainment News by ID
  const getEntertainmentNewsById = (newsId) => {
    const entertainmentNews = [
      {
        id: 'm1',
        title: 'Ünlü oyuncu yeni filminin çekimlerine başladı',
        content: 'Türk sinemasının sevilen ismi, yönetmen koltuğunda oturacağı yeni filmi için kamera karşısına geçti. Film, 2025 yılında vizyona girecek. Oyuncu, son röportajında "Bu film kariyerimde yeni bir sayfa açacak. Hem yönetmen hem başrol oyuncusu olarak çok heyecanlıyım" dedi. Filmin çekimleri İstanbul ve Kapadokya\'da gerçekleşecek. Projenin bütçesinin 40 milyon TL olduğu ve uluslararası film festivallerinde gösterilmesinin planlandığı belirtildi.',
        category: 'magazin',
        image: 'https://images.pexels.com/photos/1049746/pexels-photo-1049746.jpeg',
        date: '2024-06-22',
        author: 'Zeynep Korkmaz',
        tags: ['sinema', 'film', 'magazin', 'yönetmen']
      },
      {
        id: 'm2',
        title: 'Ünlü çift evliliğe ilk adımı attı',
        content: 'İki yıldır birlikte olan ünlü çift, dün akşam aile arasında düzenlenen nişan töreniyle evliliğe ilk adımı attı. Boğaz manzaralı bir restoranda gerçekleşen nişan törenine çiftin yakın arkadaşları ve aile üyeleri katıldı. Gelinin kırmızı bir elbise, damadın ise lacivert bir takım elbise giydiği törenden romantik kareler sosyal medyada büyük ilgi gördü. Çiftin, eylül ayında düğün yapmayı planladığı öğrenildi.',
        category: 'magazin',
        image: 'https://images.pexels.com/photos/265791/pexels-photo-265791.jpeg',
        date: '2024-06-21',
        author: 'Elif Yılmaz',
        tags: ['nişan', 'evlilik', 'ünlüler', 'magazin']
      },
      {
        id: 'm3',
        title: 'Genç şarkıcının yeni single\'ı rekor kırdı',
        content: 'Popüler müzik platformlarında yayınlanan yeni şarkı, ilk 24 saatte 5 milyon dinlenme sayısını aşarak büyük bir başarıya imza attı. Şarkıcı, sosyal medya hesabından yaptığı paylaşımda hayranlarına teşekkür etti ve "Bu rekor sizin sayenizde. Yeni müzik projeleri için çok heyecanlıyım ve çok yakında daha fazla sürprizle karşınızda olacağım" ifadelerini kullandı. Müzik eleştirmenleri, şarkının yaz aylarının hit parçası olma potansiyeline sahip olduğunu belirtiyor.',
        category: 'magazin',
        image: 'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg',
        date: '2024-06-20',
        author: 'Can Tekin',
        tags: ['müzik', 'şarkı', 'rekor', 'magazin']
      }
    ];
    
    return entertainmentNews.find(news => news.id === newsId) || fallbackNews(newsId);
  };

  // Get Sports News by ID
  const getSportsNewsById = (newsId) => {
    const sportsNews = [
      {
        id: 's1',
        title: 'Milliler EURO 2024\'te çeyrek finale yükseldi',
        content: 'A Milli Futbol Takımımız, Avrupa Şampiyonası\'nda oynadığı son 16 turunda rakibini eleyerek çeyrek finale yükselmeyi başardı. Karşılaşmada kalesinde gol görmeyen Milli Takım, 90 dakikada 2 gol buldu. Teknik direktör, maç sonrası yaptığı açıklamada, "Oyuncularımla gurur duyuyorum. Bu galibiyet tüm Türkiye\'ye armağan olsun. Çeyrek finalde de aynı azim ve kararlılıkla mücadele edeceğiz" dedi. Çeyrek final karşılaşması önümüzdeki cumartesi günü oynanacak.',
        category: 'spor',
        image: 'https://images.pexels.com/photos/46798/the-ball-stadion-football-the-pitch-46798.jpeg',
        date: '2024-06-22',
        author: 'Ali Kara',
        tags: ['futbol', 'milli takım', 'euro 2024', 'spor']
      },
      {
        id: 's2',
        title: 'Basketbol Süper Ligi\'nde şampiyon belli oldu',
        content: 'Basketbol Süper Ligi final serisinin beşinci maçında rakibini yenen takım, üst üste 3. kez şampiyonluğa ulaştı. Nefes kesen mücadelede son saniyede gelen üçlük, karşılaşmanın kaderini belirledi. Takımın kaptanı, "Çok zorlu bir sezon geçirdik. Hem Avrupa\'da hem ligde mücadele etmek kolay değildi ama karakterimizi gösterdik. Bu şampiyonluk taraftarlarımız için" diye konuştu. Şampiyon takım, kutlamaları için yarın şehir turu yapacak.',
        category: 'spor',
        image: 'https://images.pexels.com/photos/358042/pexels-photo-358042.jpeg',
        date: '2024-06-21',
        author: 'Emre Şahin',
        tags: ['basketbol', 'şampiyonluk', 'süper lig', 'spor']
      },
      {
        id: 's3',
        title: 'Formula 1\'de nefes kesen yarış',
        content: 'Formula 1 Türkiye Grand Prix\'sinde son turlarda yaşanan çekişme, seyircilere unutulmaz anlar yaşattı. Yarışın son 5 turunda lider değişikliği yaşanırken, son turda gerçekleşen hamleler şampiyonluğun kaderini etkiledi. Pistin kaygan zemini ve değişken hava koşulları pilotları zorlarken, birçok araçta lastik sorunları yaşandı. Yarış sonunda podyumun ilk basamağında yer alan pilot, "Bugün araba mükemmeldi ve doğru stratejik kararlar aldık. İstanbul\'da yarışmak her zaman çok özel" açıklamasını yaptı.',
        category: 'spor',
        image: 'https://images.pexels.com/photos/12199060/pexels-photo-12199060.jpeg',
        date: '2024-06-20',
        author: 'Burak Yılmaz',
        tags: ['formula 1', 'yarış', 'grand prix', 'spor']
      }
    ];
    
    return sportsNews.find(news => news.id === newsId) || fallbackNews(newsId);
  };

  // Get Crypto News by ID
  const getCryptoNewsById = (newsId) => {
    const cryptoNews = [
      {
        id: 'k1',
        title: 'Bitcoin 70 bin doları yeniden test etti',
        content: 'Dünyanın en büyük kripto para birimi Bitcoin, son 24 saatte değer kazanarak 70 bin dolar psikolojik sınırına yaklaştı. Uzmanlar, kurumsal alımların artması ve spot Bitcoin ETF\'lerine olan ilginin devam etmesinin fiyat artışını desteklediğini belirtiyor. Analistler, Bitcoin\'in önümüzdeki dönemde 75-80 bin dolar bandını test edebileceğini öngörüyor. Bununla birlikte, ABD\'deki ekonomik veriler ve Fed\'in politika kararları, kripto para piyasasındaki volatiliteyi artırabilir.',
        category: 'kripto',
        image: 'https://images.pexels.com/photos/844124/pexels-photo-844124.jpeg',
        date: '2024-06-22',
        author: 'Deniz Ak',
        tags: ['bitcoin', 'kripto para', 'yatırım', 'borsa']
      },
      {
        id: 'k2',
        title: 'Ethereum 2.0 güncellemesi yaklaşıyor',
        content: 'Ethereum ağı için önemli bir dönüm noktası olan 2.0 güncellemesinin Temmuz ayında gerçekleştirilmesi bekleniyor. Güncelleme ile birlikte ağın enerji tüketimi azalacak ve işlem kapasitesi artacak. Ethereum kurucusu Vitalik Buterin, yaptığı açıklamada, "Bu güncelleme ile Ethereum\'un geleceğini şekillendiriyoruz. Ölçeklenebilirlik ve sürdürülebilirlik sorunlarını çözerek kullanıcı deneyimini iyileştireceğiz" dedi. Güncellemeden sonra Ethereum fiyatında olumlu bir hareket beklenirken, ağ üzerinde oluşturulmuş projelerin de değer kazanacağı tahmin ediliyor.',
        category: 'kripto',
        image: 'https://images.pexels.com/photos/6770774/pexels-photo-6770774.jpeg',
        date: '2024-06-21',
        author: 'Mert Yılmaz',
        tags: ['ethereum', 'blockchain', 'güncelleme', 'kripto para']
      },
      {
        id: 'k3',
        title: 'Merkeziyetsiz finans (DeFi) piyasası büyümeye devam ediyor',
        content: 'DeFi ekosisteminin toplam kilitli değeri 150 milyar doları aştı. Sektörün öncü projeleri yeni fonksiyonlar ekleyerek büyümeyi sürdürüyor. Merkeziyetsiz borsalar (DEX) ve kredi platformları, kullanıcılarına geleneksel finans kurumlarından daha yüksek getiri sağlama potansiyeliyle ilgi görüyor. Ancak uzmanlar, DeFi protokollerindeki güvenlik açıklarının sektör için en büyük risk olduğuna dikkat çekiyor. Geçtiğimiz ay yaşanan hack olaylarında kullanıcılar milyonlarca dolar değerinde kripto para kaybetti. Düzenleyici kurumların DeFi alanına yönelik adımları da yakından takip ediliyor.',
        category: 'kripto',
        image: 'https://images.pexels.com/photos/6771900/pexels-photo-6771900.jpeg',
        date: '2024-06-20',
        author: 'Selin Öztürk',
        tags: ['defi', 'merkeziyetsiz finans', 'blockchain', 'kripto para']
      }
    ];
    
    return cryptoNews.find(news => news.id === newsId) || fallbackNews(newsId);
  };

  // Fallback news item if ID is not found
  const fallbackNews = (newsId) => {
    return {
      id: newsId,
      title: 'Haber bulunamadı',
      content: 'Aradığınız haber içeriği sistemde bulunamadı veya yayından kaldırılmış olabilir.',
      category: 'gundem',
      image: 'https://images.pexels.com/photos/518543/pexels-photo-518543.jpeg',
      date: '2024-06-22',
      author: 'Haber Editörü',
      tags: ['haber']
    };
  };

  // Get Default News by ID
  const getDefaultNewsById = (newsId) => {
    const defaultNews = [
      {
        id: 'default1',
        title: 'Gündemde Öne Çıkan Haberler',
        content: 'Türkiye gündeminde bugün yaşanan önemli gelişmelere dair detaylı bilgiler burada yer alacak. Siyaset, ekonomi, spor ve daha birçok alanda yaşanan gelişmeleri takip edebilirsiniz.',
        category: 'gundem',
        image: 'https://images.pexels.com/photos/518543/pexels-photo-518543.jpeg',
        date: '2024-06-22',
        author: 'Haber Merkezi',
        tags: ['gündem', 'siyaset', 'haber']
      }
    ];
    
    return defaultNews.find(news => news.id === newsId) || fallbackNews(newsId);
  };

  // Get related news from the same category
  const getRelatedNews = (category, currentId) => {
    let allNews = [];
    
    switch(category) {
      case 'ekonomi':
        allNews = [
          {
            id: 'e1',
            title: 'Merkez Bankası faiz kararını açıkladı',
            description: 'TCMB politika faizini yüzde 50 seviyesinde sabit tuttu',
            image: 'https://images.pexels.com/photos/534216/pexels-photo-534216.jpeg',
            category: 'ekonomi'
          },
          {
            id: 'e2',
            title: 'Dolar/TL kurunda son durum ne?',
            description: 'Dolar/TL kuru, son bir haftada dalgalı bir seyir izledi',
            image: 'https://images.pexels.com/photos/259249/pexels-photo-259249.jpeg',
            category: 'ekonomi'
          },
          {
            id: 'e3',
            title: 'İhracat rakamları beklentilerin üzerinde',
            description: 'Mayıs ayında ihracat geçen yılın aynı ayına göre yüzde 12 arttı',
            image: 'https://images.pexels.com/photos/3856045/pexels-photo-3856045.jpeg',
            category: 'ekonomi'
          }
        ];
        break;
      case 'magazin':
        allNews = [
          {
            id: 'm1',
            title: 'Ünlü oyuncu yeni filminin çekimlerine başladı',
            description: 'Film, 2025 yılında vizyona girecek',
            image: 'https://images.pexels.com/photos/1049746/pexels-photo-1049746.jpeg',
            category: 'magazin'
          },
          {
            id: 'm2',
            title: 'Ünlü çift evliliğe ilk adımı attı',
            description: 'Nişan töreni aile arasında gerçekleşti',
            image: 'https://images.pexels.com/photos/265791/pexels-photo-265791.jpeg',
            category: 'magazin'
          },
          {
            id: 'm3',
            title: 'Genç şarkıcının yeni single\'ı rekor kırdı',
            description: 'Şarkı ilk 24 saatte 5 milyon dinlenme sayısına ulaştı',
            image: 'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg',
            category: 'magazin'
          }
        ];
        break;
      case 'spor':
        allNews = [
          {
            id: 's1',
            title: 'Milliler EURO 2024\'te çeyrek finale yükseldi',
            description: 'A Milli Futbol Takımımız, son 16 turunu geçmeyi başardı',
            image: 'https://images.pexels.com/photos/46798/the-ball-stadion-football-the-pitch-46798.jpeg',
            category: 'spor'
          },
          {
            id: 's2',
            title: 'Basketbol Süper Ligi\'nde şampiyon belli oldu',
            description: 'Takım üst üste 3. kez şampiyonluğa ulaştı',
            image: 'https://images.pexels.com/photos/358042/pexels-photo-358042.jpeg',
            category: 'spor'
          },
          {
            id: 's3',
            title: 'Formula 1\'de nefes kesen yarış',
            description: 'Türkiye Grand Prix\'si seyircilere unutulmaz anlar yaşattı',
            image: 'https://images.pexels.com/photos/12199060/pexels-photo-12199060.jpeg',
            category: 'spor'
          }
        ];
        break;
      case 'kripto':
        allNews = [
          {
            id: 'k1',
            title: 'Bitcoin 70 bin doları yeniden test etti',
            description: 'Kurumsal alımlar fiyat artışını destekliyor',
            image: 'https://images.pexels.com/photos/844124/pexels-photo-844124.jpeg',
            category: 'kripto'
          },
          {
            id: 'k2',
            title: 'Ethereum 2.0 güncellemesi yaklaşıyor',
            description: 'Güncelleme Temmuz ayında gerçekleştirilecek',
            image: 'https://images.pexels.com/photos/6770774/pexels-photo-6770774.jpeg',
            category: 'kripto'
          },
          {
            id: 'k3',
            title: 'Merkeziyetsiz finans (DeFi) piyasası büyümeye devam ediyor',
            description: 'Toplam kilitli değer 150 milyar doları aştı',
            image: 'https://images.pexels.com/photos/6771900/pexels-photo-6771900.jpeg',
            category: 'kripto'
          }
        ];
        break;
      default:
        allNews = [
          {
            id: 'default1',
            title: 'Gündemde Öne Çıkan Haberler',
            description: 'Türkiye gündeminde bugün yaşanan önemli gelişmeler',
            image: 'https://images.pexels.com/photos/518543/pexels-photo-518543.jpeg',
            category: 'gundem'
          }
        ];
    }
    
    // Filter out current news
    return allNews.filter(news => news.id !== currentId);
  };

  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
        <p>Haber yükleniyor...</p>
      </div>
    );
  }

  if (!news) {
    return (
      <div className="news-not-found">
        <h2>Haber bulunamadı</h2>
        <p>Aradığınız haber içeriği sistemde bulunamadı veya yayından kaldırılmış olabilir.</p>
        <Link to="/" className="home-link">Ana Sayfaya Dön</Link>
      </div>
    );
  }

  return (
    <div className="news-detail-page">
      {/* Breadcrumb */}
      <div className="news-breadcrumb">
        <Link to="/">Ana Sayfa</Link> 
        <span>&gt;</span> 
        <Link to={`/category/${news.category}`}>{news.category.charAt(0).toUpperCase() + news.category.slice(1)}</Link>
        <span>&gt;</span>
        <span>Haber</span>
      </div>
      
      {/* News Header */}
      <div className="news-header">
        <h1>{news.title}</h1>
        <div className="news-meta">
          <div className="news-author">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
            <span>{news.author}</span>
          </div>
          <div className="news-date">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
              <line x1="16" y1="2" x2="16" y2="6"></line>
              <line x1="8" y1="2" x2="8" y2="6"></line>
              <line x1="3" y1="10" x2="21" y2="10"></line>
            </svg>
            <span>{news.date}</span>
          </div>
          <div className="news-category">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z"></path>
            </svg>
            <Link to={`/category/${news.category}`}>{news.category.charAt(0).toUpperCase() + news.category.slice(1)}</Link>
          </div>
        </div>
      </div>
      
      {/* Featured Image */}
      <div className="news-featured-image">
        <img src={news.image} alt={news.title} />
      </div>
      
      {/* Content */}
      <div className="news-content">
        <p>{news.content}</p>
      </div>
      
      {/* Tags */}
      {news.tags && news.tags.length > 0 && (
        <div className="news-tags">
          <span className="tags-title">Etiketler:</span>
          <div className="tag-list">
            {news.tags.map((tag, index) => (
              <span key={index} className="tag">{tag}</span>
            ))}
          </div>
        </div>
      )}
      
      {/* Related News */}
      {relatedNews.length > 0 && (
        <div className="related-news-section">
          <h3>İlgili Haberler</h3>
          <div className="related-news-grid">
            {relatedNews.map((item) => (
              <div key={item.id} className="related-news-card">
                <Link to={`/news/${item.id}`}>
                  <div className="related-news-image">
                    <img src={item.image} alt={item.title} />
                    <div className="related-category-label">{item.category}</div>
                  </div>
                  <div className="related-news-content">
                    <h4>{item.title}</h4>
                    <p>{item.description}</p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      )}
      
      {/* Category Navigation */}
      <div className="category-navigation">
        <h3>Kategoriler</h3>
        <div className="category-links">
          <Link to="/category/ekonomi" className={news.category === 'ekonomi' ? 'active' : ''}>Ekonomi</Link>
          <Link to="/category/magazin" className={news.category === 'magazin' ? 'active' : ''}>Magazin</Link>
          <Link to="/category/spor" className={news.category === 'spor' ? 'active' : ''}>Spor</Link>
          <Link to="/category/kripto" className={news.category === 'kripto' ? 'active' : ''}>Kripto Para</Link>
          <Link to="/category/gundem" className={news.category === 'gundem' ? 'active' : ''}>Gündem</Link>
        </div>
      </div>
    </div>
  );
};

export default NewsDetail; 