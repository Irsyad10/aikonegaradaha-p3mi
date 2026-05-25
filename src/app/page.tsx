"use client";

import React, { useState, useEffect, useRef } from 'react';

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [language, setLanguage] = useState<'ID' | 'JP'>('ID');
  const [formData, setFormData] = useState({
    nama: '',
    hp: '',
    program: '',
    pesan: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const heroGraphicRef = useRef<HTMLDivElement>(null);

  // Handle sticky navbar shadow and 3D hero rotation on scroll
  useEffect(() => {
    const handleScroll = () => {
      const nav = document.getElementById('main-nav');
      if (nav) {
        if (window.scrollY > 10) {
          nav.classList.add('shadow-md');
          nav.classList.remove('shadow-sm');
        } else {
          nav.classList.add('shadow-sm');
          nav.classList.remove('shadow-md');
        }
      }

      // 3D Tilt rotation for hero graphic
      const heroGraphic = heroGraphicRef.current;
      if (heroGraphic) {
        const scrollY = window.scrollY;
        const maxScroll = window.innerHeight;
        if (scrollY <= maxScroll) {
          const progress = scrollY / maxScroll;
          const rotateX = progress * 20; // Tilt up to 20 deg
          const rotateY = progress * -15; // Rotate up to -15 deg
          const scale = 1 + progress * 0.05; // Scale up slightly
          heroGraphic.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(${scale})`;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Form submit handler
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.nama && formData.hp && formData.program) {
      setFormSubmitted(true);
      setTimeout(() => {
        setFormSubmitted(false);
        setFormData({ nama: '', hp: '', program: '', pesan: '' });
      }, 5000);
    }
  };

  // Content bilingual dictionary
  const content = {
    ID: {
      nav: {
        beranda: 'Beranda',
        program: 'Program',
        fasilitas: 'Fasilitas',
        biaya: 'Biaya',
        daftar: 'Daftar Sekarang'
      },
      hero: {
        tag: 'Lembaga Pelatihan Resmi Terakreditasi',
        title1: 'Wujudkan Karir di ',
        title2: 'Jepang',
        title3: 'Bersama LPK Global Maju',
        desc: 'Persiapkan masa depan profesional Anda dengan pelatihan intensif bahasa dan keterampilan, dibimbing langsung oleh instruktur berpengalaman untuk standar kerja industri Jepang.',
        cta1: 'Mulai Perjalanan Anda',
        cta2: 'Lihat Program',
        stat1: 'Alumni Sukses',
        stat2: 'Bidang Industri',
        stat3: 'Fasilitas Lengkap',
        cardDest: 'Keberangkatan 2024'
      },
      youtube: {
        tag: 'Mengenal Lebih Dekat',
        title: 'Profil LPK & Cerita Alumni',
        desc: 'Saksikan bagaimana LPK Global Maju mempersiapkan talenta Indonesia untuk bersaing di standar industri global melalui metode pelatihan yang disiplin dan terstruktur.'
      },
      programs: {
        tag: 'Pilihan Karir',
        title: 'Program Pelatihan Unggulan',
        desc: 'Pilih jalur karir yang sesuai dengan minat Anda. Kami menyediakan pelatihan komprehensif untuk berbagai sektor industri utama di Jepang.',
        cta: 'Lihat Detail',
        ctaSelect: 'Tanya Konsultan',
        confused: 'Bingung Memilih?',
        confusedDesc: 'Konsultasikan minat dan bakat Anda dengan tim ahli kami secara gratis.',
        list: [
          {
            id: 'kaigo',
            title: 'Kaigo',
            sub: 'Caregiver / Perawat Lansia',
            desc: 'Pelatihan intensif perawatan lansia dengan standar medis dasar Jepang, bahasa Jepang spesifik medis, dan etika kerja Kaigo.',
            icon: 'elderly',
            flag: true
          },
          {
            id: 'konstruksi',
            title: 'Konstruksi',
            sub: 'Pekerja Sipil / Konstruksi',
            desc: 'Membekali keterampilan teknis sipil, keselamatan kerja (K3) standar Jepang, dan penggunaan alat berat dasar.',
            icon: 'architecture',
            flag: false
          },
          {
            id: 'manufaktur',
            title: 'Manufaktur',
            sub: 'Pabrik & Perakitan',
            desc: 'Pelatihan proses produksi pabrik, perakitan, Quality Control (QC), dan budaya kerja disiplin 5S industri manufaktur.',
            icon: 'precision_manufacturing',
            flag: false
          },
          {
            id: 'perikanan',
            title: 'Perikanan',
            sub: 'Budidaya & Penangkapan Laut',
            desc: 'Keterampilan teknis penangkapan ikan, pengolahan hasil laut, dan navigasi dasar untuk industri perikanan maritim Jepang.',
            icon: 'sailing',
            flag: false
          },
          {
            id: 'driver',
            title: 'Driver',
            sub: 'Pengemudi Komersial',
            desc: 'Penguasaan kendaraan komersial, peraturan lalu lintas Jepang, dan logistik distribusi pengiriman barang profesional.',
            icon: 'local_shipping',
            flag: false
          }
        ]
      },
      fasilitas: {
        tag: 'Standar Premium',
        title: 'Fasilitas Lengkap & Modern',
        desc: 'Kami memastikan kenyamanan maksimal selama masa pelatihan dengan menyediakan infrastruktur yang menyerupai standar lingkungan kerja di Jepang.',
        img1Title: 'Ruang Kelas Interaktif',
        img2Title: 'Asrama Nyaman',
        img3Title: 'Katering 3x Sehari',
        img3Desc: 'Menu Sehat & Bergizi',
        featureTitle: 'Fasilitas Penunjang',
        features: [
          { title: 'Loker Pribadi', desc: 'Penyimpanan aman untuk setiap siswa.' },
          { title: 'Dispenser Air Minum', desc: 'Akses air bersih panas dan dingin 24 jam.' },
          { title: 'Fasilitas Laundry', desc: 'Mesin cuci modern untuk kebersihan seragam.' },
          { title: 'Toilet Standar Higienis', desc: 'Toilet bersih yang selalu terawat dengan baik.' }
        ]
      },
      biaya: {
        tag: 'Transparansi',
        title: 'Skema Pembiayaan',
        desc: 'Kami mengedepankan transparansi rincian biaya tanpa pungutan liar. Investasi terjangkau untuk masa depan profesional Anda.',
        card1: {
          tag: 'Tahap 1',
          title: 'Biaya Pelatihan',
          price: 'Rp 15.000.000',
          list: [
            'Modul & Buku Panduan Lengkap',
            'Seragam Resmi LPK',
            'Asrama & Katering (Selama Pelatihan)',
            'Tryout Ujian Bahasa (JLPT/JFT)'
          ]
        },
        card2: {
          tag: 'Tahap 2 (Setelah Lulus Interview)',
          title: 'Biaya Keberangkatan',
          price: 'Rp 30.000.000',
          list: [
            'Pengurusan Dokumen (Paspor, Visa)',
            'Medical Check-Up (MCU) Akhir',
            'Tiket Pesawat One-Way ke Jepang',
            'Uang Saku Awal Tiba'
          ]
        },
        info: 'Tersedia program Dana Talangan / Pinjaman Koperasi bagi siswa berprestasi yang memenuhi syarat. Hubungi kami untuk detail skema cicilan.'
      },
      daftar: {
        title: 'Mulai Langkah Pertama Anda',
        desc: 'Isi formulir di bawah untuk mendaftar atau menjadwalkan konsultasi gratis. Tim representatif kami akan segera menghubungi Anda untuk panduan selanjutnya.',
        office: 'Kantor Pusat',
        address: 'Jl. Pelatihan No. 123, Jakarta Selatan',
        phone: 'Telepon / WA',
        phoneNum: '+62 812 3456 7890',
        formTitle: 'Formulir Pendaftaran',
        labelNama: 'Nama Lengkap',
        placeholderNama: 'Masukkan nama sesuai KTP',
        labelHp: 'Nomor WhatsApp',
        placeholderHp: 'Contoh: 0812...',
        labelProgram: 'Program yang Diminati',
        placeholderProgram: 'Pilih Program...',
        labelPesan: 'Pesan / Pertanyaan (Opsional)',
        placeholderPesan: 'Tuliskan pertanyaan Anda di sini...',
        btnSubmit: 'Kirim Pendaftaran',
        successMsg: 'Terima kasih! Pendaftaran Anda berhasil dikirim. Tim kami akan menghubungi Anda dalam waktu 1x24 jam.'
      },
      footer: {
        desc: 'Membangun jembatan kesuksesan antara talenta muda Indonesia dan standar profesionalisme industri Jepang.',
        copy: '© 2026 LPK Global Maju. Menghubungkan Bakat Indonesia dengan Standar Profesional Jepang.',
        title1: 'Tautan Cepat',
        title2: 'Dukungan',
        links1: ['Tentang Kami', 'Karir di Jepang'],
        links2: ['Syarat & Ketentuan', 'Kebijakan Privasi', 'Hubungi Kami']
      }
    },
    JP: {
      nav: {
        beranda: 'ホーム',
        program: 'プログラム',
        fasilitas: '施設紹介',
        biaya: '費用',
        daftar: '今すぐ登録'
      },
      hero: {
        tag: '政府公認・正式認定済トレーニングセンター',
        title1: '日本でのキャリアを ',
        title2: '実現',
        title3: 'LPK Global Maju とともに',
        desc: '経験豊富な講師陣が日本産業界の基準に合わせて直接指導する、集中的な言語および技術トレーニングで、プロとしての将来に備えましょう。',
        cta1: '旅を始めましょう',
        cta2: 'プログラムを見る',
        stat1: '卒業生の成功実績',
        stat2: '対象産業分野',
        stat3: '完全な施設装備',
        cardDest: '2024年度日本派遣'
      },
      youtube: {
        tag: 'より近くで知る',
        title: '紹介映像＆卒業生ストーリー',
        desc: '規律ある体系的な訓練方法を通じて、LPK Global Majuがどのようにインドネシアの人材をグローバル産業基準に適応させているかをご覧ください。'
      },
      programs: {
        tag: 'キャリアの選択肢',
        title: '優れた研修プログラム',
        desc: 'あなたの興味に合ったキャリアパスを選択してください。日本の主要な産業セクター向けに総合的なトレーニングを提供しています。',
        cta: '詳細を見る',
        ctaSelect: '相談する',
        confused: '迷っていませんか？',
        confusedDesc: '専門のコンサルタントによる無料カウンセリングをご利用ください。',
        list: [
          {
            id: 'kaigo',
            title: '介護 (Kaigo)',
            sub: '介護士 / 高齢者ケア',
            desc: '日本の基本医療基準、医療特有の日本語、および介護仕事の倫理に焦点を当てた集中トレーニング。',
            icon: 'elderly',
            flag: true
          },
          {
            id: 'konstruksi',
            title: '建設 (Konstruksi)',
            sub: '土木 / 建設技術者',
            desc: '日本の安全基準（K3）に基づき、土木技術、基本的な建設用重機の操作について学びます。',
            icon: 'architecture',
            flag: false
          },
          {
            id: 'manufaktur',
            title: '製造 (Manufaktur)',
            sub: '工場 / 組立業務',
            desc: '工場生産管理、組み立てプロセス、品質管理（QC）、および日本の5S規律文化を学びます。',
            icon: 'precision_manufacturing',
            flag: false
          },
          {
            id: 'perikanan',
            title: '漁業 (Perikanan)',
            sub: '漁業・水産加工',
            desc: '日本の沿岸・遠洋漁業向けに、水産加工技術、ナビゲーション、基本的な漁獲作業を習得します。',
            icon: 'sailing',
            flag: false
          },
          {
            id: 'driver',
            title: 'ドライバー (Driver)',
            sub: '配送ドライバー',
            desc: '商業用車両の運転技術、日本の交通ルール、およびプロの流通配送物流について学びます。',
            icon: 'local_shipping',
            flag: false
          }
        ]
      },
      fasilitas: {
        tag: 'プレミアム基準',
        title: '充実した最新の施設',
        desc: '日本での就労環境に合わせた充実したインフラを完備し、トレーニング期間中の快適な滞在をお約束します。',
        img1Title: '双方向授業用教室',
        img2Title: '快適な生徒用寮',
        img3Title: '毎日3食の食事提供',
        img3Desc: '健康的で栄養バランスの良いメニュー',
        featureTitle: 'その他のサポート設備',
        features: [
          { title: '個人用ロッカー', desc: '各生徒に安全な個人収納を提供。' },
          { title: 'ウォーターサーバー', desc: '冷水・温水が24時間いつでも利用可能。' },
          { title: 'ランドリー設備', desc: '制服を清潔に保つための最新の洗濯機。' },
          { title: '高水準の衛生トイレ', desc: '常に清潔に管理・維持されたトイレ。' }
        ]
      },
      biaya: {
        tag: '透明性',
        title: '費用スキーム',
        desc: '追加の違法徴収なしの透明性の高い費用体系です。将来への安全な投資プラン。',
        card1: {
          tag: 'フェーズ 1',
          title: '研修講習費用',
          price: '1,500万ルピア',
          list: [
            '完全な教材・ハンドブック一式',
            'LPK公式制服',
            '研修中の宿泊・食事費用',
            '日本語試験（JLPT/JFT）模擬テスト'
          ]
        },
        card2: {
          tag: 'フェーズ 2 (内定獲得後)',
          title: '日本派遣渡航費用',
          price: '3,000万ルピア',
          list: [
            '書類手続き手数料（パスポート、ビザ）',
            '最終的な健康診断（MCU）費用',
            '日本への片道航空券',
            '到着直後の初期支度金'
          ]
        },
        info: '優秀な生徒を対象に、提携信用協同組合の低金利つなぎ融資制度（奨学ローン）が利用可能です。詳細はお問い合わせください。'
      },
      daftar: {
        title: '最初の一歩を踏み出しましょう',
        desc: '以下のフォームに入力して、登録手続きまたは無料相談の予約を行ってください。担当スタッフより追ってご連絡いたします。',
        office: '本部オフィス',
        address: 'ジャカルタ南部、訓練道路123番地',
        phone: '電話 / WhatsApp',
        phoneNum: '+62 812 3456 7890',
        formTitle: '登録お申し込みフォーム',
        labelNama: '氏名',
        placeholderNama: '身分証明書記載のフルネーム',
        labelHp: 'WhatsApp番号',
        placeholderHp: '例: 0812...',
        labelProgram: '希望プログラム',
        placeholderProgram: 'プログラムを選択してください...',
        labelPesan: 'メッセージ・質問 (任意)',
        placeholderPesan: 'ご質問等があればこちらにご記入ください...',
        btnSubmit: 'お申し込みを送信',
        successMsg: 'ありがとうございます！お申し込みは正常に送信されました。24時間以内に担当スタッフよりご連絡いたします。'
      },
      footer: {
        desc: 'インドネシアの若い才能と日本のプロフェッショナル産業基準を結ぶ架け橋を築きます。',
        copy: '© 2026 LPK Global Maju. インドネシアの才能と日本の基準をつなぐ。',
        title1: 'クイックリンク',
        title2: 'サポート',
        links1: ['会社概要', '日本でのキャリア'],
        links2: ['利用規約', 'プライバシーポリシー', 'お問い合わせ']
      }
    }
  };

  const t = content[language];

  return (
    <div className="bg-background text-on-background font-body-md min-h-screen">
      
      {/* Top Navigation Bar */}
      <nav 
        className="fixed top-0 w-full z-50 bg-surface/95 dark:bg-surface-container-highest/95 backdrop-blur-md shadow-sm transition-all duration-300" 
        id="main-nav"
      >
        <div className="flex justify-between items-center h-20 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
          {/* Brand */}
          <a className="flex items-center gap-2 group" href="#">
            <span className="font-display-lg-mobile text-display-lg-mobile font-bold text-primary dark:text-primary-fixed tracking-tight">
              LPK Global Maju
            </span>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-stack-lg">
            <a className="text-secondary font-bold border-b-2 border-secondary pb-1 text-label-md transition-all duration-200" href="#beranda">
              {t.nav.beranda}
            </a>
            <a className="text-on-surface-variant hover:text-primary transition-colors text-label-md font-medium hover:text-secondary-container duration-200" href="#program">
              {t.nav.program}
            </a>
            <a className="text-on-surface-variant hover:text-primary transition-colors text-label-md font-medium hover:text-secondary-container duration-200" href="#fasilitas">
              {t.nav.fasilitas}
            </a>
            <a className="text-on-surface-variant hover:text-primary transition-colors text-label-md font-medium hover:text-secondary-container duration-200" href="#biaya">
              {t.nav.biaya}
            </a>
          </div>

          {/* Actions */}
          <div className="hidden md:flex items-center gap-stack-md">
            {/* Bilingual Toggle */}
            <div className="flex bg-surface-container-low rounded-full p-1 border border-outline-variant">
              <button 
                onClick={() => setLanguage('ID')}
                className={`px-3 py-1 rounded-full text-label-md font-semibold transition-premium duration-200 ${
                  language === 'ID' 
                    ? 'bg-primary text-on-primary shadow-sm' 
                    : 'text-on-surface-variant hover:text-primary'
                }`}
              >
                ID
              </button>
              <button 
                onClick={() => setLanguage('JP')}
                className={`px-3 py-1 rounded-full text-label-md font-semibold transition-premium duration-200 ${
                  language === 'JP' 
                    ? 'bg-primary text-on-primary shadow-sm' 
                    : 'text-on-surface-variant hover:text-primary'
                }`}
              >
                JP
              </button>
            </div>
            <a 
              className="bg-secondary hover:bg-secondary-container text-on-secondary font-semibold text-label-md px-6 py-2.5 rounded-lg transition-premium active:scale-95 duration-200" 
              href="#daftar"
            >
              {t.nav.daftar}
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Menu" 
            className="md:hidden text-on-surface p-2 focus:outline-none"
          >
            <span className="material-symbols-outlined text-3xl">
              {isMobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-surface border-t border-outline-variant/30 py-6 px-6 space-y-6 animate-fade-in-up">
            <div className="flex flex-col space-y-4">
              <a 
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-primary font-bold text-lg" 
                href="#beranda"
              >
                {t.nav.beranda}
              </a>
              <a 
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-on-surface-variant font-medium text-lg" 
                href="#program"
              >
                {t.nav.program}
              </a>
              <a 
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-on-surface-variant font-medium text-lg" 
                href="#fasilitas"
              >
                {t.nav.fasilitas}
              </a>
              <a 
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-on-surface-variant font-medium text-lg" 
                href="#biaya"
              >
                {t.nav.biaya}
              </a>
            </div>
            
            <div className="flex items-center justify-between pt-4 border-t border-outline-variant/30">
              <span className="text-sm font-semibold text-on-surface-variant">Pilih Bahasa / 言語:</span>
              <div className="flex bg-surface-container-low rounded-full p-1 border border-outline-variant">
                <button 
                  onClick={() => setLanguage('ID')}
                  className={`px-3 py-1 rounded-full text-label-md font-semibold ${
                    language === 'ID' ? 'bg-primary text-on-primary' : 'text-on-surface-variant'
                  }`}
                >
                  ID
                </button>
                <button 
                  onClick={() => setLanguage('JP')}
                  className={`px-3 py-1 rounded-full text-label-md font-semibold ${
                    language === 'JP' ? 'bg-primary text-on-primary' : 'text-on-surface-variant'
                  }`}
                >
                  JP
                </button>
              </div>
            </div>
            
            <a 
              onClick={() => setIsMobileMenuOpen(false)}
              className="block text-center bg-secondary hover:bg-secondary-container text-on-secondary font-bold py-3 rounded-lg w-full"
              href="#daftar"
            >
              {t.nav.daftar}
            </a>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section 
        className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden bg-surface-container-lowest hero-pattern" 
        id="beranda"
      >
        <div 
          className="absolute inset-0 z-0 opacity-20 pointer-events-none parallax-bg" 
          style={{ 
            backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDRrH3AbRGpP02AY25GTY9GvE0w5vQm-p4EmlJFqOkSQT_-S4WDlMC2e11mjtEStL0FF8UXDLu3dowdN3u5RpAyqBZYLrPfoGw8aDfUrzkNsA1EvX36hq71FVCOtQb8-ga0py7eeh73_I1qGImr25lbEkJd9bR9AvbUM5_s-89BYkgEGyWYM8VLT0_qro1DzUbJvhBwUJU8t8_E2LZcNJhlVXB5VjIeINdNulNOnocts72CQL_Ehotsn0z_LkjX3WrnP94HQpqAs-mD')"
          }}
        ></div>
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop relative z-10 w-full grid grid-cols-1 lg:grid-cols-2 gap-section-gap items-center">
          <div className="space-y-stack-lg max-w-2xl transform translate-y-0 transition-transform duration-1000 ease-out" id="hero-text">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surface-container border border-outline-variant/30 text-primary-container text-label-md font-semibold animate-fade-in-up">
              <span className="material-symbols-outlined text-[18px]">verified</span>
              <span>{t.hero.tag}</span>
            </div>
            <h1 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-primary tracking-tight animate-fade-in-up animation-delay-100 leading-tight">
              {t.hero.title1}
              <span className="text-secondary relative whitespace-nowrap">
                {t.hero.title2}
                <svg className="absolute -bottom-2 left-0 w-full h-3 text-secondary/30" preserveAspectRatio="none" viewBox="0 0 100 20">
                  <path d="M0,10 Q50,20 100,10" fill="none" stroke="currentColor" strokeWidth="4"></path>
                </svg>
              </span>
              <br/>
              {t.hero.title3}
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl animate-fade-in-up animation-delay-200">
              {t.hero.desc}
            </p>
            <div className="flex flex-col sm:flex-row gap-stack-md pt-4 animate-fade-in-up animation-delay-300">
              <a 
                className="inline-flex justify-center items-center gap-2 bg-secondary hover:bg-secondary-container text-on-secondary px-8 py-4 rounded-lg font-bold text-lg transition-premium ambient-shadow active:scale-95" 
                href="#daftar"
              >
                {t.hero.cta1}
                <span className="material-symbols-outlined">arrow_forward</span>
              </a>
              <a 
                className="inline-flex justify-center items-center gap-2 bg-transparent border-2 border-primary text-primary hover:bg-surface-container-low px-8 py-4 rounded-lg font-bold text-lg transition-premium" 
                href="#program"
              >
                {t.hero.cta2}
              </a>
            </div>
            <div className="flex items-center gap-6 pt-8 border-t border-outline-variant/40 animate-fade-in-up animation-delay-400">
              <div>
                <p className="font-headline-md text-headline-md text-primary font-bold">500+</p>
                <p className="font-label-md text-label-md text-on-surface-variant">{t.hero.stat1}</p>
              </div>
              <div className="w-px h-12 bg-outline-variant/40"></div>
              <div>
                <p className="font-headline-md text-headline-md text-primary font-bold">5</p>
                <p className="font-label-md text-label-md text-on-surface-variant">{t.hero.stat2}</p>
              </div>
              <div className="w-px h-12 bg-outline-variant/40"></div>
              <div>
                <p className="font-headline-md text-headline-md text-primary font-bold">100%</p>
                <p className="font-label-md text-label-md text-on-surface-variant">{t.hero.stat3}</p>
              </div>
            </div>
          </div>
          
          {/* Interactive 3D Graphic */}
          <div 
            className="relative hidden lg:flex h-[600px] w-full rounded-2xl overflow-hidden ambient-shadow bg-surface-container-low items-center justify-center group animate-fade-in-up animation-delay-200" 
            style={{ perspective: '1200px' }}
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent"></div>
            <div 
              ref={heroGraphicRef}
              className="relative w-full h-full transform transition-transform duration-300 ease-out" 
              style={{ transformStyle: 'preserve-3d' }}
            >
              <div 
                className="absolute inset-4 rounded-xl border border-white/40 bg-white/20 backdrop-blur-sm p-6 flex flex-col justify-end z-10" 
                style={{ transform: 'translateZ(50px)' }}
              >
                <div className="bg-white p-4 rounded-lg shadow-sm inline-block self-end mb-4 transform -rotate-6">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-red-600 flex-shrink-0"></div>
                    <span className="font-label-md font-bold text-primary">Tokyo, JP</span>
                  </div>
                </div>
                <div className="bg-primary text-white p-4 rounded-lg shadow-lg inline-block self-start transform rotate-3">
                  <span className="material-symbols-outlined text-3xl mb-1">flight_takeoff</span>
                  <p className="font-title-lg font-bold">{t.hero.cardDest}</p>
                </div>
              </div>
              <img 
                alt="Bridge to Japan" 
                className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-60" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAhpq16jFWDxpUKqu9akFeT5wMsuGYrr0m1IQQcw7xfYIMM_BfCkYEMusz0it5xEbX8zZ8taPkAP9psKouTdkfQi5reCfFOGSsSHIUAAqNtL0wfmQOjGBWX_PgCeKSmKg6dhE-I60phWZjkLskZ9alqI19erteINoycDEukt8bfS5Z-tCnAo6KiR722DNk82MjItwHbtcMk_5HQkhpFeC-sbR-D1ShI-U_8A-BjexTfAROU54uyKo5IHq_WqYbK4MlZNk4W5NWkioRo" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* YouTube Profile Section */}
      <section className="py-section-gap bg-surface">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="text-center mb-stack-lg max-w-3xl mx-auto">
            <h2 className="font-headline-sm text-headline-sm text-secondary uppercase tracking-wider mb-2 font-bold">{t.youtube.tag}</h2>
            <h3 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-primary mb-4 font-bold">{t.youtube.title}</h3>
            <p className="font-body-lg text-body-lg text-on-surface-variant">{t.youtube.desc}</p>
          </div>
          <div className="relative max-w-4xl mx-auto rounded-2xl overflow-hidden ambient-shadow aspect-video bg-surface-container-high group cursor-pointer">
            <div className="absolute inset-0 bg-primary/10 mix-blend-multiply z-10"></div>
            <img 
              alt="Video Thumbnail" 
              className="w-full h-full object-cover" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAlaQzRz_HuIbMFavMLHHk3CXg9bTevwVph25M2mDi047ErtFH6wI56QN9KiaywQYt9MiSPD4-vLBnBmAfD855JDJD3QiS_-rkbZfB9jmwGH9CDhUrUTDyQrsvk4vfeveAi_LVRjxCEfJjPQPosu-XNj8heX7EB0xUpiGVc6vrcpreNuZhEzEL-dYfOU4gRPbaLNgb5mWxyvUs-8xysbSyzCYoXwl3Zd7ZLF4SEfxOhH7tyXjxbAp41UAddEUdTIDqE-fRQ5qiGmn9q" 
            />
            <div className="absolute inset-0 flex items-center justify-center z-20">
              <div className="w-20 h-20 bg-secondary rounded-full flex items-center justify-center text-white transform group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <span className="material-symbols-outlined text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>play_arrow</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Program Section */}
      <section className="py-section-gap bg-surface-container-lowest" id="program">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="flex flex-col md:flex-row justify-between items-end mb-stack-lg gap-6">
            <div className="max-w-2xl">
              <h2 className="font-headline-sm text-headline-sm text-secondary uppercase tracking-wider mb-2 font-bold">{t.programs.tag}</h2>
              <h3 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-primary mb-4 font-bold">{t.programs.title}</h3>
              <p className="font-body-lg text-body-lg text-on-surface-variant">{t.programs.desc}</p>
            </div>
          </div>

          {/* Bento Grid Layout for Programs */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
            {t.programs.list.map((prog) => (
              <div 
                key={prog.id}
                className="bg-surface rounded-xl p-6 border border-outline-variant/30 ambient-shadow transition-premium group relative overflow-hidden h-full flex flex-col hover:border-primary/30"
              >
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  <span className="material-symbols-outlined text-8xl text-primary">{prog.icon}</span>
                </div>
                <div className="w-14 h-14 bg-primary-fixed rounded-lg flex items-center justify-center mb-6 text-primary">
                  <span className="material-symbols-outlined text-3xl">{prog.icon}</span>
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <h4 className="font-headline-sm text-headline-sm text-primary font-bold">{prog.title}</h4>
                  {prog.flag && (
                    <span className="px-2 py-0.5 bg-surface-variant text-on-surface-variant text-xs font-bold rounded flex items-center gap-1 border border-outline-variant/50">
                      <span className="w-3 h-2 bg-white flex shadow-sm relative">
                        <span className="w-1/3 bg-red-600 rounded-full m-auto" style={{ height: '4px', width: '4px' }}></span>
                      </span> 
                      JP
                    </span>
                  )}
                </div>
                <p className="font-label-md text-secondary font-semibold mb-3">{prog.sub}</p>
                <p className="font-body-md text-on-surface-variant mb-6 flex-grow">{prog.desc}</p>
                <a 
                  className="inline-flex items-center text-primary font-bold group-hover:text-secondary transition-colors mt-auto" 
                  href="#daftar"
                  onClick={() => setFormData({ ...formData, program: prog.id })}
                >
                  {t.programs.cta} 
                  <span className="material-symbols-outlined ml-1 text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
                </a>
              </div>
            ))}

            {/* CTA Card */}
            <div className="bg-primary rounded-xl p-6 ambient-shadow flex flex-col justify-center items-center text-center h-full relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-container to-primary transition-transform duration-500 group-hover:scale-105"></div>
              <div className="relative z-10">
                <h4 className="font-headline-sm text-headline-sm text-white font-bold mb-3">{t.programs.confused}</h4>
                <p className="font-body-md text-primary-fixed-dim mb-6">{t.programs.confusedDesc}</p>
                <a 
                  className="bg-secondary text-white font-semibold py-2.5 px-6 rounded-lg inline-block hover:bg-secondary-container transition-colors active:scale-95 transform duration-200" 
                  href="#daftar"
                  onClick={() => setFormData({ ...formData, program: 'belum_tahu' })}
                >
                  {t.programs.ctaSelect}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fasilitas Section (Glassmorphism & Asymmetric Layout) */}
      <section className="py-section-gap bg-surface relative overflow-hidden" id="fasilitas">
        {/* Abstract Background Shapes */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-primary-fixed/30 rounded-l-[100px] transform translate-x-20 -skew-x-12 hidden lg:block"></div>
        
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop relative z-10">
          <div className="mb-stack-lg max-w-2xl">
            <h2 className="font-headline-sm text-headline-sm text-secondary uppercase tracking-wider mb-2 font-bold">{t.fasilitas.tag}</h2>
            <h3 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-primary mb-4 font-bold">{t.fasilitas.title}</h3>
            <p className="font-body-lg text-body-lg text-on-surface-variant">{t.fasilitas.desc}</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Image Grid */}
            <div className="lg:col-span-7 grid grid-cols-2 gap-4">
              <div className="col-span-2 rounded-xl overflow-hidden ambient-shadow h-64 md:h-80 relative group">
                <img 
                  alt="Ruang Kelas Modern" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuC2uVStR-4WkTA-2Ejat_qvIH_Qw7o1ksnZydAvw6xSeSGF2VPZeBjQ3HlMjjB4nfXsIWF6Wi7ITx2O1C-7wv1cfXSUC_YWcPWGeNZ2UJWNGPBHGTekTvBIgc8xoNIATq_TxB5N1iYIvTdU_EYmmLNsliJuZxvsShj99G9Q5aIPngH3uMLhY90SUasaTKeTWWRA-ppgGYBPjoU1o54rfHlFNx3KSvK7IM-pWGx-jAVrFSMvbWT1WUHJ1flSuGCXQPUh6T2K4yry7ReO" 
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent">
                  <p className="text-white font-bold text-lg">{t.fasilitas.img1Title}</p>
                </div>
              </div>
              <div className="col-span-2 md:col-span-1 rounded-xl overflow-hidden ambient-shadow h-48 relative group">
                <img 
                  alt="Asrama Siswa" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuD_72jJiQZxcqc0psqtZbyIPXAl_SNVA77exiPozpl8k5BDO7A1wq0lte-mKdI0UP0MsreEaMBexcXxadoZMIYi72eZKWG3hkTvKLa7Dk6Sye8w9G2SRrLAmS5kRvzT8DvPPXtVB7BQpcbuodCRvEpsm77qEDA7QVTyzjZhooTSQO4aEv7uYm_AVBYGBLClbK5E4Mka-AsJInLzLWzMweptSxgfcORnzJKa80xrG5eMDQ440dgXuZX5X4K3merI52pDM2i8fTOoTob5" 
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent">
                  <p className="text-white font-bold text-lg">{t.fasilitas.img2Title}</p>
                </div>
              </div>
              <div className="col-span-2 md:col-span-1 rounded-xl overflow-hidden ambient-shadow h-48 bg-surface-container flex flex-col items-center justify-center p-6 text-center border border-outline-variant/30">
                <span className="material-symbols-outlined text-4xl text-primary mb-2">restaurant</span>
                <p className="font-bold text-primary text-lg">{t.fasilitas.img3Title}</p>
                <p className="text-sm text-on-surface-variant mt-1">{t.fasilitas.img3Desc}</p>
              </div>
            </div>
            
            {/* Features List (Glass Card) */}
            <div className="lg:col-span-5 glass-card rounded-2xl p-8 ambient-shadow mt-8 lg:mt-0 lg:-ml-12 z-20">
              <h4 className="font-headline-sm text-headline-sm text-primary font-bold mb-6 border-b border-outline-variant/30 pb-4">
                {t.fasilitas.featureTitle}
              </h4>
              <ul className="space-y-4">
                {t.fasilitas.features.map((feat, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-primary-fixed flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="material-symbols-outlined text-primary text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>check</span>
                    </div>
                    <div>
                      <p className="font-bold text-primary text-lg">{feat.title}</p>
                      <p className="text-on-surface-variant text-sm">{feat.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Financing Section */}
      <section className="py-section-gap bg-surface-container-lowest" id="biaya">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="text-center mb-stack-lg max-w-3xl mx-auto">
            <h2 className="font-headline-sm text-headline-sm text-secondary uppercase tracking-wider mb-2 font-bold">{t.biaya.tag}</h2>
            <h3 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-primary mb-4 font-bold">{t.biaya.title}</h3>
            <p className="font-body-lg text-body-lg text-on-surface-variant">{t.biaya.desc}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Card 1: Pelatihan */}
            <div className="bg-surface rounded-2xl p-8 border border-outline-variant/30 ambient-shadow relative overflow-hidden group hover:border-primary/50 transition-premium">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary-fixed rounded-bl-full -mr-16 -mt-16 transition-transform group-hover:scale-110"></div>
              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container text-primary text-xs font-bold mb-4">
                  {t.biaya.card1.tag}
                </div>
                <h4 className="font-headline-md text-headline-md text-primary font-bold mb-2">{t.biaya.card1.title}</h4>
                <div className="flex items-baseline gap-1 mb-6">
                  <span className="font-display-lg text-4xl font-bold text-primary">{t.biaya.card1.price}</span>
                </div>
                <div className="w-full h-px bg-outline-variant/30 mb-6"></div>
                <ul className="space-y-3 mb-8">
                  {t.biaya.card1.list.map((item, index) => (
                    <li key={index} className="flex items-center gap-3 text-on-surface-variant text-sm">
                      <span className="material-symbols-outlined text-primary text-sm">task_alt</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            {/* Card 2: Keberangkatan */}
            <div className="bg-primary text-white rounded-2xl p-8 ambient-shadow relative overflow-hidden group shadow-xl">
              <div className="absolute top-0 right-0 w-32 h-32 bg-secondary rounded-bl-full -mr-16 -mt-16 opacity-50 transition-transform group-hover:scale-110"></div>
              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-container text-white border border-white/20 text-xs font-bold mb-4">
                  {t.biaya.card2.tag}
                </div>
                <h4 className="font-headline-md text-headline-md text-white font-bold mb-2">{t.biaya.card2.title}</h4>
                <div className="flex items-baseline gap-1 mb-6">
                  <span className="font-display-lg text-4xl font-bold text-white">{t.biaya.card2.price}</span>
                </div>
                <div className="w-full h-px bg-white/20 mb-6"></div>
                <ul className="space-y-3 mb-8">
                  {t.biaya.card2.list.map((item, index) => (
                    <li key={index} className="flex items-center gap-3 text-primary-fixed-dim text-sm">
                      <span className="material-symbols-outlined text-secondary text-sm">task_alt</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          
          <div className="mt-8 text-center bg-surface-container-low p-5 rounded-lg border border-primary/10 mx-auto max-w-2xl flex items-start gap-3">
            <span className="material-symbols-outlined text-secondary mt-1 flex-shrink-0">info</span>
            <p className="text-sm text-on-surface-variant text-left leading-relaxed">
              {t.biaya.info}
            </p>
          </div>
        </div>
      </section>

      {/* Registration Section */}
      <section className="py-section-gap bg-surface relative" id="daftar">
        <div className="absolute inset-0 bg-primary/5"></div>
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Form Text */}
            <div>
              <h2 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-primary mb-6 font-bold">
                {t.daftar.title}
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-8">
                {t.daftar.desc}
              </p>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-surface-container rounded-full flex items-center justify-center text-primary flex-shrink-0">
                    <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>location_on</span>
                  </div>
                  <div>
                    <p className="font-bold text-primary text-lg">{t.daftar.office}</p>
                    <p className="text-on-surface-variant">{t.daftar.address}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-surface-container rounded-full flex items-center justify-center text-primary flex-shrink-0">
                    <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>call</span>
                  </div>
                  <div>
                    <p className="font-bold text-primary text-lg">{t.daftar.phone}</p>
                    <p className="text-on-surface-variant">{t.daftar.phoneNum}</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Form Container */}
            <div className="bg-surface-container-lowest rounded-2xl p-8 ambient-shadow border border-outline-variant/30">
              <h3 className="font-headline-sm font-bold text-primary mb-6">{t.daftar.formTitle}</h3>
              {formSubmitted ? (
                <div className="bg-green-50 border border-green-200 text-green-800 rounded-lg p-6 text-center animate-fade-in-up">
                  <span className="material-symbols-outlined text-green-600 text-5xl mb-3">check_circle</span>
                  <p className="font-semibold text-lg">{t.daftar.successMsg}</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block font-semibold text-on-surface mb-1 text-sm" htmlFor="nama">
                      {t.daftar.labelNama}
                    </label>
                    <input 
                      required
                      value={formData.nama}
                      onChange={(e) => setFormData({ ...formData, nama: e.target.value })}
                      className="w-full bg-surface border border-outline-variant rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors text-on-surface" 
                      id="nama" 
                      placeholder={t.daftar.placeholderNama} 
                      type="text"
                    />
                  </div>
                  <div>
                    <label className="block font-semibold text-on-surface mb-1 text-sm" htmlFor="hp">
                      {t.daftar.labelHp}
                    </label>
                    <input 
                      required
                      value={formData.hp}
                      onChange={(e) => setFormData({ ...formData, hp: e.target.value })}
                      className="w-full bg-surface border border-outline-variant rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors text-on-surface" 
                      id="hp" 
                      placeholder={t.daftar.placeholderHp} 
                      type="tel"
                    />
                  </div>
                  <div>
                    <label className="block font-semibold text-on-surface mb-1 text-sm" htmlFor="program-select">
                      {t.daftar.labelProgram}
                    </label>
                    <div className="relative">
                      <select 
                        required
                        value={formData.program}
                        onChange={(e) => setFormData({ ...formData, program: e.target.value })}
                        className="w-full bg-surface border border-outline-variant rounded-lg px-4 py-3 appearance-none focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors text-on-surface" 
                        id="program-select"
                      >
                        <option value="">{t.daftar.placeholderProgram}</option>
                        <option value="kaigo">{language === 'ID' ? 'Kaigo (Caregiver)' : '介護 (Kaigo)'}</option>
                        <option value="konstruksi">{language === 'ID' ? 'Konstruksi' : '建設 (Konstruksi)'}</option>
                        <option value="manufaktur">{language === 'ID' ? 'Manufaktur' : '製造 (Manufaktur)'}</option>
                        <option value="perikanan">{language === 'ID' ? 'Perikanan' : '漁業 (Perikanan)'}</option>
                        <option value="driver">{language === 'ID' ? 'Driver (Pengemudi)' : 'ドライバー (Driver)'}</option>
                        <option value="belum_tahu">{language === 'ID' ? 'Belum Tahu / Ingin Konsultasi' : '未定 / 相談希望'}</option>
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-on-surface-variant">
                        <span className="material-symbols-outlined">expand_more</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <label className="block font-semibold text-on-surface mb-1 text-sm" htmlFor="pesan">
                      {t.daftar.labelPesan}
                    </label>
                    <textarea 
                      value={formData.pesan}
                      onChange={(e) => setFormData({ ...formData, pesan: e.target.value })}
                      className="w-full bg-surface border border-outline-variant rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors text-on-surface" 
                      id="pesan" 
                      placeholder={t.daftar.placeholderPesan} 
                      rows={3}
                    ></textarea>
                  </div>
                  <button 
                    className="w-full bg-secondary hover:bg-secondary-container text-white font-bold py-4 rounded-lg transition-premium active:scale-95 shadow-md duration-200" 
                    type="submit"
                  >
                    {t.daftar.btnSubmit}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full py-stack-lg bg-tertiary text-white border-t border-outline-variant transition-opacity duration-200">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-gutter px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto text-on-tertiary font-body-md text-body-md">
          <div className="col-span-1 md:col-span-2">
            <div className="font-headline-sm text-headline-sm font-bold text-white mb-4">LPK Global Maju</div>
            <p className="text-tertiary-fixed-dim max-w-sm mb-6 leading-relaxed">
              {t.footer.desc}
            </p>
            <div className="text-xs text-tertiary-fixed-dim leading-relaxed">
              {t.footer.copy}
            </div>
          </div>
          <div className="col-span-1">
            <h5 className="font-semibold mb-4 text-white text-lg">{t.footer.title1}</h5>
            <ul className="space-y-2 text-sm text-slate-300">
              {t.footer.links1.map((link, index) => (
                <li key={index}>
                  <a className="hover:text-white hover:underline decoration-secondary transition-all" href="#">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-span-1">
            <h5 className="font-semibold mb-4 text-white text-lg">{t.footer.title2}</h5>
            <ul className="space-y-2 text-sm text-slate-300">
              {t.footer.links2.map((link, index) => (
                <li key={index}>
                  <a className="hover:text-white hover:underline decoration-secondary transition-all" href="#">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </footer>

    </div>
  );
}
