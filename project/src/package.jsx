import { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Music, Clock, Award, Heart, Volume2, VolumeX } from 'lucide-react'
import './App.css'

// Import obrázků
import beethovenPortrait1 from './assets/oLty5S5EtKLq.jpg'
import beethovenPortrait2 from './assets/FKDVN5PVs3Ev.jpg'
import beethovenPortrait3 from './assets/hvA85JyBVtu9.jpg'

function App() {
  const [currentQuizQuestion, setCurrentQuizQuestion] = useState(0)
  const [quizAnswers, setQuizAnswers] = useState([])
  const [showQuizResults, setShowQuizResults] = useState(false)
  const [quizStarted, setQuizStarted] = useState(false)

  const quizQuestions = [
    {
      question: "Kde se narodil Ludwig van Beethoven?",
      options: ["Vídeň, Rakousko", "Bonn, Německo", "Salzburg, Rakousko", "Berlín, Německo"],
      correct: 1
    },
    {
      question: "Který smysl začal Beethoven ztrácet kolem 30 let?",
      options: ["Zrak", "Sluch", "Čich", "Hmat"],
      correct: 1
    },
    {
      question: "Která symfonie obsahuje slavnou 'Ódu na radost'?",
      options: ["Symfonie č. 3", "Symfonie č. 5", "Symfonie č. 7", "Symfonie č. 9"],
      correct: 3
    },
    {
      question: "V kolika letech opustil Beethoven školu?",
      options: ["9 let", "11 let", "13 let", "15 let"],
      correct: 1
    },
    {
      question: "Které dílo je známé jako 'Osud klepající na dveře'?",
      options: ["Symfonie č. 3", "Symfonie č. 5", "Měsíční sonáta", "Císařský koncert"],
      correct: 1
    },
    {
      question: "Jaká byla pravděpodobně Beethovenova poslední slova?",
      options: ["Hudbu uslyším v nebi", "Škoda, škoda – příliš pozdě", "Díky za vše", "Konečně klid"],
      correct: 1
    },
    {
      question: "Komu byla původně věnována Symfonie č. 3 'Eroica'?",
      options: ["Mozartovi", "Napoleonovi", "Císaři Františkovi", "Beethovenovu otci"],
      correct: 1
    },
    {
      question: "Jak se jmenuje Beethovenova jediná opera?",
      options: ["Don Giovanni", "Fidelio", "Carmen", "Tosca"],
      correct: 1
    },
    {
      question: "Kolik symfonií celkem Beethoven složil?",
      options: ["7", "8", "9", "10"],
      correct: 2
    },
    {
      question: "Ve kterém městě Beethoven strávil většinu svého dospělého života?",
      options: ["Bonn", "Berlín", "Vídeň", "Mnichov"],
      correct: 2
    }
  ]

  const handleQuizAnswer = (answerIndex) => {
    const newAnswers = [...quizAnswers, answerIndex]
    setQuizAnswers(newAnswers)

    if (currentQuizQuestion < quizQuestions.length - 1) {
      setCurrentQuizQuestion(currentQuizQuestion + 1)
    } else {
      setShowQuizResults(true)
    }
  }

  const calculateScore = () => {
    return quizAnswers.reduce((score, answer, index) => {
      return score + (answer === quizQuestions[index].correct ? 1 : 0)
    }, 0)
  }

  const resetQuiz = () => {
    setCurrentQuizQuestion(0)
    setQuizAnswers([])
    setShowQuizResults(false)
    setQuizStarted(false)
  }

  const getScoreMessage = (score) => {
    if (score === 10) return "Perfektní! Jste skutečný Beethovenův expert! 🎼"
    if (score >= 8) return "Výborně! Máte vynikající znalosti o Beethovenovi! 🎵"
    if (score >= 6) return "Dobře! Máte solidní znalosti o Beethovenovi! 🎶"
    if (score >= 4) return "Slušně! Něco už o Beethovenovi víte! 🎹"
    return "Nevadí! Zkuste si přečíst článek znovu! 📚"
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-100">
      {/* Header */}
      <header className="bg-gradient-to-r from-amber-800 to-orange-800 text-white py-8 shadow-lg">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Music className="w-8 h-8" />
            <h1 className="text-4xl font-bold">Ludwig van Beethoven</h1>
            <Music className="w-8 h-8" />
          </div>
          <p className="text-xl opacity-90">Interaktivní průvodce pro gymnazisty</p>
          <div className="flex items-center justify-center gap-2 mt-4">
            <Clock className="w-5 h-5" />
            <span className="text-lg">Čas na prostudování: ~10 minut</span>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* Úvod */}
        <section className="mb-12">
          <Card className="overflow-hidden shadow-xl">
            <CardHeader className="bg-gradient-to-r from-amber-100 to-orange-100">
              <CardTitle className="text-3xl text-center">Kdo byl Ludwig van Beethoven?</CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <img 
                    src={beethovenPortrait1} 
                    alt="Ludwig van Beethoven" 
                    className="w-full rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="space-y-4">
                  <p className="text-lg leading-relaxed">
                    Ludwig van Beethoven byl jedním z největších hudebních géniů všech dob. 
                    Narodil se v Bonnu v Německu v prosinci 1770 a zemřel ve Vídni v roce 1827.
                  </p>
                  <p className="text-lg leading-relaxed">
                    Jeho hudba je stále inspirativní a ovlivňuje umělce po celém světě. 
                    Přestože postupně ztratil sluch, složil některá ze svých nejkrásnějších děl 
                    v úplné hluchotě!
                  </p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    <Badge variant="secondary" className="text-sm">Skladatel</Badge>
                    <Badge variant="secondary" className="text-sm">Pianista</Badge>
                    <Badge variant="secondary" className="text-sm">Génius</Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Život v kostce */}
        <section className="mb-12">
          <Card className="shadow-xl">
            <CardHeader className="bg-gradient-to-r from-blue-100 to-indigo-100">
              <CardTitle className="text-2xl">Život v kostce: Od Bonnu po Vídeň</CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="border-l-4 border-amber-500 pl-4">
                    <h3 className="font-bold text-lg mb-2">Dětství a mládí</h3>
                    <p>Beethoven se narodil v Bonnu v Německu. Jeho otec byl zpěvák a stal se jeho prvním učitelem. 
                    Už jako chlapec se stal cestujícím umělcem a podporoval svou rodinu.</p>
                  </div>
                  
                  <div className="border-l-4 border-blue-500 pl-4">
                    <h3 className="font-bold text-lg mb-2">Přesun do Vídně</h3>
                    <p>Ve svých dvaceti letech se přestěhoval do Vídně, kde strávil zbytek života. 
                    Byl jedním z prvních skladatelů, kteří si vydělávali na živobytí nezávisle na církvi nebo šlechtě.</p>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div className="border-l-4 border-red-500 pl-4">
                    <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
                      Ztráta sluchu <VolumeX className="w-5 h-5" />
                    </h3>
                    <p>Kolem 30 let začal ztrácet sluch. I přesto, že už nemohl dobře slyšet, 
                    složil některá ze svých nejlepších děl poté, co ohluchl!</p>
                  </div>
                  
                  <div className="border-l-4 border-green-500 pl-4">
                    <h3 className="font-bold text-lg mb-2">Osobnost</h3>
                    <p>Byl známý jako hlučný, hrubý a nepořádný člověk. Měl husté a divoké vlasy 
                    a jeho oblečení bylo často špinavé. Přesto byl respektovaný génius!</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Zajímavosti */}
        <section className="mb-12">
          <Card className="shadow-xl">
            <CardHeader className="bg-gradient-to-r from-purple-100 to-pink-100">
              <CardTitle className="text-2xl">Zajímavosti a kuriozity</CardTitle>
              <CardDescription>Věci, které vás možná překvapí!</CardDescription>
            </CardHeader>
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card className="border-2 border-purple-200 hover:shadow-lg transition-shadow">
                  <CardContent className="p-4">
                    <h4 className="font-bold mb-2">🎂 Neznámé datum narození</h4>
                    <p className="text-sm">Přesné datum narození není známo! Slaví se 17. prosince, 
                    což je datum jeho křtu.</p>
                  </CardContent>
                </Card>
                
                <Card className="border-2 border-blue-200 hover:shadow-lg transition-shadow">
                  <CardContent className="p-4">
                    <h4 className="font-bold mb-2">🧮 Problémy s matematikou</h4>
                    <p className="text-sm">Opustil školu v 11 letech a neuměl násobit ani dělit! 
                    Přesto skládal matematicky složité skladby.</p>
                  </CardContent>
                </Card>
                
                <Card className="border-2 border-green-200 hover:shadow-lg transition-shadow">
                  <CardContent className="p-4">
                    <h4 className="font-bold mb-2">🎹 Setkání s Mozartem</h4>
                    <p className="text-sm">Možná hrál pro Mozarta v roce 1787. Mozart o něm údajně řekl: 
                    "Zapamatujte si toho mladíka!"</p>
                  </CardContent>
                </Card>
                
                <Card className="border-2 border-red-200 hover:shadow-lg transition-shadow">
                  <CardContent className="p-4">
                    <h4 className="font-bold mb-2">🏥 Zdravotní problémy</h4>
                    <p className="text-sm">Trpěl mnoha nemocemi - nejen hluchotou, ale i hepatitidou, 
                    žloutenkou a dalšími chorobami.</p>
                  </CardContent>
                </Card>
                
                <Card className="border-2 border-orange-200 hover:shadow-lg transition-shadow">
                  <CardContent className="p-4">
                    <h4 className="font-bold mb-2">🍷 Poslední slova</h4>
                    <p className="text-sm">Jeho poslední slova pravděpodobně nebyla poetická, 
                    ale "Škoda, škoda – příliš pozdě" (když mu poslali víno).</p>
                  </CardContent>
                </Card>
                
                <Card className="border-2 border-yellow-200 hover:shadow-lg transition-shadow">
                  <CardContent className="p-4">
                    <h4 className="font-bold mb-2">😤 Kritika současníků</h4>
                    <p className="text-sm">Lidé nenáviděli jeho pozdní kvartety a nazývali je 
                    "nerozluštitelnými hrůzami"!</p>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Nejznámější díla */}
        <section className="mb-12">
          <Card className="shadow-xl">
            <CardHeader className="bg-gradient-to-r from-emerald-100 to-teal-100">
              <CardTitle className="text-2xl flex items-center gap-2">
                <Award className="w-6 h-6" />
                Nejznámější díla
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-4 rounded-lg border">
                    <h4 className="font-bold text-lg mb-2">🎼 Symfonie č. 3 "Eroica"</h4>
                    <p>Změnila hudební svět! Původně věnována Napoleonovi, ale Beethoven dedikaci odstranil v hněvu.</p>
                  </div>
                  
                  <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-4 rounded-lg border">
                    <h4 className="font-bold text-lg mb-2">🎵 Symfonie č. 5</h4>
                    <p>Známá svým úvodním motivem "ta-ta-ta-taaaa" - "Osud klepající na dveře"!</p>
                  </div>
                  
                  <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-4 rounded-lg border">
                    <h4 className="font-bold text-lg mb-2">🎶 Symfonie č. 9 "Sborová"</h4>
                    <p>Obsahuje slavnou "Ódu na radost" - hymnu Evropské unie!</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-4 rounded-lg border">
                    <h4 className="font-bold text-lg mb-2">🌙 Měsíční sonáta</h4>
                    <p>Jedna z nejkrásnějších klavírních sonát, plná melancholie a krásy.</p>
                  </div>
                  
                  <div className="bg-gradient-to-r from-red-50 to-rose-50 p-4 rounded-lg border">
                    <h4 className="font-bold text-lg mb-2">👑 Klavírní koncert č. 5 "Císařský"</h4>
                    <p>Majestátní a triumfální dílo, skvělá ukázka Beethovenova stylu.</p>
                  </div>
                  
                  <div className="bg-gradient-to-r from-yellow-50 to-amber-50 p-4 rounded-lg border">
                    <h4 className="font-bold text-lg mb-2">🎭 Opera Fidelio</h4>
                    <p>Jeho jediná opera o lásce, věrnosti a spravedlnosti.</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Kvíz */}
        <section className="mb-12">
          <Card className="shadow-xl">
            <CardHeader className="bg-gradient-to-r from-rose-100 to-pink-100">
              <CardTitle className="text-2xl flex items-center gap-2">
                <Heart className="w-6 h-6" />
                Interaktivní kvíz: Otestuj si své znalosti!
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              {!quizStarted ? (
                <div className="text-center space-y-4">
                  <p className="text-lg">Připraven/a otestovat své znalosti o Beethovenovi?</p>
                  <p className="text-gray-600">Kvíz obsahuje 10 otázek a zabere asi 3 minuty.</p>
                  <Button 
                    onClick={() => setQuizStarted(true)}
                    className="bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white px-8 py-3 text-lg"
                  >
                    Začít kvíz! 🎯
                  </Button>
                </div>
              ) : !showQuizResults ? (
                <div className="space-y-6">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">
                      Otázka {currentQuizQuestion + 1} z {quizQuestions.length}
                    </span>
                    <div className="w-full max-w-xs bg-gray-200 rounded-full h-2 ml-4">
                      <div 
                        className="bg-gradient-to-r from-rose-500 to-pink-500 h-2 rounded-full transition-all duration-300"
                        style={{ width: `${((currentQuizQuestion + 1) / quizQuestions.length) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-4">
                    {quizQuestions[currentQuizQuestion].question}
                  </h3>
                  
                  <div className="grid gap-3">
                    {quizQuestions[currentQuizQuestion].options.map((option, index) => (
                      <Button
                        key={index}
                        variant="outline"
                        className="text-left justify-start p-4 h-auto hover:bg-rose-50 hover:border-rose-300"
                        onClick={() => handleQuizAnswer(index)}
                      >
                        <span className="font-semibold mr-3">{String.fromCharCode(65 + index)})</span>
                        {option}
                      </Button>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="text-center space-y-6">
                  <h3 className="text-2xl font-bold">Výsledky kvízu</h3>
                  <div className="text-6xl">
                    {calculateScore() === 10 ? '🏆' : calculateScore() >= 8 ? '🎉' : calculateScore() >= 6 ? '👍' : calculateScore() >= 4 ? '📖' : '📚'}
                  </div>
                  <p className="text-xl">
                    Získal/a jsi <span className="font-bold text-rose-600">{calculateScore()}</span> z {quizQuestions.length} bodů!
                  </p>
                  <p className="text-lg text-gray-600">{getScoreMessage(calculateScore())}</p>
                  
                  <div className="space-y-2">
                    <h4 className="font-bold">Správné odpovědi:</h4>
                    {quizQuestions.map((q, index) => (
                      <div key={index} className="text-sm text-left bg-gray-50 p-2 rounded">
                        <strong>Q{index + 1}:</strong> {q.options[q.correct]}
                        {quizAnswers[index] === q.correct ? 
                          <span className="text-green-600 ml-2">✓</span> : 
                          <span className="text-red-600 ml-2">✗</span>
                        }
                      </div>
                    ))}
                  </div>
                  
                  <Button 
                    onClick={resetQuiz}
                    className="bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white"
                  >
                    Zkusit znovu 🔄
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>
        </section>

        {/* Závěr */}
        <section className="mb-12">
          <Card className="shadow-xl">
            <CardHeader className="bg-gradient-to-r from-indigo-100 to-purple-100">
              <CardTitle className="text-2xl">Beethovenův odkaz</CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="space-y-4">
                  <p className="text-lg leading-relaxed">
                    Ludwig van Beethoven změnil hudbu navždy. Jeho díla překonala hranice mezi 
                    klasicismem a romantismem a inspirovala generace skladatelů po něm.
                  </p>
                  <p className="text-lg leading-relaxed">
                    Přestože čelil mnoha překážkám - hluchotě, zdravotním problémům a osobním 
                    bojům - nikdy se nevzdal své vášně pro hudbu.
                  </p>
                  <p className="text-lg leading-relaxed font-semibold text-indigo-700">
                    Jeho příběh nás učí, že s odhodláním a talentem můžeme překonat jakékoli překážky!
                  </p>
                </div>
                <div>
                  <img 
                    src={beethovenPortrait2} 
                    alt="Beethoven při komponování" 
                    className="w-full rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
              
              <div className="mt-8 text-center">
                <p className="text-lg mb-4">Chceš slyšet Beethovenovu hudbu?</p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Badge variant="outline" className="text-sm p-2">🎵 Symfonie č. 9 - Óda na radost</Badge>
                  <Badge variant="outline" className="text-sm p-2">🌙 Měsíční sonáta</Badge>
                  <Badge variant="outline" className="text-sm p-2">⚡ Symfonie č. 5</Badge>
                  <Badge variant="outline" className="text-sm p-2">🎹 Für Elise</Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-amber-800 to-orange-800 text-white py-6">
        <div className="container mx-auto px-4 text-center">
          <p className="text-lg">🎼 Děkujeme za pozornost! 🎼</p>
          <p className="text-sm opacity-75 mt-2">
            Vytvořeno pro žáky 1. ročníku gymnázia | Čas na prostudování: ~10 minut
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App
