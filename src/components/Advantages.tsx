import * as React from 'react'
import { ReactComponent as Grass } from '../images/grass.svg'

const text = [
  {
    title: 'Individuelle Betreuung:',
    text: 'Wir gehen auf die Bedürfnisse jedes einzelnen Kindes ein.'
  },
  {
    title: 'Familiäre Atmosphäre:',
    text: 'Kinder fühlen sich bei uns sicher und geborgen.'
  },
  {
    title: 'Flexibilität:',
    text: 'Betreuungszeiten kommen individuellen Bedürfnissen entgegen.'
  },
  {
    title: 'Konitnuität:',
    text: 'Konstante Bezugspersonen über einen längeren Zeitraum hinweg.'
  },
  {
    title: 'Kleine Gruppengröße:',
    text: 'Wir haben eine ruhige und weniger überfordernde Umgebung.'
  },
  {
    title: 'Individuelle Förderung:',
    text: 'Wir erkennen besser und fördern gezielter individuelle Fähigkeiten.'
  },
  {
    title: 'Persönliche Beziehung:',
    text: 'Wir pflegen eine enge und persönliche Beziehung zu Deinem Kind.'
  }
]

const Advantages: React.FC = () => {
  React.useEffect(() => {
    const options = {
      root: null,
      threshold: 0.9
    }

    const toggleClass = (entries: any, observer: any): void => {
      entries.forEach((entry: any) => {
        if (entry.isIntersecting === false) {
          return
        }
        entry.target.classList.toggle('animate-slideUp', entry.isIntersecting)
        observer.unobserve(entry.target)
      })
    }

    const targets = document.querySelectorAll('.advantage')
    const observer = new IntersectionObserver(toggleClass, options)

    targets.forEach((target) => {
      observer.observe(target)
    })
  }, [])

  return (
    <>
      <section className="relative col-start-2 col-end-4 grid md:grid-cols-[repeat(auto-fill,_minmax(15rem,_1fr))] gap-6">
        {text.map((item, index) => {
          return (
            <div
              className="advantage flex flex-col opacity-0 translate-y-12"
              key={index}
            >
              <Grass className="mx-auto h-12 text-battleship-gray-200" />
              <div className="flex-1 px-6 py-8 text-xl text-center bg-whiskey-200 rounded-3xl bg-gradient-to-b from-battleship-gray-200 via-whiskey-200 to-whiskey-200">
                <h3>{item.title}</h3>
                <p className="mt-2">
                  <strong>{item.text}</strong>
                </p>
              </div>
            </div>
          )
        })}
      </section>
    </>
  )
}

export default Advantages
