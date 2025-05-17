
// Expanded list of daily duas
const dailyDuas = [
    {
      title: 'Dua for Morning',
      arabic: 'اللّهُـمَّ أَنتَ رَبِّى لَا إِلٰهَ إِلَّا أَنتَ',
      translation: 'O Allah, You are my Lord, there is no deity worthy of worship except You.',
    },
    {
      title: 'Dua for Evening',
      arabic: 'اللّهُـمَّ إِنَّا نَسْتَعِينُكَ وَنَسْتَغْفِرُكَ',
      translation: 'O Allah, we seek Your help and forgiveness.',
    },
    {
      title: 'Dua for Protection from Harm',
      arabic: 'بِسْمِ اللّهِ الَّذِي لَا يَضُرُّ مَعَ اسْمِهِ شَيْءٌ فِي الْأَرْضِ وَلَا فِي السَّمَاءِ وَهُوَ السَّمِيعُ الْعَلِيمُ',
      translation: 'In the name of Allah, with whose name nothing on earth or in the heavens can harm, and He is the All-Hearing, the All-Knowing.',
    },
    {
      title: 'Dua for Forgiveness',
      arabic: 'اللّهُـمَّ اغْفِرْ لِي وَارْحَمْنِي وَهْدِنِي وَجَنِّبْنِي فِتْنَةَ السَّبْعِينَ',
      translation: 'O Allah, forgive me, have mercy on me, guide me, and protect me from the fitna of seventy.',
    },
    {
      title: 'Dua for Barakah in Sustenance',
      arabic: 'اللّهُـمَّ بَارِكْ لِي فِى رِزْقِى',
      translation: 'O Allah, bless my sustenance.',
    },
    {
      title: 'Dua for Seeking Goodness in the Day',
      arabic: 'اللّهُـمَّ إِنِّى أَسْأَلُكَ خَيْرَ مَا فِيهِ هَذَا الْيَوْمِ وَفِيهِ مَا فِيهِ',
      translation: 'O Allah, I ask You for the good of this day and the good of what is in it.',
    },
    {
      title: 'Dua for Seeking Protection from Evil',
      arabic: 'أَعُوذُ بِاللّهِ مِنْ شَرِّ مَا خَلَقَ',
      translation: 'I seek refuge in Allah from the evil of what He has created.',
    },
    {
      title: 'Dua for After Eating',
      arabic: 'الْحَمْدُ لِلّهِ الَّذِى أَطْعَمَنَا وَسَقَانَا وَجَعَلَنَا مِنَ الْمُسْلِمِينَ',
      translation: 'All praise is due to Allah, Who has fed us, given us drink, and made us of the Muslims.',
    },
    {
      title: 'Dua for After Waking Up',
      arabic: 'الْحَمْدُ لِلّهِ الَّذِى أَحْيَانَا بَعْدَ مَا أَمَاتَنَا وَإِلَيْهِ النُّشُورُ',
      translation: 'Praise is to Allah Who gave us life after He caused us to die, and unto Him is the resurrection.',
    },
    {
      title: 'Dua for Traveling',
      arabic: 'اللّهُـمَّ إِنَّا نَسْتَوْدِعُكَ أَمْوَالَنَا وَأَنْفُسَنَا وَأَهْلَنَا وَيَسِّرْ لَنَا فِى سَفَرِهِ',
      translation: 'O Allah, we entrust You with our wealth, our souls, our family, and make our journey easy for us.',
    },
    {
      title: 'Dua for Seeking Refuge from Anxiety and Grief',
      arabic: 'اللّهُـمَّ إِنِّى أَعُوذُ بِكَ مِنَ الْهَمِّ وَالْحَزَنِ',
      translation: 'O Allah, I seek refuge in You from anxiety and grief.',
    },
    {
      title: 'Dua for Health and Well-being',
      arabic: 'اللّهُـمَّ عَافِنِى فِى بَدَنِى وَعَافِنِى فِى سَمْعِى وَعَافِنِى فِى بَصَرِى',
      translation: 'O Allah, grant me health in my body, my hearing, and my sight.',
    },
    {
      title: 'Dua for Strength and Patience',
      arabic: 'اللّهُـمَّ اجْعَلْنِى مِنْ أَهْلِ الصَّبْرِ وَقُوَّتِهِ',
      translation: 'O Allah, make me from the people of patience and strength.',
    },
    {
      title: 'Dua for Protection from the Devil',
      arabic: 'اللّهُـمَّ إِنِّى أَعُوذُ بِكَ مِنْ شَرِّ الشَّيْطَانِ',
      translation: 'O Allah, I seek refuge in You from the evil of Shaytan.',
    },
    {
      title: 'Dua for Guidance',
      arabic: 'اللّهُـمَّ ارْشِدْنِى وَيَسِّرْ لِى خَيْرَ الْأُمُورِ',
      translation: 'O Allah, guide me and make the best of matters easy for me.',
    },
  ];
  
  
  // Function to fetch daily dua (can be modified to fetch from API or database)
  export const fetchDailyDua = () => {
    const randomIndex = Math.floor(Math.random() * dailyDuas.length);
    return dailyDuas[randomIndex];
  };
  