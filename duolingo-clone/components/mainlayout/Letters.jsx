export default function LettersPage() {
  const vowels = [
    { symbol: 'ㅏ', label: 'a' }, { symbol: 'ㅑ', label: 'ya' },
    { symbol: 'ㅓ', label: 'eo' }, { symbol: 'ㅕ', label: 'yeo' },
    { symbol: 'ㅗ', label: 'o' }, { symbol: 'ㅛ', label: 'yo' },
    { symbol: 'ㅜ', label: 'u' }, { symbol: 'ㅠ', label: 'yu' },
    { symbol: 'ㅡ', label: 'eu' }, { symbol: 'ㅣ', label: 'i' },
    { symbol: 'ㅐ', label: 'ae' }, { symbol: 'ㅒ', label: 'yae' },
    { symbol: 'ㅔ', label: 'e' }, { symbol: 'ㅖ', label: 'ye' },
  ];

  const doubleVowels = [
    { symbol: 'ㅘ', label: 'wa' }, { symbol: 'ㅝ', label: 'wo' },
    { symbol: 'ㅙ', label: 'wae' }, { symbol: 'ㅞ', label: 'we' },
    { symbol: 'ㅟ', label: 'wi' }, { symbol: 'ㅚ', label: 'oe' },
  ];

  const plainConsonants = [
    { symbol: 'ㄱ', label: 'g' }, { symbol: 'ㄷ', label: 'd' },
    { symbol: 'ㅈ', label: 'j' }, { symbol: 'ㅂ', label: 'b' },
    { symbol: 'ㅇ', label: 'ng' }, { symbol: 'ㄴ', label: 'n' },
    { symbol: 'ㅅ', label: 's' }, { symbol: 'ㅁ', label: 'm' },
    { symbol: 'ㅎ', label: 'h' }, { symbol: 'ㄹ', label: 'r' },
  ];

  const aspiratedConsonants = [
    { symbol: 'ㅋ', label: 'k' }, { symbol: 'ㅌ', label: 't' },
    { symbol: 'ㅊ', label: 'ch' }, { symbol: 'ㅍ', label: 'p' },
  ];

  const tenseConsonants = [
    { symbol: 'ㄲ', label: 'kk' }, { symbol: 'ㄸ', label: 'tt' },
    { symbol: 'ㅉ', label: 'jj' }, { symbol: 'ㅃ', label: 'pp' },
    { symbol: 'ㅆ', label: 'ss' },
  ];

  const Card = ({ symbol, label }) => (
    <div className="w-35 h-22 bg-white border border-gray-300 shadow-md shadow-gray-300 rounded-xl flex flex-col justify-center items-center p-2">
      <span className="text-xl">{symbol}</span>
      <span className="text-sm text-gray-700 mt-2">{label}</span>
      <div className="w-8 h-1.5 bg-gray-400 rounded-full mt-1" />
    </div>
  );

  const SectionTitle = ({ title }) => (
    <div className="flex items-center justify-center my-6">
      <div className="flex-grow border-t border-gray-300"></div>
      <h2 className="mx-4 text-lg font-semibold text-gray-700">{title}</h2>
      <div className="flex-grow border-t border-gray-300"></div>
    </div>
  );

  return (
    <div className="max-w-4xl mx-auto p-6 text-center">
      <h1 className="text-3xl font-bold mb-2">Let's learn Hangeul!</h1>
      <p className="text-gray-600 mb-6">
        Get to know the main writing system in Korean.
      </p>
      <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg mb-8 shadow font-semibold">
        LEARN THE LETTERS
      </button>

      <SectionTitle title="Vowels" />
      <div className="grid grid-cols-4 gap-4 justify-center mb-10">
        {vowels.map((item) => <Card key={item.label} {...item} />)}
      </div>

      <SectionTitle title="Double Vowels" />
      <div className="grid grid-cols-4 gap-4 justify-center mb-10">
        {doubleVowels.map((item) => <Card key={item.label} {...item} />)}
      </div>

      <SectionTitle title="Plain Consonants" />
      <div className="grid grid-cols-4 gap-4 justify-center mb-10">
        {plainConsonants.map((item) => <Card key={item.label} {...item} />)}
      </div>

      <SectionTitle title="Aspirated Consonants" />
      <p className="text-sm text-gray-500 mb-4">
        These consonants are pronounced with a strong puff of air.
      </p>
      <div className="grid grid-cols-4 gap-4 justify-center mb-10">
        {aspiratedConsonants.map((item) => <Card key={item.label} {...item} />)}
      </div>

      <SectionTitle title="Tense Consonants" />
      <p className="text-sm text-gray-500 mb-4">
        These consonants are pronounced with greater force.
      </p>
      <div className="grid grid-cols-4 gap-4 justify-center mb-10">
        {tenseConsonants.map((item) => <Card key={item.label} {...item} />)}
      </div>
    </div>
  );
}
