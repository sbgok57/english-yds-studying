export interface MotivationMessage {
  id: string;
  en: string;
  tr: string;
  category: 'consistency' | 'mistakes' | 'growth' | 'yds_focus' | 'confidence';
}

export const MOTIVATION_MESSAGES: MotivationMessage[] = [
  {
    id: 'mot-1',
    en: 'Consistency beats intensity. Small daily steps lead to mastery.',
    tr: 'Süreklilik yoğunluktan üstündür. Günlük küçük adımlar ustalığa götürür.',
    category: 'consistency',
  },
  {
    id: 'mot-2',
    en: 'Mistakes are not failures; they are the exact data your brain needs to grow.',
    tr: 'Hatalar başarısızlık değildir; beyninizin gelişmek için ihtiyaç duyduğu tam veridir.',
    category: 'mistakes',
  },
  {
    id: 'mot-3',
    en: 'Every complex paragraph in YDS is just simple thoughts linked by connectors.',
    tr: 'YDS\'deki her karmaşık paragraf, bağlaçlarla birleştirilmiş basit düşüncelerden ibarettir.',
    category: 'yds_focus',
  },
  {
    id: 'mot-4',
    en: 'You do not need to be perfect today; you only need to show up.',
    tr: 'Bugün kusursuz olman gerekmiyor; sadece burada olup çalışman yeterli.',
    category: 'consistency',
  },
  {
    id: 'mot-5',
    en: 'True language acquisition happens when you turn passive recognition into active recall.',
    tr: 'Gerçek dil edinimi, pasif tanımayı aktif hatırlamaya dönüştürdüğünüzde gerçekleşir.',
    category: 'growth',
  },
  {
    id: 'mot-6',
    en: 'Trust the spaced repetition process. Your memory strengthens when it strives to retrieve.',
    tr: 'Aralıklı tekrar sürecine güvenin. Hafızanız geri çağırmak için çabaladığında güçlenir.',
    category: 'growth',
  },
  {
    id: 'mot-7',
    en: 'Every word you master today opens a new door in academic literature.',
    tr: 'Bugün ustalaştığın her kelime akademik literatürde yeni bir kapı açar.',
    category: 'confidence',
  },
  {
    id: 'mot-8',
    en: 'Confidence is not the absence of doubt; it is taking the next step despite it.',
    tr: 'Özgüven şüphenin yokluğu değil; ona rağmen bir sonraki adımı atabilmektir.',
    category: 'confidence',
  },
  {
    id: 'mot-9',
    en: 'A wrong answer is the fastest shortcut to permanent understanding.',
    tr: 'Yanlış bir cevap, kalıcı anlayışa giden en hızlı kestirme yoldur.',
    category: 'mistakes',
  },
  {
    id: 'mot-10',
    en: 'Grammar is not a set of arbitrary rules; it is the architecture of clear reasoning.',
    tr: 'Gramer rastgele kurallar bütünü değil; berrak düşüncenin mimarisidir.',
    category: 'yds_focus',
  },
  {
    id: 'mot-11',
    en: 'Fifteen focused minutes today will outperform three unfocused hours on the weekend.',
    tr: 'Bugünkü 15 dakikalık odaklanmış çalışma, hafta sonundaki 3 dağınık saatten daha etkilidir.',
    category: 'consistency',
  },
  {
    id: 'mot-12',
    en: 'Celebrate your streak not because of the number, but because of the habit you are building.',
    tr: 'Serinizi sayıdan ötürü değil, inşa ettiğiniz alışkanlıktan ötürü kutlayın.',
    category: 'consistency',
  },
  {
    id: 'mot-13',
    en: 'When a question feels difficult, remember that neural connections are actively forming.',
    tr: 'Bir soru zor geldiğinde, nöronal bağların aktif olarak oluştuğunu hatırlayın.',
    category: 'growth',
  },
  {
    id: 'mot-14',
    en: 'Academic English is a skill, not an innate talent. Practice guarantees progress.',
    tr: 'Akademik İngilizce doğuştan gelen bir yetenek değil, bir beceridir. Pratik gelişimi garantiler.',
    category: 'confidence',
  },
  {
    id: 'mot-15',
    en: 'Notice the words you understand effortlessly today that once seemed impossible.',
    tr: 'Bir zamanlar imkansız görünen ancak bugün zahmetsizce anladığınız kelimeleri fark edin.',
    category: 'growth',
  },
  {
    id: 'mot-16',
    en: 'Reviewing your mistakes is the highest-leverage activity in your daily study.',
    tr: 'Hatalarınızı gözden geçirmek, günlük çalışmanızdaki en yüksek verimli faaliyettir.',
    category: 'mistakes',
  },
  {
    id: 'mot-17',
    en: 'Read for structure first, details second. YDS tests comprehension, not speed-reading.',
    tr: 'Önce yapı için, sonra detaylar için okuyun. YDS hız testinden ziyade kavrayışı ölçer.',
    category: 'yds_focus',
  },
  {
    id: 'mot-18',
    en: 'Your future career in academia and global industry begins with today\'s vocabulary.',
    tr: 'Gelecekteki akademik ve küresel kariyeriniz bugünün kelimeleriyle başlar.',
    category: 'confidence',
  },
  {
    id: 'mot-19',
    en: 'Patience and repetition turn unfamiliar phrases into second nature.',
    tr: 'Sabır ve tekrar, yabancı ifadeleri ikinci bir doğaya dönüştürür.',
    category: 'consistency',
  },
  {
    id: 'mot-20',
    en: 'When you eliminate two wrong options with grammar logic, you double your probability of success.',
    tr: 'Gramer mantığıyla iki yanlış seçeneği elediğinizde başarı olasılığınızı ikiye katlarsınız.',
    category: 'yds_focus',
  },
  {
    id: 'mot-21',
    en: 'Be kind to yourself when you forget. Memory is a garden that requires regular tending.',
    tr: 'Unuttuğunuzda kendinize şefkat gösterin. Hafıza düzenli bakım isteyen bir bahçedir.',
    category: 'mistakes',
  },
  {
    id: 'mot-22',
    en: 'Every expert was once a beginner who refused to surrender to confusion.',
    tr: 'Her uzman, bir zamanlar kafa karışıklığına teslim olmayı reddeden bir acemiydi.',
    category: 'growth',
  },
  {
    id: 'mot-23',
    en: 'Focus on understanding the sentence context, and the correct preposition will follow.',
    tr: 'Cümlenin bağlamını anlamaya odaklanın; doğru edat kendiliğinden gelecektir.',
    category: 'yds_focus',
  },
  {
    id: 'mot-24',
    en: 'Small daily gains compound like interest over months into extraordinary fluency.',
    tr: 'Günlük küçük kazanımlar aylar içinde olağanüstü bir akıcılığa dönüşür.',
    category: 'consistency',
  },
  {
    id: 'mot-25',
    en: 'You are capable of mastering academic English, one question at a time.',
    tr: 'Her seferinde bir soru çözerek akademik İngilizcede ustalaşma gücüne sahipsiniz.',
    category: 'confidence',
  },
  {
    id: 'mot-26',
    en: 'An error corrected with reflection will never be repeated in the real exam.',
    tr: 'Üzerinde düşünülerek düzeltilen bir hata, gerçek sınavda asla tekrarlanmaz.',
    category: 'mistakes',
  },
  {
    id: 'mot-27',
    en: 'Phrasal verbs are best remembered through vivid associations and real situations.',
    tr: 'Deyimsel fiiller en iyi canlı çağrışımlar ve gerçek durumlar yoluyla hatırlanır.',
    category: 'growth',
  },
  {
    id: 'mot-28',
    en: 'Stay calm when encountering unknown words; read the clues around them.',
    tr: 'Bilinmeyen kelimelerle karşılaştığınızda sakin kalın; etrafındaki ipuçlarını okuyun.',
    category: 'yds_focus',
  },
  {
    id: 'mot-29',
    en: 'Dedication is doing what needs to be done even when motivation fluctuates.',
    tr: 'Kararlılık, motivasyon dalgalandığında bile yapılması gerekeni yapmaktır.',
    category: 'consistency',
  },
  {
    id: 'mot-30',
    en: 'Every session completed is a tangible investment in your intellectual independence.',
    tr: 'Tamamlanan her oturum, entelektüel bağımsızlığınıza somut bir yatırımdır.',
    category: 'confidence',
  },
  {
    id: 'mot-31',
    en: 'Connectors reveal the author\'s roadmap. Follow them to find the main idea.',
    tr: 'Bağlaçlar yazarın yol haritasını gösterir. Ana fikri bulmak için onları takip edin.',
    category: 'yds_focus',
  },
  {
    id: 'mot-32',
    en: 'Embrace the friction of learning; that friction is the feeling of cognitive expansion.',
    tr: 'Öğrenmenin getirdiği zorlanmayı kucaklayın; o zorlanma bilişsel genişlemenin hissidir.',
    category: 'growth',
  },
  {
    id: 'mot-33',
    en: 'Reviewing yesterday\'s mistakes makes today\'s successes effortless.',
    tr: 'Dünün hatalarını gözden geçirmek bugünün başarılarını zahmetsiz kılar.',
    category: 'mistakes',
  },
  {
    id: 'mot-34',
    en: 'Ten disciplined minutes are vastly superior to zero minutes.',
    tr: 'On dakikalık disiplinli çalışma, sıfır dakikadan katbekat üstündür.',
    category: 'consistency',
  },
  {
    id: 'mot-35',
    en: 'Your potential is not fixed. Every practice session re-wires your linguistic competence.',
    tr: 'Potansiyeliniz sabit değildir. Her pratik oturumu dil yetkinliğinizi yeniden şekillendirir.',
    category: 'growth',
  },
  {
    id: 'mot-36',
    en: 'YDS questions reward analytical thinkers who pay attention to tense harmony.',
    tr: 'YDS soruları zaman uyumuna dikkat eden analitik düşünenleri ödüllendirir.',
    category: 'yds_focus',
  },
  {
    id: 'mot-37',
    en: 'Believe in your capacity to adapt, comprehend, and excel.',
    tr: 'Uyum sağlama, anlama ve üstün başarı gösterme kapasitenize inanın.',
    category: 'confidence',
  },
  {
    id: 'mot-38',
    en: 'A clear mind and systematic review defeat exam anxiety every time.',
    tr: 'Berrak bir zihin ve sistematik tekrar, sınav kaygısını her zaman mağlup eder.',
    category: 'confidence',
  },
  {
    id: 'mot-39',
    en: 'Pay attention to nuance: synonyms share meaning, but context selects the word.',
    tr: 'Nüanslara dikkat edin: eş anlamlılar anlamı paylaşır, ancak kelimeyi bağlam seçer.',
    category: 'yds_focus',
  },
  {
    id: 'mot-40',
    en: 'Honor your commitment to your personal growth today.',
    tr: 'Bugün kişisel gelişiminize verdiğiniz söze sadık kalın.',
    category: 'consistency',
  },
  {
    id: 'mot-41',
    en: 'The brain remembers what it actively solves, not what it passively skims.',
    tr: 'Beyin pasifçe göz gezdirdiğini değil, aktif olarak çözdüğünü hatırlar.',
    category: 'growth',
  },
  {
    id: 'mot-42',
    en: 'Treat tricky questions as puzzles designed to sharpen your analytical edge.',
    tr: 'Çetrefilli soruları analitik yeteneğinizi keskinleştirmek için tasarlanmış bulmacalar olarak görün.',
    category: 'mistakes',
  },
  {
    id: 'mot-43',
    en: 'Collocations are the secret to natural fluency. Learn words in good company.',
    tr: 'Eşdizimler doğal akıcılığın sırrıdır. Kelimeleri birlikte kullanıldıkları dostlarıyla öğrenin.',
    category: 'growth',
  },
  {
    id: 'mot-44',
    en: 'Progress is quiet and invisible day by day, but undeniable month by month.',
    tr: 'Gelişim günden güne sessiz ve görünmezdir, ancak aydan aya inkar edilemezdir.',
    category: 'consistency',
  },
  {
    id: 'mot-45',
    en: 'You are forging an invaluable academic asset that will serve you throughout your career.',
    tr: 'Kariyeriniz boyunca size hizmet edecek paha biçilmez bir akademik kazanım inşa ediyorsunuz.',
    category: 'confidence',
  },
  {
    id: 'mot-46',
    en: 'Analyze why an answer is wrong, and you will never fall for that distractor again.',
    tr: 'Bir cevabın neden yanlış olduğunu analiz edin, o çeldiriciye bir daha asla düşmezsiniz.',
    category: 'mistakes',
  },
  {
    id: 'mot-47',
    en: 'Great exam scores are built upon quiet mornings and steady evenings of practice.',
    tr: 'Yüksek sınav puanları, sessiz sabahlar ve istikrarlı akşam pratikleri üzerinde yükselir.',
    category: 'consistency',
  },
  {
    id: 'mot-48',
    en: 'Reading academic texts becomes effortless the moment you master core connectors.',
    tr: 'Temel bağlaçlarda ustalaştığınız anda akademik metinleri okumak zahmetsiz hale gelir.',
    category: 'yds_focus',
  },
  {
    id: 'mot-49',
    en: 'Each study session brings you one step closer to your dream university or position.',
    tr: 'Her çalışma oturumu sizi hayalinizdeki üniversiteye veya pozisyona bir adım daha yaklaştırır.',
    category: 'confidence',
  },
  {
    id: 'mot-50',
    en: 'Take a deep breath, trust your preparation, and engage your intellect with confidence.',
    tr: 'Derin bir nefes alın, hazırlığınıza güvenin ve zihninizi özgüvenle devreye sokun.',
    category: 'confidence',
  },
  {
    id: 'mot-51',
    en: 'The road to mastery is paved with deliberate practice and unyielding curiosity.',
    tr: 'Ustalığa giden yol, bilinçli pratik ve sarsılmaz bir merakla döşenmiştir.',
    category: 'growth',
  },
  {
    id: 'mot-52',
    en: 'Your effort today is the foundation of your confidence tomorrow.',
    tr: 'Bugünkü emeğiniz yarınki özgüveninizin temelidir.',
    category: 'confidence',
  }
];

export function getRandomMotivation(): MotivationMessage {
  const index = Math.floor(Math.random() * MOTIVATION_MESSAGES.length);
  return MOTIVATION_MESSAGES[index];
}

export function getTodayMotivation(): MotivationMessage {
  // Deterministic quote based on calendar day of year
  const now = new Date();
  const startOfYear = new Date(now.getFullYear(), 0, 0);
  const diff = now.getTime() - startOfYear.getTime();
  const dayOfYear = Math.floor(diff / (1000 * 60 * 60 * 24));
  const index = dayOfYear % MOTIVATION_MESSAGES.length;
  return MOTIVATION_MESSAGES[index];
}
