import { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [news] = useState([
    {
      id: 1,
      title: "BU SÖZLER ÇOK KONUŞULUR: O DAHA DON GİYİYORDU",
      image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg",
      category: "SİYASET"
    },
    {
      id: 2,
      title: "MERKEZ BANKASI'NDAN KRİTİK FAİZ KARARI! İŞTE DETAYLAR",
      image: "https://images.pexels.com/photos/210574/pexels-photo-210574.jpeg",
      category: "EKONOMİ"
    },
    {
      id: 3,
      title: "FENERBAHÇE'DEN FLAŞ TRANSFER HAMLESİ! DÜNYA YILDIZI GELİYOR",
      image: "https://images.pexels.com/photos/46798/the-ball-stadion-football-the-pitch-46798.jpeg",
      category: "SPOR"
    },
    {
      id: 4,
      title: "SON DAKİKA: İSTANBUL'DA DEPREM! İŞTE ŞİDDETİ VE MERKEZİ",
      image: "https://images.pexels.com/photos/1446076/pexels-photo-1446076.jpeg",
      category: "SON DAKİKA"
    },
    {
      id: 5,
      title: "TEKNOLOJİ DEVİNDEN ÇIĞIR AÇAN YENİLİK! YAPAY ZEKA DÜNYASINDA YENİ DÖNEM",
      image: "https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg",
      category: "TEKNOLOJİ"
    },
    {
      id: 6,
      title: "ÜNLÜ OYUNCUDAN ŞAŞIRTAN İTİRAF: 'ARTIK DAYANAMIYORUM'",
      image: "https://images.pexels.com/photos/1150837/pexels-photo-1150837.jpeg",
      category: "MAGAZİN"
    },
    {
      id: 7,
      title: "DOLAR VE EURO'DA SON DURUM! İŞTE PİYASALARDA SON DURUM",
      image: "https://images.pexels.com/photos/534216/pexels-photo-534216.jpeg",
      category: "FİNANS"
    },
    {
      id: 8,
      title: "DÜNYA ŞOKTA! RUSYA'DAN FLAŞ HAMLE",
      image: "https://images.pexels.com/photos/1098662/pexels-photo-1098662.jpeg",
      category: "DÜNYA"
    },
    {
      id: 9,
      title: "BİTCOİN TARİHİ ZİRVEYİ GÖRDÜ! KRİPTO PARA PİYASASINDA SON DURUM",
      image: "https://images.pexels.com/photos/844124/pexels-photo-844124.jpeg",
      category: "KRİPTO PARA"
    }
  ]);

  const [gridNews] = useState([
    {
      id: 1,
      title: "Datça Kaymakamlığı Milli Emlak Servis Şefliği",
      image: "https://images.pexels.com/photos/159832/documents-business-paper-desk-159832.jpeg",
      category: "Resmi İlanlar"
    },
    {
      id: 2,
      title: "Henüz 14 yaşındaydı! Bir babanın en zor anları",
      image: "https://images.pexels.com/photos/7319083/pexels-photo-7319083.jpeg",
      category: "3. Sayfa"
    },
    {
      id: 3,
      title: "Tırın altına giren otomobilde can verenlerle ilgili ilk bilgi",
      image: "https://images.pexels.com/photos/163016/crash-test-collision-60-km-h-distraction-163016.jpeg",
      category: "3. Sayfa"
    },
    {
      id: 4,
      title: "İsmail Kartal'ın takımında eşi benzeri görülmemiş olay",
      image: "https://images.pexels.com/photos/3621104/pexels-photo-3621104.jpeg",
      category: "Spor"
    },
    {
      id: 5,
      title: "İsrail'in vahşi infazının görüntüleri ortaya çıktı",
      image: "https://images.pexels.com/photos/2265488/pexels-photo-2265488.jpeg",
      category: "Dünya"
    },
    {
      id: 6,
      title: "Hakem maçı erken bitirdi, sonrasında yaşananlar bomba",
      image: "https://images.pexels.com/photos/46798/the-ball-stadion-football-the-pitch-46798.jpeg",
      category: "Spor"
    },
    {
      id: 7,
      title: "Son dakika: Merkez Bankası faiz kararını açıkladı!",
      image: "https://images.pexels.com/photos/210600/pexels-photo-210600.jpeg",
      category: "Ekonomi"
    },
    {
      id: 8,
      title: "Meteoroloji'den kritik uyarı! O bölgelerde yaşayanlar dikkat",
      image: "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg",
      category: "Gündem"
    },
    {
      id: 9,
      title: "Ünlü oyuncudan şok açıklama: 'Artık dayanamıyorum'",
      image: "https://images.pexels.com/photos/1150837/pexels-photo-1150837.jpeg",
      category: "Magazin"
    },
    {
      id: 10,
      title: "Bitcoin yeni rekor kırdı! İşte son durum",
      image: "https://images.pexels.com/photos/844124/pexels-photo-844124.jpeg",
      category: "Kripto Para"
    },
    {
      id: 11,
      title: "Cumhurbaşkanı Erdoğan'dan önemli açıklamalar",
      image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg",
      category: "Siyaset"
    },
    {
      id: 12,
      title: "Otomotiv devi açıkladı: Türkiye'de üretilecek",
      image: "https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg",
      category: "Ekonomi"
    },
    {
      id: 13,
      title: "Survivor'da şok eleme! Veda eden isim belli oldu",
      image: "https://images.pexels.com/photos/1659438/pexels-photo-1659438.jpeg",
      category: "Magazin"
    },
    {
      id: 14,
      title: "İstanbul'da deprem paniği! İşte son depremler",
      image: "https://images.pexels.com/photos/1446076/pexels-photo-1446076.jpeg",
      category: "Son Dakika"
    },
    {
      id: 15,
      title: "Milli Savunma Bakanlığı duyurdu: 8 terörist etkisiz hale getirildi",
      image: "https://images.pexels.com/photos/1959115/pexels-photo-1959115.jpeg",
      category: "Gündem"
    },
    {
      id: 16,
      title: "Galatasaray'dan transfer bombası! Dünya yıldızı geliyor",
      image: "https://images.pexels.com/photos/47730/the-ball-stadion-football-the-pitch-47730.jpeg",
      category: "Spor"
    },
    {
      id: 17,
      title: "Yapay zeka dünyayı değiştirecek! İşte son gelişmeler",
      image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg",
      category: "Teknoloji"
    },
    {
      id: 18,
      title: "Altın fiyatları coştu! İşte gram altın ve çeyrek altın fiyatları",
      image: "https://images.pexels.com/photos/47047/gold-ingots-golden-treasure-47047.jpeg",
      category: "Ekonomi"
    },
    {
      id: 19,
      title: "Rusya-Ukrayna savaşında flaş gelişme!",
      image: "https://images.pexels.com/photos/1098662/pexels-photo-1098662.jpeg",
      category: "Dünya"
    },
    {
      id: 20,
      title: "İşte 2024'ün en çok satan otomobilleri",
      image: "https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg",
      category: "Otomobil"
    },
    {
      id: 21,
      title: "Sağlık Bakanlığı'ndan önemli açıklama: O ilaçlar geri ödeme listesinde",
      image: "https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg",
      category: "Sağlık"
    },
    {
      id: 22,
      title: "MasterChef'te büyük sürpriz! Şampiyon belli oldu",
      image: "https://images.pexels.com/photos/3338497/pexels-photo-3338497.jpeg",
      category: "Televizyon"
    },
    {
      id: 23,
      title: "KPSS sonuçları açıklandı! Tıkla öğren",
      image: "https://images.pexels.com/photos/4778611/pexels-photo-4778611.jpeg",
      category: "Eğitim"
    },
    {
      id: 24,
      title: "Meteoroloji uyardı: Kuvvetli yağış geliyor",
      image: "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg",
      category: "Hava Durumu"
    },
    {
      id: 25,
      title: "THY'den yeni hat müjdesi! O ülkeye direkt uçuş başlıyor",
      image: "https://images.pexels.com/photos/379419/pexels-photo-379419.jpeg",
      category: "Turizm"
    },
    {
      id: 26,
      title: "Emeklilere müjde! Ek ödeme geliyor",
      image: "https://images.pexels.com/photos/7862529/pexels-photo-7862529.jpeg",
      category: "Ekonomi"
    },
    {
      id: 27,
      title: "Apple'dan flaş Türkiye kararı! Fiyatlar değişti",
      image: "https://images.pexels.com/photos/1294886/pexels-photo-1294886.jpeg",
      category: "Teknoloji"
    },
    {
      id: 28,
      title: "Benzin ve motorine zam geldi! İşte yeni fiyatlar",
      image: "https://images.pexels.com/photos/9796/car-refill-transportation-transport.jpg",
      category: "Ekonomi"
    },
    {
      id: 29,
      title: "Fenerbahçe'den transfer bombası! Dünya yıldızı imzalıyor",
      image: "https://images.pexels.com/photos/46798/the-ball-stadion-football-the-pitch-46798.jpeg",
      category: "Spor"
    },
    {
      id: 30,
      title: "WhatsApp'a bomba özellik! Artık mümkün olacak",
      image: "https://images.pexels.com/photos/4132538/pexels-photo-4132538.jpeg",
      category: "Teknoloji"
    }
  ]);

  const [touchStartX, setTouchStartX] = useState(0);
  const [touchEndX, setTouchEndX] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % news.length);
  }, [news.length]);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + news.length) % news.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const handleTouchStart = (e) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEndX(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    const swipeDistance = touchStartX - touchEndX;
    
    if (Math.abs(swipeDistance) > 50) {
      if (swipeDistance > 0) {
        // Swipe left - go to next slide
        nextSlide();
      } else {
        // Swipe right - go to previous slide
        prevSlide();
      }
    }
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 7000);

    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <div className="home">
      <div className="slider-container"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <button className="slider-button prev" onClick={prevSlide}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
        </button>
        <div className="slider">
          {news.map((item, index) => (
            <div
              key={item.id}
              className={`slide ${index === currentSlide ? 'active' : ''}`}
              style={{ transform: `translateX(${(index - currentSlide) * 100}%)` }}
            >
              <img src={item.image} alt={item.title} loading="lazy" />
              <div className="slide-content">
                <div className="category-tag">{item.category}</div>
                <h2>{item.title}</h2>
              </div>
            </div>
          ))}
        </div>
        <button className="slider-button next" onClick={nextSlide}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </button>
        <div className="slider-pagination">
          {Array.from({ length: news.length }, (_, i) => (
            <button
              key={i}
              className={`pagination-dot ${i === currentSlide ? 'active' : ''}`}
              onClick={() => goToSlide(i)}
            >
              {i + 1}
            </button>
          ))}
        </div>
      </div>

      <div className="container news-grid-container">
        <div className="news-grid">
          {gridNews.map((item) => (
            <div key={item.id} className="news-card">
              <div className="news-card-image">
                <img src={item.image} alt={item.title} loading="lazy" />
                <div className="category-label">{item.category}</div>
              </div>
              <div className="news-card-content">
                <h3>{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="special-news-section">
        <div className="special-news-header">
          <h2>HABERLER.COM ÖZEL</h2>
        </div>
        <div className="container special-news-container">
          <div className="main-special-news">
            <div className="special-news-card large">
              <img src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg" alt="Ana haber" loading="lazy" />
              <div className="special-news-content">
                <span className="special-tag">SON DAKİKA</span>
                <h3>Cumhurbaşkanı'ndan önemli açıklamalar: "Ekonomide yeni dönem başlıyor"</h3>
                <p>Cumhurbaşkanı, ekonomi alanında yapılacak yeni düzenlemeleri açıkladı. Vatandaşları yakından ilgilendiren kararlar...</p>
              </div>
            </div>
          </div>
          <div className="side-special-news">
            <div className="special-news-card">
              <img src="https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg" alt="Sağlık haberi" loading="lazy" />
              <div className="special-news-content">
                <span className="special-tag">SAĞLIK</span>
                <h3>Diyabeti olanlar dikkat! Ayak yaranız neden tehlikeli?</h3>
              </div>
            </div>
            <div className="special-news-card">
              <img src="https://images.pexels.com/photos/3759657/pexels-photo-3759657.jpeg" alt="Yaşam haberi" loading="lazy" />
              <div className="special-news-content">
                <span className="special-tag">YAŞAM</span>
                <h3>"Manifestleri doğru şekilde ve kalben yaptığınızda olur"</h3>
              </div>
            </div>
            <div className="special-news-card">
              <img src="https://images.pexels.com/photos/1098662/pexels-photo-1098662.jpeg" alt="Siyaset haberi" loading="lazy" />
              <div className="special-news-content">
                <span className="special-tag">SİYASET</span>
                <h3>CHP'nin boykot çağrıları işe yarayacak mı?</h3>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container news-grid-container">
        <div className="news-grid">
          <div className="news-card">
            <div className="news-card-image">
              <img src="https://images.pexels.com/photos/7319083/pexels-photo-7319083.jpeg" alt="Eğitim haberi" loading="lazy" />
              <div className="category-label">EĞİTİM</div>
            </div>
            <div className="news-card-content">
              <h3>2024 YKS başvuruları başladı! İşte başvuru tarihleri ve sınav ücreti</h3>
            </div>
          </div>
          <div className="news-card">
            <div className="news-card-image">
              <img src="https://images.pexels.com/photos/3943882/pexels-photo-3943882.jpeg" alt="Sağlık haberi" loading="lazy" />
              <div className="category-label">SAĞLIK</div>
            </div>
            <div className="news-card-content">
              <h3>Uzmanlardan kritik uyarı: Bu belirtileri sakın göz ardı etmeyin!</h3>
            </div>
          </div>
          <div className="news-card">
            <div className="news-card-image">
              <img src="https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg" alt="Otomotiv haberi" loading="lazy" />
              <div className="category-label">OTOMOTİV</div>
            </div>
            <div className="news-card-content">
              <h3>Yerli otomobil TOGG'dan yeni model müjdesi! İşte detaylar</h3>
            </div>
          </div>
          <div className="news-card">
            <div className="news-card-image">
              <img src="https://images.pexels.com/photos/210574/pexels-photo-210574.jpeg" alt="Finans haberi" loading="lazy" />
              <div className="category-label">FİNANS</div>
            </div>
            <div className="news-card-content">
              <h3>Borsa İstanbul'da rekor! İşte piyasalarda son durum</h3>
            </div>
          </div>
          <div className="news-card">
            <div className="news-card-image">
              <img src="https://images.pexels.com/photos/46798/the-ball-stadion-football-the-pitch-46798.jpeg" alt="Spor haberi" loading="lazy" />
              <div className="category-label">SPOR</div>
            </div>
            <div className="news-card-content">
              <h3>Süper Lig'de şampiyonluk yarışı kızıştı! İşte puan durumu</h3>
            </div>
          </div>
          <div className="news-card">
            <div className="news-card-image">
              <img src="https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg" alt="Hava durumu" loading="lazy" />
              <div className="category-label">HAVA DURUMU</div>
            </div>
            <div className="news-card-content">
              <h3>Meteoroloji'den son dakika uyarısı: Bu bölgelerde yaşayanlar dikkat!</h3>
            </div>
          </div>
          <div className="news-card">
            <div className="news-card-image">
              <img src="https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg" alt="Teknoloji haberi" loading="lazy" />
              <div className="category-label">TEKNOLOJİ</div>
            </div>
            <div className="news-card-content">
              <h3>ChatGPT'nin yeni özelliği şaşırttı! İşte yapay zekanın son marifeti</h3>
            </div>
          </div>
          <div className="news-card">
            <div className="news-card-image">
              <img src="https://images.pexels.com/photos/1659438/pexels-photo-1659438.jpeg" alt="Magazin haberi" loading="lazy" />
              <div className="category-label">MAGAZİN</div>
            </div>
            <div className="news-card-content">
              <h3>Ünlü çiftten ayrılık haberi! İşte o açıklama</h3>
            </div>
          </div>
          <div className="news-card">
            <div className="news-card-image">
              <img src="https://images.pexels.com/photos/2265488/pexels-photo-2265488.jpeg" alt="Dünya haberi" loading="lazy" />
              <div className="category-label">DÜNYA</div>
            </div>
            <div className="news-card-content">
              <h3>ABD'den flaş Ortadoğu açıklaması! Dünya bu kararı konuşuyor</h3>
            </div>
          </div>
        </div>
      </div>

      <div className="breaking-news-section">
        <div className="container">
          <div className="breaking-news-header">
            <div className="red-line"></div>
            <h2>Son Dakika Haberleri</h2>
          </div>
          <div className="breaking-news-list">
            <div className="breaking-news-item">
              <p>TBMM Başkanı Kurtulmuş: "Filistin'deki gelişmeler, yeni bir küresel mimariye ihtiyaç olduğunu ortaya koyuyor"</p>
            </div>
            <div className="breaking-news-item">
              <p>Ali Babacan'dan Özgür Özel'e Tebrik</p>
            </div>
            <div className="breaking-news-item">
              <p>Fahrettin Altun'dan, Özgür Özel'e "Cunta Başkanı" Tepkisi: "En Hafif Tabiriyle Siyasi Ahlaksızlıktır, Had Bilmezliktir"</p>
            </div>
            <div className="breaking-news-item">
              <p>CHP'li Kadınlar Elektrik Zamlarına Tepki Gösterdi</p>
            </div>
            <div className="breaking-news-item">
              <p>İBB Özgürlük ve Demokrasi Şenliği İstanbulluları Ağırlıyor</p>
            </div>
            <div className="breaking-news-item">
              <p>Bursa Tarihi Hanlar Bölgesi'nde Yapı Temizliği ve Yeşil Alan Düzenlemesi</p>
            </div>
            <div className="breaking-news-item">
              <p>Yılmaz Tunç: "Cumhurbaşkanı'na 'Cunta Başkanı' Demek, Milletimizin İradesine Tahammülsüzlüğün İtirafıdır"</p>
            </div>
            <div className="breaking-news-item">
              <p>Tutuklu İPA Başkanı Gökçe'den CHP Kurultayı ve İmamoğlu'na Destek</p>
            </div>
            <div className="breaking-news-item">
              <p>Hava Sıcaklıklarında Ani Düşüş Bekleniyor</p>
            </div>
            <div className="breaking-news-item">
              <p>Konya'da Site Görevlisi, Sakinini Öldürdü</p>
            </div>
            <div className="breaking-news-item">
              <p>CHP, İmza Kampanyasını AKP'nin Güven Oylamasına Dönüştürüyor</p>
            </div>
            <div className="breaking-news-item">
              <p>Netanyahu, Macaristan Ziyaretinin Ardından ABD'ye Gidiyor</p>
            </div>
          </div>
        </div>
      </div>

      <footer className="footer">
        <div className="footer-top">
          <div className="container">
            <div className="footer-brand">
              <div className="red-vertical-line"></div>
              <h2>Haberler.com</h2>
              <span className="copyright-small">© Copyright 2025 Tüm Hakları Gizlidir.</span>
            </div>
            <div className="top-menu">
              <a href="#">Hakkımızda</a>
              <span className="dot-separator">•</span>
              <a href="#">Reklam</a>
              <span className="dot-separator">•</span>
              <a href="#">İletişim</a>
              <span className="dot-separator">•</span>
              <a href="#">Künye</a>
              <span className="dot-separator">•</span>
              <a href="#">Yayın İlkeleri</a>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="footer-categories">
            <div className="category-column">
              <h3>Haberler</h3>
              <a href="#">Ekonomi</a>
              <a href="#">Spor</a>
              <a href="#">Magazin</a>
              <a href="#">Son Dakika</a>
              <a href="#">Kripto</a>
              <a href="#">3 Sayfa</a>
              <a href="#">Dünya</a>
            </div>
            <div className="category-column">
              <h3>Son Dakika</h3>
              <a href="#">Sağlık</a>
              <a href="#">Teknoloji</a>
              <a href="#">Finans</a>
              <a href="#">Turizm</a>
              <a href="#">Yazarlar</a>
              <a href="#">Yerel Haberler</a>
            </div>
            <div className="category-column">
              <h3>Politika</h3>
              <a href="#">Recep Tayyip Erdoğan</a>
              <a href="#">Ekrem İmamoğlu</a>
              <a href="#">Özgür Özel</a>
              <a href="#">Hakan Fidan</a>
              <a href="#">Devlet Bahçeli</a>
              <a href="#">Donald Trump</a>
              <a href="#">Vladimir Putin</a>
            </div>
            <div className="category-column">
              <h3>Magazin</h3>
              <a href="#">Şinası Yurtsever</a>
              <a href="#">Tanyeli</a>
              <a href="#">Halit Ergenç</a>
              <a href="#">Acun Ilıcalı</a>
              <a href="#">Aras Bulut İynemli</a>
              <a href="#">Demet Akalın</a>
              <a href="#">Sinem Ünsal</a>
            </div>
            <div className="category-column">
              <h3>Spor</h3>
              <a href="#">Jose Mourinho</a>
              <a href="#">Victor Osimhen</a>
              <a href="#">Okan Buruk</a>
              <a href="#">Fatih Tekke</a>
              <a href="#">Şenol Güneş</a>
              <a href="#">Rıza Çalımbay</a>
              <a href="#">Arda Güler</a>
            </div>
            <div className="category-column">
              <h3>Haberler.com</h3>
              <a href="#">Hava Durumu</a>
              <a href="#">Namaz Vakitleri</a>
              <a href="#">Seçim Sonuçları</a>
              <a href="#">Şans Oyunları</a>
              <a href="#">Rüya Tabirleri</a>
              <a href="#">Yemek Tarifleri</a>
            </div>
          </div>

          <div className="footer-social-section">
            <div className="social-follow-section">
              <h3>BİZİ TAKİP EDİN</h3>
              <div className="social-icons">
                <a href="#" className="facebook">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" width="16" height="16">
                    <path fill="currentColor" d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" />
                  </svg>
                </a>
                <a href="#" className="twitter">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="16" height="16">
                    <path fill="currentColor" d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
                  </svg>
                </a>
                <a href="#" className="instagram">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="16" height="16">
                    <path fill="currentColor" d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                  </svg>
                </a>
                <a href="#" className="youtube">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" width="16" height="16">
                    <path fill="currentColor" d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-29.5 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z" />
                  </svg>
                </a>
                <a href="#" className="linkedin">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="16" height="16">
                    <path fill="currentColor" d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" />
                  </svg>
                </a>
                <a href="#" className="whatsapp">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="16" height="16">
                    <path fill="currentColor" d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
                  </svg>
                </a>
                <a href="#" className="tiktok">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="16" height="16">
                    <path fill="currentColor" d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z" />
                  </svg>
                </a>
              </div>
            </div>

            <div className="app-download-section">
              <h3>UYGULAMAMIZI İNDİRİN</h3>
              <div className="app-buttons">
                <a href="#" className="app-store">
                  <div className="app-btn">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" width="28" height="28">
                      <path fill="currentColor" d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
                    </svg>
                    <div className="app-btn-text">
                      <span>Download on the</span>
                      <strong>App Store</strong>
                    </div>
                  </div>
                </a>
                <a href="#" className="google-play">
                  <div className="app-btn">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="28" height="28">
                      <path fill="currentColor" d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.6 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z" />
                    </svg>
                    <div className="app-btn-text">
                      <span>GET IT ON</span>
                      <strong>Google Play</strong>
                    </div>
                  </div>
                </a>
                <a href="#" className="app-gallery">
                  <div className="app-btn">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" width="28" height="28">
                      <path fill="currentColor" d="M304 0h-224c-35.35 0-64 28.65-64 64v384c0 35.35 28.65 64 64 64h224c35.35 0 64-28.65 64-64v-384c0-35.35-28.65-64-64-64zM192 480c-17.75 0-32-14.25-32-32s14.25-32 32-32 32 14.25 32 32-14.25 32-32 32zM304 64v320h-224v-320h224z" />
                    </svg>
                    <div className="app-btn-text">
                      <span>EXPLORE IT ON</span>
                      <strong>AppGallery</strong>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>

          <div className="footer-description">
            <p>Haberler.com: Türkiye'nin en kapsamlı haber sitesi. Son dakika haberleri ve en güncel gelişmeler Haberler.com'da.</p>
          </div>

          <div className="footer-links">
            <a href="#">Kullanım Şartları</a>
            <a href="#">Gizlilik Politikası</a>
            <a href="#">Çerez Politikası</a>
            <a href="#">Kişisel Verilerin Korunması</a>
            <a href="#">Veri Sahibi Başvuru Formu</a>
            <a href="#">Webmaster</a>
            <a href="#">Mobil Uygulamalar</a>
            <a href="#">RSS</a>
            <a href="#">Sitene Ekle</a>
          </div>

          <div className="footer-bottom">
            <div className="footer-info">
              <p>Haberler.com - Son Dakika Haberler ve Güncel Haberler</p>
              <p>Haber | Son Dakika | Haberler</p>
              <p>Gizlilik ve çerez ayarları !Hata Bildir! 06.04.2025 17:14:43 #1.13#</p>
              <p>Harun Erdoğan Yazılım tarafından geliştirilmiştir.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home; 